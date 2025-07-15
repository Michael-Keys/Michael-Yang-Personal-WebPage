"use client";

import { Github, Linkedin, Twitter, Mail, Heart, Eye, ArrowUp } from 'lucide-react';
import { footerContent } from '@/content/footer';
import { useVisitorCount } from '@/hooks/useVisitorCount';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { formattedCount, isLoading } = useVisitorCount();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">{footerContent.branding.name}</h3>
              <p className="text-muted-foreground mb-6">
                {footerContent.branding.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {footerContent.social.platforms.map((social, index) => {
                  const IconComponent = social.icon === 'Github' ? Github : 
                                       social.icon === 'Linkedin' ? Linkedin : 
                                       social.icon === 'Twitter' ? Twitter : 
                                       social.icon === 'Mail' ? Mail : Github;
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerContent.navigation.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerContent.navigation.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <a 
                  href={`mailto:${footerContent.contact.email}`}
                  className="block hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.email}
                </a>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(footerContent.contact.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.location}
                </a>
                <a 
                  href={`tel:${footerContent.contact.phone}`}
                  className="block hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground">
                © {currentYear} {footerContent.branding.name}. {footerContent.copyright.text}
              </p>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {isLoading ? (
                      <span className="animate-pulse">Loading...</span>
                    ) : (
                      `${formattedCount} ${footerContent.stats.visitors.label}`
                    )}
                  </span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span className="text-sm">Made with love</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-muted-foreground text-sm">
                <span>{footerContent.copyright.builtWith}</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:scale-95"
                aria-label={footerContent.scrollToTop.label}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 