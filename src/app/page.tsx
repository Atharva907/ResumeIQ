import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Build, Verify, and Optimize Your Resume with <span className="text-primary">AI</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Create professional resumes that pass ATS systems, get AI-powered suggestions, and land more interviews.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/auth/register">
                  <Button size="lg" className="px-8 py-3">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to create the perfect resume
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our AI-powered platform helps you build professional resumes, optimize for ATS systems, and track your job applications.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Resume Builder</h3>
                <p className="text-muted-foreground">
                  Create professional resumes with our Overleaf-style editor. Choose from modern templates and get real-time AI suggestions.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Resume Verifier</h3>
                <p className="text-muted-foreground">
                  Check your resume for grammar errors, completeness, and professional tone. Get actionable suggestions to improve your content.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ATS Score Checker</h3>
                <p className="text-muted-foreground">
                  Optimize your resume for any job description. Check keyword match, formatting compatibility, and skills alignment.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Features</h3>
                <p className="text-muted-foreground">
                  Access premium templates, unlimited AI suggestions, and advanced analytics with our subscription plans.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI Recommendations</h3>
                <p className="text-muted-foreground">
                  Get personalized suggestions for phrasing, keyword optimization, and section prioritization based on your target role.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Dashboard</h3>
                <p className="text-muted-foreground">
                  Manage all your resumes in one place. Track ATS scores, download PDFs, and analyze your job application success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/20 py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to land your dream job?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join thousands of job seekers who have improved their resumes with ResumeIQ.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/auth/register">
                  <Button size="lg" className="px-8 py-3">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
