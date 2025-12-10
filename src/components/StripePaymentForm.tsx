'use client';
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useStripePayment } from '@/hooks/useStripePayment';
import { motion } from "framer-motion";
import {
  CreditCard,
  Lock,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  Star,
  Zap,
  Heart,
  Palette,
  Brush,
  Rocket,
  ArrowRight,
  Eye,
  EyeOff
} from "lucide-react";

interface StripePaymentFormProps {
  defaultAmount?: number;
  defaultDescription?: string;
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '18px',
      color: '#e2e8f0',
      fontFamily: 'system-ui, sans-serif',
      '::placeholder': {
        color: '#94a3b8',
      },
      backgroundColor: 'transparent',
      padding: '16px',
      borderRadius: '12px',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      '&:focus': {
        border: '2px solid rgba(59, 130, 246, 0.6)',
        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      },
    },
    invalid: {
      color: '#ef4444',
      border: '2px solid rgba(239, 68, 68, 0.6)',
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function StripePaymentForm({
  defaultAmount = 5000,
  defaultDescription = 'Artlift Consultation Service'
}: StripePaymentFormProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [description, setDescription] = useState(defaultDescription);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { processPayment, isLoading, error, success, clearError, clearSuccess, setError } = useStripePayment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    clearSuccess();

    if (!customerName.trim() || !customerEmail.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    await processPayment({
      amount,
      description,
    });
  };

  if (success) {
    return (
      <motion.div
        className="max-w-md mx-auto p-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl border border-green-500/30 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Payment Successful!
          </motion.h2>

          <motion.p
            className="text-green-200 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Thank you for choosing Artlift! We&apos;ll be in touch soon to discuss your project details.
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-2 text-green-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Your creative journey begins now!</span>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-md mx-auto p-8 bg-black/30 backdrop-blur-xl rounded-3xl border border-blue-500/20 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        {...fadeInUp}
      >
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <CreditCard className="w-8 h-8 text-white" />
        </motion.div>

        <h2 className="text-3xl font-bold text-white mb-2">Secure Payment</h2>
        <p className="text-blue-300">Complete your purchase with confidence</p>
      </motion.div>

      {/* Security Badge */}
      <motion.div
        className="flex items-center justify-center space-x-2 mb-8 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Shield className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-300 font-medium">256-bit SSL Encrypted</span>
        <Lock className="w-5 h-5 text-blue-400" />
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Details */}
        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <label className="block text-blue-200 text-sm font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="Enter your full name"
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Heart className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-blue-200 text-sm font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Selection */}
        <motion.div
          className="space-y-4"
          variants={fadeInUp}
        >
          <label className="block text-blue-200 text-sm font-medium mb-2">
            Service Description
          </label>
          <div className="relative">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              placeholder="Describe your project or service needed"
              rows={3}
            />
            <div className="absolute right-3 top-3">
              <Palette className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
        </motion.div>

        {/* Amount Selection */}
        <motion.div
          className="space-y-4"
          variants={fadeInUp}
        >
          <label className="block text-blue-200 text-sm font-medium mb-2">
            Amount (USD)
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount / 100}
              onChange={(e) => setAmount(Math.round(parseFloat(e.target.value) * 100) || 0)}
              className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="0.00"
              min="0"
              step="0.01"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-blue-400 font-medium">$</span>
            </div>
          </div>
          <p className="text-sm text-blue-300">Amount will be charged in USD</p>
        </motion.div>

        {/* Card Element */}
        <motion.div
          className="space-y-4"
          variants={fadeInUp}
        >
          <label className="block text-blue-200 text-sm font-medium mb-2">
            Card Details
          </label>
          <div className="relative">
            <CardElement options={cardElementOptions} />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Brush className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div
            className="flex items-center space-x-3 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:via-cyan-700 hover:to-indigo-700 transition-all duration-500 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
          variants={fadeInUp}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing Payment...</span>
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5" />
              <span>Complete Payment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </motion.button>
      </form>

      {/* Trust Indicators */}
      <motion.div
        className="mt-8 pt-8 border-t border-blue-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-center space-x-6 text-sm text-blue-300">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Trusted</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Guaranteed</span>
          </div>
        </div>

        <p className="text-center text-xs text-blue-400 mt-4">
          Powered by Stripe • Your payment information is secure and encrypted
        </p>
      </motion.div>
    </motion.div>
  );
}

