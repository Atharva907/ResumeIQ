import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-background to-yellow-100/30 py-20 sm:py-32">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text text-transparent bg-linear-to-r from-foreground via-yellow-600 to-foreground">
                Build, Verify, and Optimize Your Resume with <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[0.2em] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0_0.35_1)] hover:after:origin-bottom-left hover:after:scale-x-100">AI</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Create professional resumes that pass ATS systems, get AI-powered suggestions, and land more interviews.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/auth/register">
                  <Button size="lg" className="group relative px-8 py-3 overflow-hidden bg-linear-to-r from-yellow-400 to-yellow-600 text-white transition-all duration-300 ease-out hover:from-yellow-500 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-500/25">
                    <span className="relative z-10 flex items-center">
                      Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-300 ease-out group-hover:translate-x-full"></div>
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" size="lg" className="group relative px-8 py-3 overflow-hidden border-yellow-400 text-yellow-600 transition-all duration-300 ease-out hover:bg-yellow-50 hover:shadow-md hover:shadow-yellow-500/10">
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-yellow-100/50 to-transparent transition-transform duration-300 ease-out group-hover:translate-x-full"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-yellow-50/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-yellow-200/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-clip-text text-transparent bg-linear-to-r from-foreground via-yellow-600 to-foreground">
                Everything you need to create the perfect resume
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our AI-powered platform helps you build professional resumes, optimize for ATS systems, and track your job applications.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <FileText className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">Resume Builder</h3>
                <p className="relative text-muted-foreground">
                  Create professional resumes with our Overleaf-style editor. Choose from modern templates and get real-time AI suggestions.
                </p>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <CheckCircle className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">Resume Verifier</h3>
                <p className="relative text-muted-foreground">
                  Check your resume for grammar errors, completeness, and professional tone. Get actionable suggestions to improve your content.
                </p>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <Zap className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">ATS Score Checker</h3>
                <p className="relative text-muted-foreground">
                  Optimize your resume for any job description. Check keyword match, formatting compatibility, and skills alignment.
                </p>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">Premium Features</h3>
                <p className="relative text-muted-foreground">
                  Access premium templates, unlimited AI suggestions, and advanced analytics with our subscription plans.
                </p>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <Sparkles className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">AI Recommendations</h3>
                <p className="relative text-muted-foreground">
                  Get personalized suggestions for phrasing, keyword optimization, and section prioritization based on your target role.
                </p>
              </div>
              <div className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-yellow-50/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-100/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20 transition-all duration-300 group-hover:bg-yellow-400/30 group-hover:scale-110">
                  <FileText className="h-6 w-6 text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative text-xl font-semibold">Dashboard</h3>
                <p className="relative text-muted-foreground">
                  Manage all your resumes in one place. Track ATS scores, download PDFs, and analyze your job application success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-linear-to-r from-yellow-50/50 to-yellow-100/30 py-24 sm:py-32">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-clip-text text-transparent bg-linear-to-r from-foreground via-yellow-600 to-foreground">
                Ready to land your dream job?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join thousands of job seekers who have improved their resumes with ResumeIQ.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/auth/register">
                  <Button size="lg" className="px-8 py-3 bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" size="lg" className="px-8 py-3 border-yellow-400 text-yellow-600 hover:bg-yellow-50">
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
