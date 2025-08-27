import { NextRequest, NextResponse } from 'next/server';
import { stripe, PAYMENT_INTENT_CONFIG } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    if (!amount || !description) {
      return NextResponse.json(
        { error: 'Amount and description are required' },
        { status: 400 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      ...PAYMENT_INTENT_CONFIG,
      amount,
      description,
      metadata: {
        description,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

