# Pastry Palace - Deployment Guide

## Overview
This guide covers deploying the Pastry Palace React app to production with proper environment configuration.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] `.env.local` is in `.gitignore` (never commit secrets)
- [ ] Tested in development mode locally
- [ ] All features working with real Supabase & Telegram
- [ ] Build passes without errors (`npm run build`)

## Environment Configuration

### Development Setup
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials:
   ```env
   REACT_APP_SUPABASE_URL=your-supabase-url
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key
   REACT_APP_TELEGRAM_BOT_TOKEN=your-bot-token
   REACT_APP_TELEGRAM_CHAT_ID=your-chat-id
   ```

3. Run dev server:
   ```bash
   npm start
   ```

### Production Build

1. Build the app:
   ```bash
   npm run build
   ```

2. The `build/` folder contains the production-ready files

## Deployment Platforms

### Option 1: Vercel (Recommended)
Easiest deployment with automatic environment variables.

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Add environment variables in Vercel dashboard:
   - `REACT_APP_SUPABASE_URL`
   - `REACT_APP_SUPABASE_ANON_KEY`
   - `REACT_APP_TELEGRAM_BOT_TOKEN`
   - `REACT_APP_TELEGRAM_CHAT_ID`

4. Vercel will automatically build and deploy

### Option 2: Netlify

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and drag-drop the `build` folder, OR connect your GitHub repo

3. Add environment variables in Netlify dashboard under Site Settings → Build & Deploy → Environment

4. Redeploy for changes to take effect

### Option 3: GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/bakery"
   ```

2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

**Note:** Environment variables won't be available on GitHub Pages (it's static). Use Vercel or Netlify for dynamic features.

### Option 4: Self-Hosted (Docker/VPS)

1. Create `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   ARG REACT_APP_SUPABASE_URL
   ARG REACT_APP_SUPABASE_ANON_KEY
   ARG REACT_APP_TELEGRAM_BOT_TOKEN
   ARG REACT_APP_TELEGRAM_CHAT_ID
   ENV REACT_APP_SUPABASE_URL=$REACT_APP_SUPABASE_URL
   ENV REACT_APP_SUPABASE_ANON_KEY=$REACT_APP_SUPABASE_ANON_KEY
   ENV REACT_APP_TELEGRAM_BOT_TOKEN=$REACT_APP_TELEGRAM_BOT_TOKEN
   ENV REACT_APP_TELEGRAM_CHAT_ID=$REACT_APP_TELEGRAM_CHAT_ID
   RUN npm run build
   
   FROM nginx:alpine
   COPY --from=build /app/build /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Build and run:
   ```bash
   docker build \
     --build-arg REACT_APP_SUPABASE_URL="your-url" \
     --build-arg REACT_APP_SUPABASE_ANON_KEY="your-key" \
     --build-arg REACT_APP_TELEGRAM_BOT_TOKEN="your-token" \
     --build-arg REACT_APP_TELEGRAM_CHAT_ID="your-id" \
     -t pastry-palace .
   
   docker run -p 80:80 pastry-palace
   ```

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `REACT_APP_SUPABASE_URL` | Yes | Supabase project URL | `https://abc.supabase.co` |
| `REACT_APP_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key | Long JWT token |
| `REACT_APP_TELEGRAM_BOT_TOKEN` | No* | Telegram bot token | `123456:ABC...` |
| `REACT_APP_TELEGRAM_CHAT_ID` | No* | Telegram chat ID | `7497065699` |

*Telegram is optional - app works without it but won't send notifications

## Security Best Practices

1. **Never commit `.env` files**
   ```bash
   # Already in .gitignore, but verify:
   git status  # Should not show .env.local
   ```

2. **Rotate credentials periodically**
   - Regenerate Supabase keys annually
   - Recreate Telegram bot tokens if exposed

3. **Use separate credentials per environment**
   - Development: `.env.local`
   - Staging: `.env.staging`
   - Production: Platform-specific (Vercel, Netlify, etc.)

4. **Restrict Supabase access**
   - Use Row Level Security (RLS) policies
   - Limit API key permissions
   - Monitor API usage

5. **Secure Telegram bot**
   - Don't share bot token publicly
   - Use a group chat instead of personal chat if sharing notifications
   - Monitor message volume

## Post-Deployment

### Verify Deployment

1. Test authentication at `/login` and `/register`
2. Test feedback submission at `/feedback`
3. Test orders at `/checkout`
4. Test customization at `/customize`
5. Check Telegram for notifications

### Monitoring

- Monitor Supabase dashboard for API usage
- Check Telegram for regular message delivery
- Set up error tracking (optional: Sentry, LogRocket)

### Updates & Maintenance

1. Update dependencies regularly:
   ```bash
   npm outdated
   npm update
   npm audit fix
   ```

2. Test new versions in development first:
   ```bash
   npm start
   ```

3. Deploy updates:
   ```bash
   git add .
   git commit -m "Update dependencies"
   git push  # Vercel/Netlify auto-deploys
   ```

## Troubleshooting

### Env vars not loading
- Check platform-specific environment variable syntax
- Verify variable names are correct (case-sensitive)
- Restart build after adding vars
- For Vercel: Check "Skip Functions for now" is unchecked

### Telegram not sending
- Verify bot token and chat ID
- Check API response in browser console
- Test bot with curl: `curl -X POST https://api.telegram.org/bot{TOKEN}/sendMessage...`

### Authentication not working
- Verify Supabase URL and key
- Check Supabase project is active
- Verify user email is confirmed in Supabase

### Build fails
- Run `npm ci` instead of `npm install` for CI/CD
- Check Node version (requires v16+)
- Clear cache: `npm cache clean --force`

## Support

- Supabase Docs: https://supabase.com/docs
- Telegram Bot API: https://core.telegram.org/bots/api
- React Docs: https://react.dev
