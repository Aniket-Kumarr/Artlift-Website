# Artlift Website

A modern, professional website for Artlift art services with integrated Stripe payment processing for real credit card details.

## Features

- 🎨 **Professional Art Services Website** - Beautiful, responsive design showcasing art consultation and custom artwork services
- 💳 **Real Credit Card Processing** - Accept real credit card details directly on your website with Stripe Elements
- 🚀 **Next.js 15** - Built with the latest Next.js features and App Router
- 🎨 **Tailwind CSS** - Modern, utility-first CSS framework
- 📱 **Responsive Design** - Optimized for all devices
- 🔒 **Secure Payments** - PCI-compliant payment processing with real-time card validation
- 📊 **Webhook Support** - Real-time payment event handling

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe (Elements + Payment Intents)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Artlift-Website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your Stripe credentials:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Stripe Setup

### 1. Create a Stripe Account
- Sign up at [stripe.com](https://stripe.com)
- Complete your business profile
- Verify your identity and business details

### 2. Get API Keys
- Go to Stripe Dashboard → Developers → API keys
- Copy your publishable and secret keys
- Add them to your `.env.local` file
- **Important**: The publishable key must start with `NEXT_PUBLIC_` to work in the browser

### 3. Set Up Webhooks (Optional but Recommended)
- Go to Stripe Dashboard → Developers → Webhooks
- Add endpoint: `https://yourdomain.com/api/stripe/webhook`
- Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
- Copy the webhook secret to your `.env.local`

### 4. Test the Integration
- Use Stripe's test card numbers (e.g., 4242 4242 4242 4242)
- Test successful and failed payment scenarios
- Verify real-time card validation

## How It Works

### Real Credit Card Processing
1. **Customer enters real card details** directly on your website
2. **Stripe Elements** provides secure, PCI-compliant card input fields
3. **Real-time validation** checks card details as the customer types
4. **Payment Intent** is created on your server
5. **Card is charged** directly through Stripe
6. **Money goes to your Stripe account** (then to your bank)

### Security Features
- **PCI DSS Compliant**: Stripe handles all sensitive card data
- **No card storage**: Card details never touch your servers
- **Real-time validation**: Invalid cards are caught immediately
- **Fraud protection**: Stripe's built-in fraud detection

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── stripe/        # Stripe API endpoints
│   │       ├── checkout/  # Legacy checkout (redirect-based)
│   │       ├── payment-intent/ # New payment intent creation
│   │       └── webhook/   # Webhook handler
│   ├── payment/           # Payment page
│   ├── success/           # Success page
│   ├── cancel/            # Cancel page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── PaymentForm.tsx    # Legacy redirect-based form
│   ├── StripePaymentForm.tsx # New real card input form
│   └── StripeProvider.tsx # Stripe context provider
├── hooks/                  # Custom React hooks
│   ├── useStripeCheckout.ts # Legacy checkout hook
│   └── useStripePayment.ts # New payment hook
└── lib/                    # Utility libraries
    └── stripe.ts          # Stripe configuration
```

## API Endpoints

### POST `/api/stripe/payment-intent`
Creates a Stripe payment intent for direct card processing.

**Request Body:**
```json
{
  "amount": 2000,
  "description": "Art Consultation"
}
```

**Response:**
```json
{
  "clientSecret": "pi_..._secret_...",
  "paymentIntentId": "pi_..."
}
```

### POST `/api/stripe/webhook`
Handles Stripe webhook events (payment success/failure).

## Testing

### Test Card Numbers
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expired**: `4000 0000 0000 0069`
- **Insufficient Funds**: `4000 0000 0000 9995`

### Testing Flow
1. Navigate to `/payment`
2. Fill in customer details
3. Enter test card information
4. Submit payment
5. Check Stripe dashboard for transaction

## Customization

### Modifying Payment Amounts
Edit the `StripePaymentForm` component to change default amounts or add pricing tiers.

### Adding Customer Fields
The form includes name and email fields. Add more fields as needed for your business.

### Styling
The site uses Tailwind CSS. Modify classes in components to change appearance.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Production
- `STRIPE_SECRET_KEY`: Your live Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your live Stripe publishable key
- `NEXT_PUBLIC_APP_URL`: Your production domain

## Security Considerations

- Never expose `STRIPE_SECRET_KEY` in client-side code
- Always verify webhook signatures
- Use HTTPS in production
- Implement proper error handling
- Consider rate limiting for API endpoints
- The `NEXT_PUBLIC_` prefix makes the publishable key available in the browser (this is safe)

## Support

For issues related to:
- **Stripe**: [Stripe Support](https://support.stripe.com)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Project-specific**: Open an issue in this repository

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ for the art community
