const MAKE_WEBHOOK_URL =
  "https://hook.eu2.make.com/9nfq32pvj4vfc444dvjqm25rf0s32uc8";

export async function sendTelegramMessage(data) {
  try {
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Make webhook error");
    }

    return await res.text();
  } catch (err) {
    throw new Error("Xabar yuborilmadi");
  }
}
