"use client";

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { footerContent } from '@/content/footer';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{footerContent.branding.name}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 px-4 sm:px-0">
                {footerContent.branding.description}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center sm:justify-start space-x-3 md:space-x-4">
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
                      className="p-2 md:p-2 bg-muted rounded-lg text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                    >
                      <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-2 md:flex-col md:space-y-2">
                {footerContent.navigation.quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm md:text-base text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400 px-3 py-1 rounded-lg bg-muted/50 hover:bg-muted md:bg-transparent md:px-0 md:py-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="text-center sm:text-left">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Resources</h4>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-2 md:flex-col md:space-y-2">
                {footerContent.navigation.resources.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm md:text-base text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400 px-3 py-1 rounded-lg bg-muted/50 hover:bg-muted md:bg-transparent md:px-0 md:py-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <a 
                  href={`mailto:${footerContent.contact.email}`}
                  className="block text-sm md:text-base hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.email}
                </a>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(footerContent.contact.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm md:text-base hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.location}
                </a>
                <a 
                  href={`tel:${footerContent.contact.phone}`}
                  className="block text-sm md:text-base hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
                >
                  {footerContent.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 md:py-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-6 text-center md:text-left">
              <p className="text-sm md:text-base text-muted-foreground">
                © {currentYear} {footerContent.branding.name}. {footerContent.copyright.text}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1 text-red-500" />
                  <span className="text-xs md:text-sm">Made with love</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="text-muted-foreground text-xs md:text-sm text-center sm:text-left">
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