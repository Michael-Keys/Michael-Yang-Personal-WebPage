import { Code, Database, Cloud, Palette, Coffee, Camera, Music, BookOpen, Brain, UtensilsCrossed, Play, Trophy } from 'lucide-react';
import { aboutContent } from '@/content/about';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            {aboutContent.section.title}
          </h2>
            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto leading-[1.7]">
            {aboutContent.section.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8 tracking-tight text-center lg:text-left">
              {aboutContent.story.title}
            </h3>
            <div className="space-y-8">
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[17px] leading-[1.8] text-muted-foreground tracking-wide text-justify max-w-none">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src={aboutContent.profile.image}
                alt={aboutContent.profile.alt}
                className="rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-foreground mb-16 text-center tracking-tight">
            {aboutContent.skills.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutContent.skills.categories.map((skill, index) => {
              const IconComponent = skill.icon === 'Code' ? Code : 
                                   skill.icon === 'Database' ? Database : 
                                   skill.icon === 'Cloud' ? Cloud : 
                                   skill.icon === 'Palette' ? Palette : 
                                   skill.icon === 'Brain' ? Brain : Code;
              
              return (
                <div key={index} className="border border-border p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 group hover:scale-105 hover:bg-card hover:border-primary/30 cursor-pointer">
                  <div className="flex flex-col items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-400 mb-4">
                      <IconComponent className="h-5 w-5 group-hover:rotate-12 transition-transform duration-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground tracking-tight text-center group-hover:text-primary transition-colors duration-400">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skill.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary/10 hover:text-primary transition-all duration-400 font-mono hover:scale-105"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-foreground mb-16 text-center tracking-tight">
            {aboutContent.interests.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.interests.items.map((interest, index) => {
              const IconComponent = interest.icon === 'Coffee' ? Coffee : 
                                   interest.icon === 'Camera' ? Camera : 
                                   interest.icon === 'Music' ? Music : 
                                   interest.icon === 'BookOpen' ? BookOpen : 
                                   interest.icon === 'UtensilsCrossed' ? UtensilsCrossed : 
                                   interest.icon === 'Play' ? Play : 
                                   interest.icon === 'Trophy' ? Trophy : Coffee;
              
              return (
                <div key={index} className="border border-border p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 text-center group hover:scale-105 hover:bg-card hover:border-primary/30 cursor-pointer">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-400">
                      <IconComponent className="h-6 w-6 group-hover:rotate-12 transition-transform duration-400" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-400">
                    {interest.name}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-400">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 