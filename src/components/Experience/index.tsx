'use client';

import { useState, useEffect } from 'react';
import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { experienceContent } from '@/content/experience';

export default function Experience() {
  const [fullscreenCard, setFullscreenCard] = useState<string | null>(null);

  // Handle escape key to close fullscreen
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFullscreenCard(null);
      }
    };

    if (fullscreenCard) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenCard]);

  const openFullscreen = (cardId: string) => {
    setFullscreenCard(cardId);
  };

  const closeFullscreen = () => {
    setFullscreenCard(null);
  };

  const restoreFromFullscreen = () => {
    setFullscreenCard(null);
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            My career milestones and professional growth
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line - Apple Style */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 h-full hidden md:block shadow-sm"></div>

          <div className="space-y-16">
            {experienceContent.experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot with Date - Apple Style */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block z-10">
                  {/* Enhanced Timeline Dot */}
                  <div className="relative">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg shadow-blue-500/20 relative overflow-hidden">
                      {/* Inner highlight */}
                      <div className="absolute inset-0.5 bg-gradient-to-br from-blue-300/50 to-transparent rounded-full"></div>
                    </div>
                    
                    {/* Pulse animation ring */}
                    <div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-blue-400/30 animate-ping"></div>
                  </div>
                  
                  {/* Enhanced Date Label */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-background backdrop-blur-sm border border-border rounded-xl px-3 py-2 shadow-lg shadow-black/5 dark:shadow-white/5 min-w-[60px]">
                      <div className="text-xs font-semibold text-foreground tracking-tight">
                        {exp.startDate.split(' ')[0]}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium mt-0.5 tracking-tight">
                        {exp.startDate.split(' ')[1]}
                      </div>
                    </div>
                    
                    {/* Connection line from dot to label */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-px h-2 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                  </div>
                </div>

                {/* Experience Card - Mac Window Style */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div 
                    className="border border-border rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
                    onDoubleClick={() => openFullscreen(exp.id)}
                  >
                  
                    {/* Mac Window Title Bar */}
                    <div className="bg-background border-b border-border px-4 py-3 rounded-t-lg flex items-center justify-between">
                      {/* Mac Window Controls */}
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer shadow-sm"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer shadow-sm"></div>
                        <div 
                          className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer shadow-sm"
                          onClick={() => openFullscreen(exp.id)}
                        ></div>
                      </div>
                      
                      {/* Window Title */}
                      <div className="flex-1 text-center">
                        <span className="text-sm font-medium text-foreground truncate tracking-wide">
                          {exp.title}
                        </span>
                      </div>
                      
                      {/* Empty space for balance */}
                      <div className="w-[52px]"></div>
                    </div>
                    
                    {/* Mobile Date and Internship Badge */}
                    <div className="md:hidden flex items-center justify-between mx-4 mt-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-foreground">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Desktop Date and Internship Badge */}
                    <div className="hidden md:flex items-center justify-between mx-6 mt-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-foreground">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Window Content - Simplified */}
                    <div className="p-6 pb-4 bg-background/60 backdrop-blur-sm">
                      {/* Company and Job Title Layout */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Company Icon */}
                        <div className="flex-shrink-0">
                          {exp.company === "Gen Digital" ? (
                            <img 
                              src="/icon/gen-digital.jpeg" 
                              alt="Gen Digital"
                              className="w-12 h-12 object-contain rounded-lg"
                            />
                          ) : exp.company === "Peking University" ? (
                            <img 
                              src="/icon/Peking.jpeg" 
                              alt="Peking University"
                              className="w-12 h-12 object-contain rounded-lg"
                            />
                          ) : exp.company === "Cornell University" ? (
                            <img 
                              src="/icon/Cornell.jpeg" 
                              alt="Cornell University"
                              className="w-12 h-12 object-contain rounded-lg"
                            />
                          ) : exp.company === "Beijing Hirain Company" ? (
                            <img 
                              src="/icon/hirain.jpeg" 
                              alt="Beijing Hirain Company"
                              className="w-12 h-12 object-contain rounded-lg"
                            />
                          ) : exp.company === "Beijing UXSINO Software Company" ? (
                            <img 
                              src="/icon/uxsino.jpeg" 
                              alt="Beijing UXSINO Software Company"
                              className="w-12 h-12 object-contain rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                              <span className="text-foreground font-bold text-lg">
                                {exp.company.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Company Name and Job Title */}
                        <div className="flex-1 min-w-0">
                          <div className="mb-2">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-lg transition-colors duration-200 tracking-tight block focus:outline-none"
                            >
                              {exp.company}
                            </a>
                          </div>
                          <h3 className="text-base font-medium text-foreground tracking-tight text-muted-foreground">
                            {exp.position}
                          </h3>
                        </div>
                      </div>

                      {/* Description Only */}
                      <div className="ml-16 space-y-3">
                        {exp.description.map((desc, i) => (
                          <p key={i} className="text-sm leading-relaxed text-foreground font-normal">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenCard && (
        <div className="fixed inset-0 z-50 bg-background backdrop-blur-xl flex items-center justify-center p-0 sm:p-4">
          <div 
            className="bg-background/70 backdrop-blur-2xl border-0 sm:border sm:border-gray-200/60 sm:dark:border-gray-700/60 rounded-none sm:rounded-2xl shadow-2xl max-w-4xl w-full h-full sm:h-auto sm:max-h-[90vh] overflow-hidden cursor-pointer"
            onDoubleClick={closeFullscreen}
          >
            {(() => {
              const exp = experienceContent.experiences.find(e => e.id === fullscreenCard);
              if (!exp) return null;
              
              return (
                <>
                  {/* Fullscreen Mac Window Title Bar */}
                  <div className="bg-background/80 backdrop-blur-lg border-b border-gray-200/60 dark:border-gray-700/60 px-4 py-2.5 rounded-none sm:rounded-t-2xl flex items-center justify-between">
                    {/* Mac Window Controls */}
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer shadow-sm opacity-80 hover:opacity-100"
                        onClick={closeFullscreen}
                      ></div>
                      <div 
                        className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer shadow-sm opacity-80 hover:opacity-100"
                        onClick={restoreFromFullscreen}
                      ></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm opacity-50"></div>
                    </div>
                    
                    {/* Window Title */}
                    <div className="flex-1 text-center">
                      <span className="text-sm font-bold text-foreground tracking-wide">
                        {exp.title}
                      </span>
                    </div>
                    
                    {/* Empty space for balance */}
                    <div className="w-[52px]"></div>
                  </div>

                  {/* Fullscreen Content */}
                  <div className="p-4 sm:p-8 bg-background/40 backdrop-blur-xl overflow-y-auto max-h-[calc(90vh-60px)]">
                    <div className="max-w-3xl mx-auto">
                      {/* Fullscreen Date and Internship Badge */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <span className="text-base font-medium text-foreground">
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Company and Job Title Layout - Fullscreen */}
                      <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {/* Company Icon */}
                        <div className="flex-shrink-0">
                          {exp.company === "Gen Digital" ? (
                            <img 
                              src="/icon/gen-digital.jpeg" 
                              alt="Gen Digital"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                            />
                          ) : exp.company === "Peking University" ? (
                            <img 
                              src="/icon/Peking.jpeg" 
                              alt="Peking University"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                            />
                          ) : exp.company === "Cornell University" ? (
                            <img 
                              src="/icon/Cornell.jpeg" 
                              alt="Cornell University"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                            />
                          ) : exp.company === "Beijing Hirain Company" ? (
                            <img 
                              src="/icon/hirain.jpeg" 
                              alt="Beijing Hirain Company"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                            />
                          ) : exp.company === "Beijing UXSINO Software Company" ? (
                            <img 
                              src="/icon/uxsino.jpeg" 
                              alt="Beijing UXSINO Software Company"
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background rounded-full flex items-center justify-center">
                              <span className="text-foreground font-bold text-lg sm:text-xl">
                                {exp.company.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Company Name and Job Title */}
                        <div className="flex-1 min-w-0">
                          <div className="mb-2 sm:mb-3">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-xl sm:text-2xl transition-colors duration-200 tracking-tight block focus:outline-none"
                            >
                              {exp.company}
                            </a>
                          </div>
                          <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-tight text-muted-foreground">
                            {exp.position}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="ml-16 sm:ml-24 text-foreground mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                        {exp.description.map((desc, i) => (
                          <p key={i} className="text-sm sm:text-base leading-relaxed font-normal">
                            {desc}
                          </p>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 tracking-wide">
                          Key Achievements
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <p key={i} className="text-sm sm:text-base text-foreground">
                              {achievement}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                          <a
                            href={`https://www.google.com/maps/search/${encodeURIComponent(exp.location)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none"
                          >
                            {exp.location}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                          <span>{exp.workType}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-foreground mb-4 tracking-wide">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 sm:px-4 sm:py-2.5 bg-primary/8 text-primary rounded-full text-xs sm:text-sm font-medium hover:bg-primary/15 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 border border-primary/15"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
} 