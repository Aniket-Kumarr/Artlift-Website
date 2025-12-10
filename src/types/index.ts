// Stripe-related types
export interface CheckoutOptions {
  amount: number; // Amount in cents
  description: string;
  successUrl?: string;
  cancelUrl?: string;
}

export interface CheckoutResponse {
  sessionId: string;
}

export interface StripeError {
  message: string;
}

// Payment form types
export interface PaymentFormData {
  amount: number;
  description: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Service types
export interface ArtService {
  id: string;
  name: string;
  description: string;
  price: number; // Price in cents
  duration?: string;
  features: string[];
}




