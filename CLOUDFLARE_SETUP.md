# Cloudflare Pages Setup - Step by Step

## Navigation Steps

### Step 1: Get to Workers & Pages
1. Click the **Cloudflare logo** (orange cloud) in the top left to go to the main dashboard
2. In the left sidebar, look for **"Workers & Pages"** 
   - If you don't see it, use the search bar at the top (⌘K) and type "Workers & Pages"
3. Click on **"Workers & Pages"**

### Step 2: Create a Pages Project
1. Once in Workers & Pages, click the **"Create application"** button (usually at the top)
2. You'll see tabs: **"Workers"** and **"Pages"** - click on **"Pages"**
3. Click **"Connect to Git"** button

### Step 3: Connect GitHub
1. Select **"GitHub"** as your Git provider
2. Authorize Cloudflare to access your GitHub account
3. Select your repository: **`Aniket-Kumarr/Artlift-Website`**
4. Click **"Begin setup"**

### Step 4: Configure Build Settings
Fill in these settings:

- **Project name**: `artlift-website` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: Select **"Next.js"** from the dropdown
- **Build command**: `pnpm build`
- **Build output directory**: `.next`
- **Root directory**: `/` (leave as default)
- **Environment variables**: Click "Add variable" and add:
  - `STRIPE_SECRET_KEY` = `sk_live_...` (your Stripe secret key)
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...` (your Stripe publishable key)
  - `STRIPE_WEBHOOK_SECRET` = `whsec_...` (your webhook secret)
  - `NEXT_PUBLIC_APP_URL` = `https://yourdomain.com` (your Cloudflare domain)

5. Click **"Save and Deploy"**

### Step 5: Wait for First Deployment
- Cloudflare will start building your site
- This usually takes 2-5 minutes
- You'll see build logs in real-time
- Once complete, you'll get a temporary URL like: `artlift-website.pages.dev`

### Step 6: Connect Your Custom Domain
1. After deployment succeeds, go to your project page
2. Click on the **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain (e.g., `yourdomain.com` or `www.yourdomain.com`)
5. Cloudflare will automatically configure DNS records
6. Wait 5-15 minutes for DNS to propagate

### Step 7: Update Stripe Webhook
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **Webhooks**
3. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
4. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
5. Copy the webhook secret
6. Go back to Cloudflare Pages → Your project → Settings → Environment variables
7. Update `STRIPE_WEBHOOK_SECRET` with the new secret

## Quick Navigation Shortcuts

- **Main Dashboard**: Click Cloudflare logo (top left)
- **Workers & Pages**: Search "Workers & Pages" or find in left sidebar
- **Your Project**: Workers & Pages → Your project name
- **Custom Domains**: Your project → Custom domains tab
- **Environment Variables**: Your project → Settings → Environment variables

## Troubleshooting

**Can't find "Workers & Pages"?**
- Make sure you're logged into the correct Cloudflare account
- Try refreshing the page
- Use the search bar (⌘K) and type "Pages"

**Build fails?**
- Check the build logs in Cloudflare
- Make sure Node version is set to 20
- Verify all environment variables are set correctly

**Domain not working?**
- Check DNS records in Cloudflare DNS settings
- Verify SSL/TLS mode is "Full" or "Full (strict)"
- Wait for DNS propagation (can take up to 24 hours)

