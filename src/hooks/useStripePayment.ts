import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';

interface PaymentOptions {
  amount: number; // Amount in cents
  description: string;
}

export const useStripePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const processPayment = async (options: PaymentOptions) => {
    if (!stripe || !elements) {
      setError('Stripe has not loaded yet');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Create payment intent
      const response = await fetch('/api/stripe/payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Get the card element
      const cardElement = elements.getElement('card');
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      // Confirm the payment
      const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: 'Customer Name', // You can make this dynamic
            },
          },
        }
      );

      if (paymentError) {
        throw new Error(paymentError.message || 'Payment failed');
      }

      if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
        // You can redirect to success page or show success message
      } else {
        throw new Error('Payment was not successful');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processPayment,
    isLoading,
    error,
    success,
    setError,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(false),
  };
};

