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
      <div 
        className="pt-24 pb-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-12">
            <button 
              onClick={handleBackToProjects}
              className="inline-flex items-center px-6 py-3 bg-white/35 backdrop-blur-xl border border-white/50 rounded-2xl text-white hover:bg-white/45 hover:border-white/70 transition-all duration-300 text-sm font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:rotate-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </button>
          </div>

          {/* Project Header */}
          <div className="mb-16">
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/20 hover:border-white/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              <div className="relative">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
                  {project.title}
                </h1>
                <p className="text-lg text-white/90 mb-10 max-w-4xl leading-relaxed drop-shadow-lg">
                  {project.description}
                </p>
              
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/35 backdrop-blur-xl border border-white/50 rounded-2xl hover:bg-white/45 hover:border-white/70 transition-all duration-300 text-white font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:rotate-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600/90 backdrop-blur-xl border border-blue-400/70 rounded-2xl hover:bg-blue-600 hover:border-blue-400/90 transition-all duration-300 text-white font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-rotate-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/30 backdrop-blur-lg border border-white/50 text-white rounded-full text-sm font-medium hover:bg-white/40 hover:border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>



          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/20 hover:border-white/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">Key Features</h2>
                <div className="space-y-6">
                  {project.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group/item">
                      <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                        <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                      </div>
                      <p className="text-white/90 leading-relaxed drop-shadow-md group-hover/item:text-white transition-colors duration-300">{feature}</p>
                    </div>
                  )) || (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 group/item">
                        <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                        </div>
                        <p className="text-white/90 leading-relaxed drop-shadow-md group-hover/item:text-white transition-colors duration-300">Comprehensive feature set with modern architecture</p>
                      </div>
                      <div className="flex items-start space-x-4 group/item">
                        <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                        </div>
                        <p className="text-white/90 leading-relaxed drop-shadow-md group-hover/item:text-white transition-colors duration-300">Responsive design and excellent user experience</p>
                      </div>
                      <div className="flex items-start space-x-4 group/item">
                        <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                          <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                        </div>
                        <p className="text-white/90 leading-relaxed drop-shadow-md group-hover/item:text-white transition-colors duration-300">Production-ready with proper testing and deployment</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/20 hover:border-white/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">Technical Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                      <Calendar className="h-4 w-4 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1 drop-shadow-md group-hover/item:text-white transition-colors duration-300">Duration</p>
                      <p className="text-white/90 leading-relaxed drop-shadow-sm group-hover/item:text-white transition-colors duration-300">{project.duration || "2-3 months"}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                      <Users className="h-4 w-4 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1 drop-shadow-md group-hover/item:text-white transition-colors duration-300">Team Size</p>
                      <p className="text-white/90 leading-relaxed drop-shadow-sm group-hover/item:text-white transition-colors duration-300">{project.teamSize || "Solo project"}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-10 h-10 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/40 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300">
                      <Zap className="h-4 w-4 text-white drop-shadow-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1 drop-shadow-md group-hover/item:text-white transition-colors duration-300">Role</p>
                      <p className="text-white/90 leading-relaxed drop-shadow-sm group-hover/item:text-white transition-colors duration-300">{project.role || "Full-stack Developer"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/20 hover:border-white/40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Challenges & Solutions</h2>
                <p className="text-white/90 leading-relaxed text-lg drop-shadow-md group-hover:text-white transition-colors duration-300">
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