function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function validateField(name, value) {
  const trimmedValue = String(value || '').trim();

  if (!trimmedValue) {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
  }

  if (name === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedValue)) {
      return 'Please enter a valid email address.';
    }
  }

  if (name === 'message' && trimmedValue.length < 10) {
    return 'Message should be at least 10 characters.';
  }

  return '';
}

export async function POST(request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return json(
      { error: 'Server environment variables are missing.' },
      { status: 500 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const payload = {
    name: String(body?.name || '').trim(),
    email: String(body?.email || '').trim(),
    message: String(body?.message || '').trim(),
  };

  const errors = {
    name: validateField('name', payload.name),
    email: validateField('email', payload.email),
    message: validateField('message', payload.message),
  };

  if (Object.values(errors).some(Boolean)) {
    return json(
      { error: 'Please complete the required fields correctly.', fieldErrors: errors },
      { status: 400 },
    );
  }

  const text = [
    '<b>New UCH contact</b>',
    '',
    `<b>Name:</b> ${escapeHtml(payload.name)}`,
    `<b>Email:</b> ${escapeHtml(payload.email)}`,
    '',
    '<b>Message:</b>',
    escapeHtml(payload.message),
  ].join('\n');

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    },
  );

  let telegramResult = null;

  try {
    telegramResult = await telegramResponse.json();
  } catch {
    telegramResult = null;
  }

  if (!telegramResponse.ok || !telegramResult?.ok) {
    return json(
      { error: 'Telegram message could not be delivered.' },
      { status: 502 },
    );
  }

  return json({ ok: true });
}
