export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-desktop",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "React Native"]
    },
    {
      title: "Backend & APIs",
      icon: "fas fa-server",
      skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Socket.IO", "Google APIs"]
    },
    {
      title: "Database & Visualization",
      icon: "fas fa-database",
      skills: ["MongoDB", "SQL", "Chart.js", "react-leaflet"]
    },
    {
      title: "State Management",
      icon: "fas fa-cogs",
      skills: ["Zustand", "Redux", "Context API"]
    },
    {
      title: "UI Libraries",
      icon: "fas fa-paint-brush",
      skills: ["Tailwind CSS", "ShadCN UI", "Material UI", "Radix UI", "Gluestack UI"]
    },
    {
      title: "Version Control",
      icon: "fab fa-git-alt",
      skills: ["Git", "GitHub", "GitHub Desktop"]
    },
    {
      title: "IDEs",
      icon: "fas fa-code",
      skills: ["Visual Studio Code", "JetBrains WebStorm", "Cursor IDE"]
    },
    {
      title: "AI Tools",
      icon: "fas fa-robot",
      skills: ["ChatGPT", "JetBrains Junie", "Replit AI", "V0 by Vercel"]
    },
    {
      title: "Others",
      icon: "fas fa-tools",
      skills: ["Responsive Web Design", "Mobile first Development", "Data Structures and Algorithms", "JWT", "NPM"]
    }
  ];

  return (
    <section id="skills" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="text-[var(--mint)] font-mono text-lg">03. </span>Skills & Technologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-[var(--navy-light)]/50 rounded-lg p-6 border border-[var(--navy-light)]/20">
                <h4 className="text-xl font-semibold text-[var(--mint)] mb-4 flex items-center">
                  <i className={`${category.icon} mr-3`}></i>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag px-3 py-1 bg-[var(--navy)] text-[var(--slate)] text-sm rounded border border-[var(--slate)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
