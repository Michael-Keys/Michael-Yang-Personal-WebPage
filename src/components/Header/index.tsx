"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { headerContent } from '@/content/header';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home'); // Default active section
  const router = useRouter();
  const pathname = usePathname();
  
  // Set active section based on current pathname
  useEffect(() => {
    if (pathname === '/') {
      setActiveSection('Home');
    } else if (pathname === '/about') {
      setActiveSection('About');
    } else if (pathname === '/experience') {
      setActiveSection('Experience');
    }
  }, [pathname]);
  
  const handleNavigation = (item: { name: string; href: string }) => {
    setActiveSection(item.name);
    
    // Handle Home button
    if (item.name === 'Home') {
      if (pathname === '/') {
        // We're on the home page, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // We're on a different page, navigate to home
        router.push('/');
      }
      return;
    }
    
    // Handle About button - navigate to dedicated About page
    if (item.name === 'About') {
      router.push('/about');
      return;
    }
    
    // Handle Experience button - navigate to dedicated Experience page
    if (item.name === 'Experience') {
      router.push('/experience');
      return;
    }
    
    // Handle Contact button - always scroll to bottom of current page
    if (item.name === 'Contact') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      return;
    }
    
    // Check if we're on the home page
    if (pathname === '/') {
      // We're on the home page, scroll to section
      const targetId = item.href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // We're on a different page, navigate to home and jump directly to section
      const targetId = item.href.replace('#', '');
      
      // For other sections, navigate to home then jump to section
      router.push('/');
      
      const scrollToSection = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          // If element not found, try again after a short delay
          setTimeout(() => {
            const retryElement = document.getElementById(targetId);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }, 100);
        }
      };
      
      // Try multiple times to ensure it works after navigation
      setTimeout(scrollToSection, 200);
      setTimeout(scrollToSection, 500);
      setTimeout(scrollToSection, 800);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/about" className="text-2xl font-bold text-foreground focus:outline-none focus:ring-0 select-none">
              {headerContent.branding.name}
            </Link>
          </div>

          {/* Desktop Navigation - Refined Style */}
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex rounded-full px-3 text-sm font-medium bg-card shadow-md backdrop-blur">
                {headerContent.navigation.items.map((item, index) => (
                  <li key={item.name} className="flex items-center">
                    {index > 0 && (
                      <div className="h-4 w-px bg-muted-foreground/30 mx-2" />
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item);
                      }}
                      className={`relative inline-flex items-center justify-center px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ease-out focus:outline-none ${
                        activeSection === item.name
                          ? 'text-teal-500 dark:text-teal-400'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden group relative inline-flex items-center justify-center w-10 h-10 rounded-xl
                       bg-card shadow-md backdrop-blur
                       hover:bg-muted/50 transition-all duration-300 ease-out
                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                       active:scale-95"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav>
              <ul className="flex flex-col space-y-1 rounded-2xl px-3 py-2 bg-card shadow-md backdrop-blur">
                {headerContent.navigation.items.map((item, index) => (
                  <li key={item.name} className="flex flex-col">
                    <button
                      className={`relative inline-flex items-center justify-center px-4 py-3 text-base font-medium transition-all duration-300 ease-out rounded-xl w-full focus:outline-none ${
                        activeSection === item.name
                          ? 'text-teal-500 dark:text-teal-400'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        handleNavigation(item);
                      }}
                    >
                      {item.name}
                    </button>
                    {/* Separator for mobile */}
                    {index < headerContent.navigation.items.length - 1 && (
                      <div className="h-px bg-muted-foreground/30 mx-4 my-1" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
} 