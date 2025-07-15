import { GraduationCap, Calendar, ExternalLink, MapPin } from 'lucide-react';
import { educationContent } from '@/content/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {educationContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {educationContent.subtitle}
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2" />
            Education
          </h3>
          
          <div className="space-y-8">
            {educationContent.education.map((edu) => (
              <div key={edu.id} className="group border border-border rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 hover:scale-102 hover:bg-card hover:border-primary/30 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">
                      {edu.degree}
                      {edu.concentration && (
                        <span className="block text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-400">
                          {edu.concentration}
                        </span>
                      )}
                    </h4>
                    <div className="flex items-center text-primary mb-2">
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary/80 transition-colors duration-400 flex items-center gap-1"
                      >
                        {edu.institution}
                        <ExternalLink className="h-4 w-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-400" />
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground gap-2 group-hover:text-foreground transition-colors duration-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 group-hover:scale-110 group-hover:text-primary transition-all duration-400" />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 group-hover:scale-110 group-hover:text-primary transition-all duration-400" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <span className="group-hover:text-primary group-hover:font-medium transition-all duration-400">GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-400">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">
                      Achievements:
                    </h5>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 group-hover:text-foreground transition-colors duration-400">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded hover:bg-primary/10 hover:text-primary transition-all duration-400 hover:scale-105 hover:shadow-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 