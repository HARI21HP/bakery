/**
 * Telegram Bot Service
 * Sends messages to Telegram using the Bot API
 */

const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID || '';

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn(
    'Telegram credentials not configured. Set REACT_APP_TELEGRAM_BOT_TOKEN and REACT_APP_TELEGRAM_CHAT_ID in .env.local'
  );
}

interface SendMessageOptions {
  parse_mode?: 'HTML' | 'Markdown' | 'MarkdownV2';
  disable_web_page_preview?: boolean;
}

/**
 * Send a message to Telegram
 */
export const sendTelegramMessage = async (
  text: string,
  options: SendMessageOptions = { parse_mode: 'HTML' }
): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn('Telegram not configured, skipping message send');
      return { success: true }; // Don't fail if Telegram is not configured
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        ...options,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.description || 'Failed to send Telegram message');
    }

    return { success: true };
  } catch (error: any) {
    console.error('Telegram error:', error);
    return { success: false, error: error?.message || 'Failed to send Telegram message' };
  }
};

/**
 * Send feedback to Telegram
 */
export const sendFeedbackToTelegram = async (feedbackData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  rating?: number;
}): Promise<{ success: boolean; error?: string }> => {
  const messageText = `
<b>📝 New Feedback Received</b>

<b>Name:</b> ${feedbackData.name}
<b>Email:</b> ${feedbackData.email}
<b>Phone:</b> ${feedbackData.phone}
<b>Rating:</b> ${feedbackData.rating ? '⭐'.repeat(feedbackData.rating) : 'N/A'}

<b>Message:</b>
${feedbackData.message}

---
<i>Sent at ${new Date().toLocaleString()}</i>
  `.trim();

  return sendTelegramMessage(messageText);
};

/**
 * Send order to Telegram
 */
export const sendOrderToTelegram = async (orderData: {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  tax: number;
  total: number;
  deliveryAddress: string;
  deliveryDate?: string;
  specialNotes?: string;
}): Promise<{ success: boolean; error?: string }> => {
  const itemsText = orderData.items
    .map((item) => `• ${item.name} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`)
    .join('\n');

  const messageText = `
<b>🛒 New Order Received</b>

<b>Order ID:</b> ${orderData.orderId}
<b>Customer:</b> ${orderData.customerName}
<b>Email:</b> ${orderData.email}
<b>Phone:</b> ${orderData.phone}

<b>Items:</b>
${itemsText}

<b>Subtotal:</b> ₹${orderData.subtotal.toFixed(2)}
<b>Tax:</b> ₹${orderData.tax.toFixed(2)}
<b>Total:</b> ₹${orderData.total.toFixed(2)}

<b>Delivery Address:</b>
${orderData.deliveryAddress}

${orderData.deliveryDate ? `<b>Delivery Date:</b> ${orderData.deliveryDate}\n` : ''}
${orderData.specialNotes ? `<b>Special Notes:</b>\n${orderData.specialNotes}\n` : ''}
---
<i>Sent at ${new Date().toLocaleString()}</i>
  `.trim();

  return sendTelegramMessage(messageText);
};

/**
 * Send customize request to Telegram
 */
export const sendCustomizeToTelegram = async (customizeData: {
  customerName: string;
  email: string;
  phone: string;
  cakeType: string;
  size: string;
  flavor: string;
  frosting: string;
  fillings: string[];
  toppers: string[];
  specialRequests: string;
  preferredDate?: string;
  budget?: number;
}): Promise<{ success: boolean; error?: string }> => {
  const messageText = `
<b>🎂 New Customization Request</b>

<b>Customer:</b> ${customizeData.customerName}
<b>Email:</b> ${customizeData.email}
<b>Phone:</b> ${customizeData.phone}

<b>Cake Details:</b>
• <b>Type:</b> ${customizeData.cakeType}
• <b>Size:</b> ${customizeData.size}
• <b>Flavor:</b> ${customizeData.flavor}
• <b>Frosting:</b> ${customizeData.frosting}
• <b>Fillings:</b> ${customizeData.fillings.length > 0 ? customizeData.fillings.join(', ') : 'None'}
• <b>Toppers:</b> ${customizeData.toppers.length > 0 ? customizeData.toppers.join(', ') : 'None'}

${customizeData.budget ? `<b>Budget:</b> ₹${customizeData.budget}\n` : ''}
${customizeData.preferredDate ? `<b>Preferred Date:</b> ${customizeData.preferredDate}\n` : ''}
<b>Special Requests:</b>
${customizeData.specialRequests || 'None'}

---
<i>Sent at ${new Date().toLocaleString()}</i>
  `.trim();

  return sendTelegramMessage(messageText);
};
