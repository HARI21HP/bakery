# Telegram Integration Setup Guide

## Overview
The Pastry Palace app now sends feedback, orders, and customization requests to Telegram in real-time.

## Setup Instructions

### 1. Create a Telegram Bot (if you haven't already)
- Open Telegram and search for **@BotFather**
- Send `/start` and follow the prompts to create a new bot
- Copy the **Bot Token** (looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

### 2. Get Your Telegram Chat ID
- Create a Telegram group or use a private channel for notifications
- Search for **@userinfobot** in Telegram
- Send any message to it and it will reply with your chat ID
- Alternatively, if using a group, add your bot to the group and send a message, then check logs

### 3. Update `.env.local`
Update the environment variables in `/home/hg/bakery/.env.local`:

```env
REACT_APP_TELEGRAM_BOT_TOKEN=your-bot-token-here
REACT_APP_TELEGRAM_CHAT_ID=your-chat-id-here
```

### 4. Restart the Development Server
The dev server will automatically pick up the new environment variables after a refresh.

## Features

### 📝 Feedback Integration
**Page:** `/feedback`
- Collects customer name, email, phone, rating, and feedback message
- Sends beautifully formatted message to Telegram with:
  - Customer details
  - Star rating
  - Full feedback message
  - Timestamp

### 📦 Order Integration
**Page:** `/checkout`
- Collects customer delivery information
- Sends comprehensive order details to Telegram including:
  - Order ID
  - Customer information
  - All ordered items with quantities and prices
  - Subtotal, tax, and total
  - Complete delivery address
  - Timestamp

### 🎂 Customization Request Integration
**Page:** `/customize`
- Collects detailed cake customization requirements
- Sends detailed customization request to Telegram with:
  - Customer information
  - Cake type, size, flavor, frosting
  - Selected fillings and toppers
  - Budget and preferred delivery date
  - Special instructions
  - Timestamp

## Telegram Message Format

All messages use **HTML formatting** for better readability:
- **Bold text** for headings and field names
- Emojis for quick visual identification
- Organized tables with proper line breaks
- Timestamps for tracking

## Example Messages

### Feedback Message
```
📝 New Feedback Received

Name: John Doe
Email: john@example.com
Phone: 9876543210
Rating: ⭐⭐⭐⭐⭐

Message:
The chocolate truffle cake was absolutely delicious!

---
Sent at 11/8/2025, 3:45:30 PM
```

### Order Message
```
🛒 New Order Received

Order ID: ORD-1731052530000
Customer: Jane Smith
Email: jane@example.com
Phone: 9876543210

Items:
• Chocolate Truffle Cake × 2 = ₹1700.00
• Red Velvet Jar Cake × 1 = ₹250.00

Subtotal: ₹1950.00
Tax: ₹195.00
Total: ₹2145.00

Delivery Address:
123 Baker Street, Mumbai, 400001

---
Sent at 11/8/2025, 3:50:15 PM
```

### Customization Message
```
🎂 New Customization Request

Customer: Nila Sharma
Email: nila@pastrypalace.com
Phone: 9988776655

Cake Details:
• Type: Chocolate Cake
• Size: 2 kg
• Flavor: Chocolate
• Frosting: Ganache
• Fillings: Chocolate, Caramel
• Toppers: Edible Gold, Fresh Fruits

Budget: ₹5000
Preferred Date: 2025-11-15

Special Requests:
"Happy Birthday" message on top with colorful sprinkles

---
Sent at 11/8/2025, 4:00:00 PM
```

## Troubleshooting

### Messages Not Sending?
1. Verify bot token and chat ID are correct in `.env.local`
2. Check that your bot is added to the group/channel
3. Ensure the bot has permission to send messages
4. Check browser console for error messages

### Fallback Behavior
- If Telegram credentials are not configured, the app shows a warning but continues to work
- Forms will still submit and redirect normally
- You'll see a console warning but no user-facing errors

## Security Notes
- **Never commit `.env.local` to version control** - it contains sensitive credentials
- Add `.env.local` to your `.gitignore` file
- Regenerate bot token if you suspect it's been exposed
- Use a dedicated bot for each environment (dev, staging, production)

## Environment Files
- `.env.local` - Development credentials (not committed)
- `.env.example` - Template for environment variables (optional)

## Additional Resources
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [BotFather Quick Reference](https://core.telegram.org/bots/features#botfather)
