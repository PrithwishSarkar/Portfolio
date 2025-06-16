export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="text-[var(--mint)] font-mono text-lg">02. </span>Where I've Worked
          </h3>
          
          {/* Experience Timeline */}
          <div className="space-y-12">
            
            {/* Team Pumpkin Experience */}
            <div className="bg-[var(--navy-light)]/50 rounded-lg p-8 border border-[var(--navy-light)]/20 project-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-[var(--lightest-slate)] mb-2">
                    Full Stack Developer <span className="text-[var(--mint)]">@ Team Pumpkin</span>
                  </h4>
                  <p className="text-[var(--slate)] font-mono text-sm">November 2024 - Present</p>
                </div>
                <div className="text-[var(--slate)] text-sm mt-2 md:mt-0">Remote</div>
              </div>
              
              {/* E-commerce Platform Project */}
              <div className="mb-8">
                <h5 className="text-lg font-medium text-[var(--mint)] mb-4">E-commerce Platform</h5>
                <ul className="space-y-3 text-[var(--slate)]">
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Devised a dynamic QR code system for app sharing with platform-aware redirection, 
                    improving install conversion by an estimated 30%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Designed and implemented responsive product pages and foundational cart architecture, including real-time pricing logic to support thousands of SKUs and dynamic user interactions.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Streamlined a state-consistent cart system with synchronized updates across the app — handling product quantity modifications, location-based shipping calculations, coupon discounts, and ensuring all price changes propagate accurately in real time on relevant views.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    •	Developed scalable search, filtering, and pagination systems with dynamic AI-driven translation using the OpenAI API, enabling multi-language support across 8+ locales.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Next.js</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">TypeScript</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">NestJS</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Tailwind CSS</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Zustand</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">REST API</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Radix UI</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">ShadCN UI</span>
                </div>
              </div>
              
              {/* Friendship & Events App Project */}
              <div>
                <h5 className="text-lg font-medium text-[var(--mint)] mb-4">Friendship & Events App</h5>
                <ul className="space-y-3 text-[var(--slate)]">
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Spearheaded the development of a cross-platform mobile and web app used to connect users by personality and location, targeting a launch audience of 10K+ users.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Engineered a robust chat system with full WhatsApp-like functionality, including text/audio/video messaging, file sharing, and end-to-end encrypted voice/video calls — supporting up to 50 concurrent sessions.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Built separate merchant and admin dashboards under a unified domain, with role-based access and JWT-secured endpoints. Implemented fine-grained sub-role permissions to control feature access.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Implemented Stripe payment integration with separate onboarding workflows for merchants and users, enforcing feature restrictions until setup is complete to ensure compliance and secure payment flow.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Integrated custom transactional email using modular templates, enhancing email delivery efficiency by 40%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Optimized database queries and caching strategies, reducing API response time by ~40% and minimizing redundant network calls across high-traffic views.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Enabled event creation, user group targeting, personality-based matching, support ticket resolution, and content moderation for 100+ test merchants/admins.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">React Native</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Expo</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Next.js</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">NestJS</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Google API</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Google Maps and Leaflet</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Zustand</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">REST API</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Tailwind CSS</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Gluestack UI</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Radix UI</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">Stripe</span>
                </div>
              </div>
            </div>
            
            {/* TCS Experience */}
            <div className="bg-[var(--navy-light)]/50 rounded-lg p-8 border border-[var(--navy-light)]/20 project-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-[var(--lightest-slate)] mb-2">
                    Assistant Systems Engineer <span className="text-[var(--mint)]">@ Tata Consultancy Services</span>
                  </h4>
                  <p className="text-[var(--slate)] font-mono text-sm">February 2021 - July 2022</p>
                </div>
                <div className="text-[var(--slate)] text-sm mt-2 md:mt-0">Kolkata, India</div>
              </div>
              
              <div>
                <h5 className="text-lg font-medium text-[var(--mint)] mb-4">Global EdTech Publishing & Content Delivery Platform</h5>
                <ul className="space-y-3 text-[var(--slate)]">
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Designed and developed the UI of a Digital Asset Library for an Ed-Tech Company. Increased readability and responsiveness using CSS.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Applied a mobile-first approach, increasing traffic by 30%.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Created React components to store metadata, access details, and the media. Implemented API calls to the backend for CRUD operations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Spearheaded debugging efforts to eliminate cross-browser issues, and improved application functionality. Increased page load speed by 20% through optimized React components and CSS adjustments.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--mint)] mr-3 mt-1">▶</span>
                    Helped resolve transparency issues in .png and .psd images in DAL.
                  </li>
                  
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">React.js</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">JavaScript</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">HTML/CSS</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">REST API</span>
                  <span className="skill-tag px-3 py-1 bg-[var(--navy-light)] text-[var(--mint)] text-sm rounded border border-[var(--mint)]/20">SQL</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
