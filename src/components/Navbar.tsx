"use client";

import Link from "next/link";
import { Home, FileText, User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600 text-primary-foreground shadow-sm">
              <span className="text-sm font-bold">RI</span>
            </div>
            <span className="hidden font-bold sm:inline-block">ResumeIQ</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/resumes"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            My Resumes
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Desktop User Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link href="/account">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
                <span className="ml-2 hidden lg:inline-block">Account</span>
              </Button>
            </Link>
            <Link href="/auth/signout">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
                <span className="ml-2 hidden lg:inline-block">Sign Out</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container grid gap-4 p-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/resumes"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>My Resumes</span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Pricing</span>
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link href="/account" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </Link>
              <Link href="/auth/signout" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
