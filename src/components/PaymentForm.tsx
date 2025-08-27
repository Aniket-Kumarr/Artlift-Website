'use client';

import { useState } from 'react';
import { useStripeCheckout } from '@/hooks/useStripeCheckout';

interface PaymentFormProps {
  defaultAmount?: number;
  defaultDescription?: string;
}

export default function PaymentForm({ 
  defaultAmount = 2000, 
  defaultDescription = 'Artlift Service' 
}: PaymentFormProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [description, setDescription] = useState(defaultDescription);
  const { checkout, isLoading, error, clearError } = useStripeCheckout();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    checkout({
      amount,
      description,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            value={amount / 100}
            onChange={(e) => setAmount(Math.round(parseFloat(e.target.value) * 100))}
            step="0.01"
            min="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Amount will be charged in cents: ${(amount / 100).toFixed(2)}
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Processing...' : 'Pay with Stripe'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}

