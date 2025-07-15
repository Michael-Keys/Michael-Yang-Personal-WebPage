import { BookOpen, Code, Clock, Folder, Target, TrendingUp } from 'lucide-react';
import { currentlyLearningContent } from '@/content/currentlyLearning';

export default function CurrentlyLearning() {
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getProgressBgColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-100 dark:bg-green-900/30';
    if (progress >= 60) return 'bg-blue-100 dark:bg-blue-900/30';
    if (progress >= 40) return 'bg-yellow-100 dark:bg-yellow-900/30';
    return 'bg-orange-100 dark:bg-orange-900/30';
  };

  return (
    <section id="currently-learning" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {currentlyLearningContent.section.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentlyLearningContent.section.subtitle}
          </p>
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
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">
                    {stat.value}
                  </div>
                  <div className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-400">
                    {stat.label}
                  </div>
                </div>
              );
          })}
        </div>

        {/* Learning Areas */}
        <div className="space-y-8 mb-12">
          {currentlyLearningContent.learningAreas.map((area, areaIndex) => (
            <div key={areaIndex} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-700 hover:bg-card/80">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                {area.category}
              </h3>
              
              <div className="space-y-6">
                {area.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.progress}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {skill.timeframe}
                        </div>
                      </div>
                    </div>
                    
                    {/* Snake Progress Bar */}
                    <div className={`w-full h-6 ${getProgressBgColor(skill.progress)} rounded-lg overflow-hidden relative`}>
                      <div className="flex items-center h-full px-0.5 justify-between">
                        {/* Generate snake segments */}
                        {Array.from({ length: 40 }, (_, i) => {
                          const totalSegments = 40;
                          const activeSegments = Math.ceil((skill.progress / 100) * totalSegments);
                          const isActive = i < activeSegments;
                          const isHead = i === activeSegments - 1 && skill.progress > 0;
                          
                          return (
                            <div
                              key={i}
                              className={`
                                flex-1 h-4 mx-0.5 rounded-sm transition-all duration-300
                                ${isActive 
                                  ? `${getProgressColor(skill.progress)} ${isHead ? 'animate-pulse shadow-lg' : ''}`
                                  : 'bg-muted-foreground/20'
                                }
                                ${isHead ? 'scale-110 rounded-md' : ''}
                                hover:scale-105 transition-transform duration-150
                              `}
                              style={{
                                animationDelay: `${i * 50}ms`
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-700">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            {currentlyLearningContent.goals.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {currentlyLearningContent.goals.items.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground hover:text-foreground transition-colors duration-300">
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