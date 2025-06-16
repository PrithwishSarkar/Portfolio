export default function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-[var(--mint)] font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--lightest-slate)] mb-4">
            Prithwish Sarkar
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--slate)] mb-6">
            I build things for the web.
          </h2>
          <p className="text-[var(--slate)] text-lg max-w-2xl mb-12 leading-relaxed">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at{' '}
            <span className="text-[var(--mint)]">Team Pumpkin</span>, working with modern technologies like React, Node.js, and cloud platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 border border-[var(--mint)] text-[var(--mint)] rounded hover:bg-[var(--mint)]/10 transition-all duration-300 text-center"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch
            </a>
            <a 
              href="#experience" 
              className="inline-block px-8 py-4 bg-[var(--mint)] text-[var(--navy)] rounded hover:bg-[var(--mint-dark)] transition-all duration-300 text-center font-medium"
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
