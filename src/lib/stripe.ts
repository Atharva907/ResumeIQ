import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Subscription plans
export const subscriptionPlans = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Up to 5 AI suggestions per month',
      'Up to 3 ATS checks per month',
      'Basic resume templates',
      'Basic analytics',
    ],
    limits: {
      aiSuggestions: 5,
      atsChecks: 3,
      templates: 'basic',
    },
  },
  premium: {
    name: 'Premium',
    price: 19.99,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID,
    features: [
      'Unlimited AI suggestions',
      'Unlimited ATS checks',
      'Premium resume templates',
      'Advanced analytics',
      'Priority support',
    ],
    limits: {
      aiSuggestions: Infinity,
      atsChecks: Infinity,
      templates: 'premium',
    },
  },
};

// Create a checkout session for subscription
export async function createCheckoutSession(userId: string, planId: 'premium') {
  try {
    const plan = subscriptionPlans[planId];

    const session = await stripe.checkout.sessions.create({
      customer_email: userId, // In a real app, you'd use the customer ID from your database
      billing_address_collection: 'auto',
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?subscription=success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/dashboard?subscription=canceled`,
      metadata: {
        userId,
        planId,
      },
    });

    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}

// Create a customer portal session
export async function createCustomerPortalSession(customerId: string) {
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
    });

    return session;
  } catch (error) {
    console.error('Error creating customer portal session:', error);
    throw new Error('Failed to create customer portal session');
  }
}

// Handle webhook events from Stripe
export async function handleWebhookEvent(event: Stripe.Event) {
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      // Handle subscription creation
      await handleSubscriptionCreated(checkoutSession);
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      // Handle successful payment
      await handlePaymentSucceeded(invoice);
      break;

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object as Stripe.Invoice;
      // Handle failed payment
      await handlePaymentFailed(failedInvoice);
      break;

    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      // Handle subscription cancellation
      await handleSubscriptionDeleted(subscription);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}

// Handle subscription creation
async function handleSubscriptionCreated(checkoutSession: Stripe.Checkout.Session) {
  const userId = checkoutSession.metadata?.userId;
  const planId = checkoutSession.metadata?.planId as 'premium';

  if (!userId || !planId) {
    console.error('Missing metadata in checkout session');
    return;
  }

  // In a real app, you would update the user's subscription in your database
  console.log(`User ${userId} subscribed to ${planId} plan`);
}

// Handle successful payment
async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;

  // In a real app, you would update the user's subscription status in your database
  console.log(`Payment succeeded for customer ${customerId}`);
}

// Handle failed payment
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;

  // In a real app, you would update the user's subscription status in your database
  // and possibly send a notification to the user
  console.log(`Payment failed for customer ${customerId}`);
}

// Handle subscription cancellation
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  // In a real app, you would update the user's subscription in your database
  console.log(`Subscription deleted for customer ${customerId}`);
}

// Verify webhook signature
export function verifyWebhookSignature(payload: string, signature: string) {
  try {
    return stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Error verifying webhook signature:', error);
    throw new Error('Invalid webhook signature');
  }
}
