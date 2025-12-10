# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository with your code
- Cloudflare account with domain
- Stripe account with API keys

## Deployment Steps

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

### 2. Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select **GitHub** and authorize Cloudflare
4. Choose repository: `Aniket-Kumarr/Artlift-Website`
5. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `pnpm build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (default)
   - **Node version**: `20` or latest LTS

### 3. Add Environment Variables

In Cloudflare Pages project → **Settings** → **Environment variables**, add:

```
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

**Important**: Add these for both **Production** and **Preview** environments.

### 4. Connect Custom Domain

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter your domain (e.g., `yourdomain.com`)
3. Cloudflare will automatically configure DNS records
4. Wait for DNS propagation (usually 5-15 minutes)

### 5. Update Stripe Webhook

After deployment, update your Stripe webhook endpoint:
- Go to Stripe Dashboard → **Developers** → **Webhooks**
- Add endpoint: `https://yourdomain.com/api/stripe/webhook`
- Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
- Copy the webhook secret and add it to Cloudflare environment variables

## Build Configuration

The project is configured for Cloudflare Pages:
- Build command: `pnpm build` (uses standard Next.js build, not Turbopack)
- Output: Next.js standalone build
- Node version: 20 (recommended)

## Troubleshooting

### Build Fails
- Check Node version is set to 20
- Verify all environment variables are set
- Check build logs in Cloudflare Pages dashboard

### Domain Not Working
- Verify DNS records in Cloudflare DNS settings
- Check SSL/TLS mode is set to "Full" or "Full (strict)"
- Wait for DNS propagation (can take up to 24 hours)

### Stripe Errors
- Verify all Stripe environment variables are set correctly
- Check webhook URL matches your production domain
- Ensure webhook secret is correct

## Notes

- Cloudflare Pages automatically handles SSL certificates
- The site will auto-deploy on every push to main branch
- Preview deployments are created for pull requests

