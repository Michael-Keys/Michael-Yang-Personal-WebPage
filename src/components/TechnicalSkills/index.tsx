import { Code, Database, Cloud, Palette, Brain } from 'lucide-react';
import { technicalSkillsContent } from '@/content/technicalSkills';

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            {technicalSkillsContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {technicalSkillsContent.categories.map((skill, index) => {
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
    </section>
  );
} 