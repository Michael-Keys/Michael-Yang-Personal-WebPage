"use client";

import { Github, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projectsContent } from '@/content/projects';

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {projectsContent.section.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {projectsContent.section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsContent.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer border border-border hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full transition-all duration-200 hover:bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium group/link"
                    >
                      <Github className="h-4 w-4 mr-1.5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span>{projectsContent.labels.codeLink}</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium group/link"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5 group-hover/link:scale-110 transition-transform duration-200" />
                      <span>{projectsContent.labels.demoLink}</span>
                    </a>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    View Details →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 