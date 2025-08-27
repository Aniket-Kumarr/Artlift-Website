import { useState } from 'react';
import { getStripe } from '@/lib/stripe';

interface CheckoutOptions {
  amount: number; // Amount in cents
  description: string;
  successUrl?: string;
  cancelUrl?: string;
}

export const useStripeCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async (options: CheckoutOptions) => {
    setIsLoading(true);
    setError(null);

    try {
      // Create checkout session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe checkout
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkout,
    isLoading,
    error,
    clearError: () => setError(null),
  };
};

