import { BookOpen, Code, Clock, Folder, Target, TrendingUp } from 'lucide-react';
import { currentlyLearningContent } from '@/content/currentlyLearning';

export default function CurrentlyLearning() {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-emerald-400 to-green-400';
    if (progress >= 60) return 'from-blue-400 to-cyan-400';
    if (progress >= 40) return 'from-yellow-400 to-orange-400';
    return 'from-orange-400 to-red-400';
  };

  const getProgressBgColor = (progress: number) => {
    if (progress >= 80) return 'bg-emerald-50 dark:bg-emerald-950/20';
    if (progress >= 60) return 'bg-blue-50 dark:bg-blue-950/20';
    if (progress >= 40) return 'bg-yellow-50 dark:bg-yellow-950/20';
    return 'bg-orange-50 dark:bg-orange-950/20';
  };

  const getGlowColor = (progress: number) => {
    if (progress >= 80) return 'shadow-emerald-400/40';
    if (progress >= 60) return 'shadow-blue-400/40';
    if (progress >= 40) return 'shadow-yellow-400/40';
    return 'shadow-orange-400/40';
  };

  return (
    <section id="currently-learning" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {currentlyLearningContent.section.title}
          </h2>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {currentlyLearningContent.stats.map((stat, index) => {
            const IconComponent = stat.icon === 'BookOpen' ? BookOpen : 
                                 stat.icon === 'Code' ? Code : 
                                 stat.icon === 'Clock' ? Clock : 
                                 stat.icon === 'Folder' ? Folder : 
                                 stat.icon === 'TrendingUp' ? TrendingUp : 
                                 stat.icon === 'Target' ? Target : BookOpen;
            
                          return (
                <div key={index} className="group border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 hover:scale-105 hover:bg-card hover:border-primary/30 cursor-pointer bg-card/50">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${stat.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-400`}>
                    <span className={`${stat.color} group-hover:scale-110 transition-transform duration-400`}>
                      <IconComponent className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="text-4xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-400">
                    {stat.label}
                  </div>
                </div>
              );
          })}
        </div>

        {/* Learning Areas */}
        <div className="space-y-8 mb-12">
          {currentlyLearningContent.learningAreas.map((area, areaIndex) => (
            <div key={areaIndex} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-card/90 hover:border-primary/30 cursor-pointer">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center tracking-tight">
                <TrendingUp className="h-6 w-6 mr-3 text-primary" />
                {area.category}
              </h3>
              
              <div className="space-y-6">
                {area.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group p-4 rounded-lg hover:bg-muted/30 transition-all duration-500 ease-out hover:scale-[1.01] cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-6">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-500 ease-out tracking-tight mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-semibold text-foreground group-hover:text-primary transition-all duration-500 ease-out tracking-tight">
                          {skill.progress}%
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {skill.timeframe}
                        </div>
                      </div>
                    </div>
                    
                    {/* Modern Progress Bar */}
                    <div className="relative">
                      {/* Background Track */}
                      <div className={`w-full h-4 ${getProgressBgColor(skill.progress)} rounded-full overflow-hidden relative border border-border/30 shadow-inner`}>
                        {/* 3D Progress Fill */}
                        <div 
                          className={`h-full bg-gradient-to-r ${getProgressColor(skill.progress)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${getGlowColor(skill.progress)} shadow-lg`}
                          style={{ 
                            width: `${skill.progress}%`,
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 6px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.1)'
                          }}
                        >
                          {/* 3D highlight effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
                          
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-pulse"></div>
                          
                          {/* Flowing animation */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" 
                               style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-card/90 hover:border-primary/30 cursor-pointer">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center tracking-tight">
            <Target className="h-6 w-6 mr-3 text-primary" />
            {currentlyLearningContent.goals.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentlyLearningContent.goals.items.map((goal, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-all duration-500 ease-out">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <p className="text-base text-muted-foreground group-hover:text-foreground transition-all duration-500 ease-out leading-relaxed flex-1">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 