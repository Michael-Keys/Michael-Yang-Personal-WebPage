"use client";

import { Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';
import { heroContent } from '@/content/hero';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Floating Tech Icons - Like Stars in the Sky */}
      <div className="absolute inset-0 pointer-events-none">
        {heroContent.techStack.map((tech, index) => {
          // Grid-based positioning with large spacing to eliminate all overlaps
          const positions = [
            { left: 5, top: 20 }, { left: 30, top: 15 }, { left: 55, top: 20 }, { left: 80, top: 15 },
            { left: 95, top: 25 }, { left: 10, top: 35 }, { left: 35, top: 40 }, { left: 60, top: 35 },
            { left: 85, top: 45 }, { left: 5, top: 55 }, { left: 30, top: 50 }, { left: 55, top: 60 },
            { left: 80, top: 55 }, { left: 95, top: 65 }, { left: 10, top: 70 }, { left: 35, top: 75 },
            { left: 60, top: 70 }, { left: 85, top: 80 }, { left: 5, top: 85 }, { left: 30, top: 90 },
            { left: 55, top: 85 }, { left: 80, top: 90 }, { left: 95, top: 95 }, { left: 10, top: 95 },
            { left: 35, top: 95 }, { left: 60, top: 95 }, { left: 85, top: 95 }, { left: 15, top: 90 }
          ];
          
          const position = positions[index % positions.length];
          
          return (
            <div
              key={tech.name}
              className="absolute opacity-25 dark:opacity-30 animate-float"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${4 + index * 0.4}s`
              }}
            >
              <img
                src={tech.iconUrl}
                alt={tech.name}
                className="w-8 h-8 filter drop-shadow-md dark:drop-shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  ...(typeof window !== 'undefined' && document.documentElement.classList.contains('dark') && {
                    filter: 'drop-shadow(0 2px 6px rgba(255,255,255,0.1))'
                  })
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile picture and greeting on same line - centered */}
          <div className="flex items-center justify-center mb-8">
            <img
              src={heroContent.profile.image}
              alt={heroContent.profile.alt}
              className="w-20 h-20 rounded-full border-4 border-border shadow-lg mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {heroContent.introduction.greeting} {heroContent.introduction.name}
            </h1>
          </div>
          
          {/* Centered content */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              {heroContent.introduction.title}
            </h2>
            
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(heroContent.introduction.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-0 active:text-green-600 dark:active:text-green-400"
              >
                {heroContent.introduction.location}
              </a>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {heroContent.introduction.description}
            </p>
            
            {/* Social Links - centered */}
            <div className="flex justify-center space-x-4">
              {heroContent.socialLinks.map((social) => {
                const IconComponent = social.icon === 'Github' ? Github : 
                                     social.icon === 'Linkedin' ? Linkedin : 
                                     social.icon === 'Twitter' ? Twitter : 
                                     social.icon === 'Mail' ? Mail : Github;
                
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <IconComponent className={`h-6 w-6 ${
                      social.icon === 'Linkedin' ? 'text-blue-600' : 
                      social.icon === 'Twitter' ? 'text-blue-400' : 
                      'text-muted-foreground'
                    }`} />
                  </a>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
} 