import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeIQ - Build, Verify, and Optimize Your Resume",
  description: "Create professional resumes with AI-powered suggestions, ATS optimization, and real-time editing. Get hired faster with ResumeIQ.",
  keywords: ["resume", "ATS", "job application", "AI", "career", "CV"],
  authors: [{ name: "ResumeIQ Team" }],
  creator: "ResumeIQ",
  publisher: "ResumeIQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  openGraph: {
    title: "ResumeIQ - Build, Verify, and Optimize Your Resume",
    description: "Create professional resumes with AI-powered suggestions, ATS optimization, and real-time editing. Get hired faster with ResumeIQ.",
    url: "/",
    siteName: "ResumeIQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeIQ - Build, Verify, and Optimize Your Resume",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeIQ - Build, Verify, and Optimize Your Resume",
    description: "Create professional resumes with AI-powered suggestions, ATS optimization, and real-time editing. Get hired faster with ResumeIQ.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
