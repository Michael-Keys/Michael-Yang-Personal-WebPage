import { GitCommit, Star, GitFork, Calendar } from 'lucide-react';
import { githubContributionsContent } from '@/content/githubContributions';

export default function GitHubContributions() {
  // Generate contribution data for the past year
  const generateContributions = () => {
    const contributions = [];
    const today = new Date();
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
      contributions.push({
        date: new Date(d).toISOString().split('T')[0],
        level: level,
        count: level * Math.floor(Math.random() * 3) + level
      });
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getContributionColor = (level: number) => {
    const colors = [
      'bg-gray-100 dark:bg-gray-800', // 0 contributions
      'bg-green-200 dark:bg-green-900', // 1-3 contributions
      'bg-green-300 dark:bg-green-700', // 4-6 contributions
      'bg-green-400 dark:bg-green-600', // 7-9 contributions
      'bg-green-500 dark:bg-green-500'  // 10+ contributions
    ];
    return colors[level] || colors[0];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {githubContributionsContent.section.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {githubContributionsContent.section.subtitle}
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {githubContributionsContent.stats.map((stat, index) => {
            const IconComponent = stat.icon === 'GitCommit' ? GitCommit : 
                                 stat.icon === 'Star' ? Star : 
                                 stat.icon === 'GitFork' ? GitFork : 
                                 stat.icon === 'Calendar' ? Calendar : GitCommit;
            
            return (
              <div key={index} className="group border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 hover:scale-105 hover:bg-card hover:border-primary/30 cursor-pointer">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-400`}>
                  <span className={`${stat.color} group-hover:scale-110 transition-transform duration-400`}>
                    <IconComponent className="h-5 w-5" />
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-400">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contributions Graph */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-700 hover:bg-card/80">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            {githubContributionsContent.contributionsGraph.title}
          </h3>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="grid grid-cols-53 gap-1 mb-4">
                {contributions.map((contribution, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.level)} hover:scale-125 hover:shadow-sm transition-all duration-200 cursor-pointer`}
                    title={`${contribution.count} contributions on ${contribution.date}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{githubContributionsContent.contributionsGraph.legend.less}</span>
                <div className="flex space-x-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>{githubContributionsContent.contributionsGraph.legend.more}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={githubContributionsContent.callToAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-400 hover:scale-105 hover:shadow-lg"
          >
            <span className="group-hover:font-medium transition-all duration-400">{githubContributionsContent.callToAction.text}</span>
            <svg className="ml-2 h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 