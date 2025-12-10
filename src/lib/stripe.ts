import Stripe from 'stripe';

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

// Client-side Stripe instance
export const getStripe = async () => {
  const { loadStripe } = await import('@stripe/stripe-js');
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
};

// Stripe configuration constants
export const STRIPE_CONFIG = {
  currency: 'usd',
  payment_method_types: ['card'] as ('card')[],
};

// Payment intent configuration
export const PAYMENT_INTENT_CONFIG = {
  currency: 'usd',
  automatic_payment_methods: {
    enabled: true,
  },
} as const;
