function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export async function sendTelegramMessage({ name, email, message }) {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram bot sozlanmagan. .env faylga token va chat ID kiriting.');
  }

  const text = [
    '<b>New UCH contact</b>',
    '',
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    '',
    '<b>Message:</b>',
    escapeHtml(message),
  ].join('\n');

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
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
  });

  if (!response.ok) {
    throw new Error('Telegramga yuborishda xatolik yuz berdi.');
  }

  const result = await response.json();

  if (!result.ok) {
    throw new Error('Telegram xabari qabul qilinmadi.');
  }

  return result;
}
