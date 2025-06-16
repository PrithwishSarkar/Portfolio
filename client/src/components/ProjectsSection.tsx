import { useState } from "react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Dynamic QR code system with platform-aware redirection, responsive product pages, and real-time cart system with multi-language support.",
      technologies: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS", "Zustand", "OpenAI API"],
      highlights: [
        "30% improved install conversion",
        "Support for thousands of SKUs",
        "8+ language locales",
        "Real-time pricing logic"
      ],
      category: "Full Stack",
      year: "2024"
    },
    {
      title: "Friendship & Events App",
      description: "Cross-platform social app connecting users by personality and location with WhatsApp-like chat functionality and video calls.",
      technologies: ["React Native", "Expo", "Next.js", "NestJS", "Google API", "Stripe"],
      highlights: [
        "10K+ target users",
        "50 concurrent video sessions",
        "End-to-end encryption",
        "Role-based dashboards"
      ],
      category: "Mobile & Web",
      year: "2024"
    },
    {
      title: "Digital Asset Library",
      description: "EdTech publishing platform with optimized UI/UX, metadata management, and CRUD operations for global content delivery.",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "REST API", "SQL"],
      highlights: [
        "25% traffic increase",
        "20% faster page loads",
        "Mobile-first design",
        "Metadata management"
      ],
      category: "Web Application",
      year: "2021-2022"
    }
  ];

  return (
    <section id="projects" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[var(--mint)] font-mono text-lg">04. </span>Some Things I've Built
          </h3>
          <p className="text-[var(--slate)] mb-12 max-w-2xl">
            Here are some projects I've worked on that showcase my skills in full-stack development, 
            mobile applications, and modern web technologies.
          </p>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Visual */}
                <div className="lg:w-3/5 relative">
                  <div className="relative overflow-hidden rounded-lg bg-[var(--mint)]/10 aspect-video border border-[var(--mint)]/20 project-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--mint)]/20 to-[var(--navy-light)]/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-code text-[var(--mint)] text-4xl mb-4"></i>
                        <h4 className="text-xl font-semibold text-[var(--lightest-slate)] mb-2">
                          {project.title}
                        </h4>
                        <p className="text-[var(--mint)] text-sm font-mono">
                          {project.category} • {project.year}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-[var(--navy)]/90 backdrop-blur-sm transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    } flex items-center justify-center p-6`}>
                      <div className="text-center">
                        <h5 className="text-lg font-semibold text-[var(--mint)] mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-[var(--lightest-slate)] text-sm flex items-center justify-center">
                              <span className="text-[var(--mint)] mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-2/5 space-y-4">
                  <div>
                    <p className="text-[var(--mint)] font-mono text-sm mb-2">Featured Project</p>
                    <h4 className="text-2xl font-bold text-[var(--lightest-slate)] mb-4">
                      {project.title}
                    </h4>
                  </div>

                  <div className="bg-[var(--navy-light)]/80 p-6 rounded-lg border border-[var(--navy-light)]/20">
                    <p className="text-[var(--slate)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-[var(--mint)] font-mono text-sm px-2 py-1 rounded bg-[var(--mint)]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-2">
                    <button className="text-[var(--slate)] hover:text-[var(--mint)] transition-colors">
                      <i className="fab fa-github text-xl"></i>
                    </button>
                    <button className="text-[var(--slate)] hover:text-[var(--mint)] transition-colors">
                      <i className="fas fa-external-link-alt text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <a 
              href="https://github.com/PrithwishSarkar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-[var(--mint)] text-[var(--mint)] rounded hover:bg-[var(--mint)]/10 transition-all duration-300"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}