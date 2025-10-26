import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Shield, FileText, BarChart3, Star } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for you. All plans include our core features.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-center">Free</CardTitle>
            <CardDescription className="text-center">
              Perfect for getting started
            </CardDescription>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Create up to 3 resumes
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Basic templates
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                3 ATS checks per month
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                5 AI suggestions per month
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Current Plan
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="flex flex-col border-primary shadow-md">
          <CardHeader>
            <div className="flex items-center justify-center">
              <Badge className="mb-2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            </div>
            <CardTitle className="text-center">Pro</CardTitle>
            <CardDescription className="text-center">
              For professionals who need more
            </CardDescription>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Unlimited resumes
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Premium templates
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Unlimited ATS checks
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Unlimited AI suggestions
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-center">Enterprise</CardTitle>
            <CardDescription className="text-center">
              For teams and organizations
            </CardDescription>
            <div className="mt-4 text-center">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Everything in Pro
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Team collaboration tools
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Advanced analytics
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Custom branding
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                Dedicated support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="font-semibold mb-2">Can I change my plan later?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Is there a free trial for paid plans?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, we offer a 14-day free trial for our Pro plan. No credit card required.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-sm text-muted-foreground">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
