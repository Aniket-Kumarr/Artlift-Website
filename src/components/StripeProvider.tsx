'use client';

import { ReactNode } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';

interface StripeProviderProps {
  children: ReactNode;
}

export default function StripeProvider({ children }: StripeProviderProps) {
  // For now, we'll use a placeholder publishable key
  // You'll need to replace this with your actual Stripe publishable key
  const stripePromise = getStripe();

  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
}

