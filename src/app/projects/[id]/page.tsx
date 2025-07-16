"use client";

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Zap } from 'lucide-react';
import { projectsContent } from '@/content/projects';
import Header from '@/components/Header';

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = projectsContent.projects.find(p => p.id === parseInt(id as string));

  const handleBackToProjects = () => {
    router.push('/');
    // Use a polling approach to ensure the section is available after navigation
    let attempts = 0;
    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(scrollToProjects, 50);
      }
    };
    setTimeout(scrollToProjects, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <button 
              onClick={handleBackToProjects}
              className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted/50 transition-colors text-foreground shadow-sm"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-16">
            <button 
              onClick={handleBackToProjects}
              className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full text-foreground hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </button>
          </div>

          {/* Project Header */}
          <div className="mb-20">
            <div className="bg-card border border-border rounded-2xl p-10 md:p-16 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-8 tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-4xl leading-relaxed font-light">
                  {project.description}
                </p>
              
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    <Github className="h-5 w-5 mr-3" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-card border border-border text-foreground rounded-full hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 mr-3" />
                    Live Demo
                  </a>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2.5 bg-primary/8 text-primary rounded-full text-sm font-medium hover:bg-primary/15 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>



          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Features */}
            <div className="bg-card border border-border rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-10 tracking-tight">Key Features</h2>
                <div className="space-y-8">
                  {project.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-5 group/item">
                      <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">{feature}</p>
                    </div>
                  )) || (
                    <div className="space-y-8">
                      <div className="flex items-start space-x-5 group/item">
                        <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">Comprehensive feature set with modern architecture</p>
                      </div>
                      <div className="flex items-start space-x-5 group/item">
                        <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">Responsive design and excellent user experience</p>
                      </div>
                      <div className="flex items-start space-x-5 group/item">
                        <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">Production-ready with proper testing and deployment</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-card border border-border rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-10 tracking-tight">Technical Details</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2 group-hover/item:text-foreground transition-colors duration-300">Duration</p>
                      <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">{project.duration || "2-3 months"}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2 group-hover/item:text-foreground transition-colors duration-300">Team Size</p>
                      <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">{project.teamSize || "Solo project"}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2 group-hover/item:text-foreground transition-colors duration-300">Role</p>
                      <p className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">{project.role || "Full-stack Developer"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-card border border-border rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden group">
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-8 tracking-tight">Challenges & Solutions</h2>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                  {project.challenges || "This project involved overcoming various technical challenges including performance optimization, scalability concerns, and user experience improvements. Each challenge was addressed with careful planning and implementation of best practices."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 