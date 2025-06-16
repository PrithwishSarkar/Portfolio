export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-[var(--mint)] font-mono text-lg">01. </span>About Me
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="text-[var(--slate)] space-y-4 text-lg leading-relaxed">
                <p>
                  Hello! I'm Prithwish, a passionate full-stack developer based in Kolkata, India. 
                  I enjoy creating things that live on the internet, whether that be websites, 
                  applications, or anything in between.
                </p>
                
                <p>
                  My interest in web development started back in college when I decided to try 
                  building custom web applications — turns out hacking together HTML & CSS taught me 
                  a lot about development!
                </p>
                
                <p>
                  Fast-forward to today, and I've had the privilege of working at a consulting company, 
                  and now at a dynamic startup. Currently, I'm building cutting-edge e-commerce platforms 
                  and social applications at <span className="text-[var(--mint)]">Team Pumpkin</span>, focusing on 
                  scalable architecture and user experience.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, or learning about the latest trends in web development.
                </p>
              </div>
              
              {/* Education Section */}
              <div className="mt-8 pt-8 border-t border-[var(--navy-light)]/20">
                <h4 className="text-lg font-semibold text-[var(--mint)] mb-4">Education</h4>
                <div className="bg-[var(--navy-light)]/30 rounded-lg p-6 border border-[var(--navy-light)]/20">
                  <h5 className="text-lg font-medium text-[var(--lightest-slate)] mb-2">
                    Bachelor of Technology (B.Tech) in Computer Science and Engineering
                  </h5>
                  <p className="text-[var(--mint)] font-mono text-sm mb-2">
                    Maulana Abul Kalam Azad University of Technology
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[var(--slate)] text-sm">
                    <span>July 2016 - May 2020</span>
                    <span className="font-medium">DGPA: 8.80</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-72 h-72 bg-[var(--mint)]/10 rounded-lg"></div>
                <div className="absolute inset-0 border-2 border-[var(--mint)] rounded-lg translate-x-4 translate-y-4 -z-10"></div>
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--mint)]/50">
                <img
                  src="/assets/user.png"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
