import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isMobileMenuOpen ? 'bg-[var(--navy)]/90 backdrop-blur-sm border-b border-[var(--navy-light)]/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-[var(--mint)]">&lt;</span>
            <span className="text-[var(--lightest-slate)]">Prithwish Sarkar</span>
            <span className="text-[var(--mint)]">/&gt;</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="nav-link text-[var(--slate)] hover:text-[var(--mint)]"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              <span className="text-[var(--mint)] text-sm font-mono">01.</span> About
            </a>
            <a 
              href="#experience" 
              className="nav-link text-[var(--slate)] hover:text-[var(--mint)]"
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              <span className="text-[var(--mint)] text-sm font-mono">02.</span> Experience
            </a>
            <a 
              href="#skills" 
              className="nav-link text-[var(--slate)] hover:text-[var(--mint)]"
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              <span className="text-[var(--mint)] text-sm font-mono">03.</span> Skills
            </a>
            {/* <a 
              href="#projects" 
              className="nav-link text-[var(--slate)] hover:text-[var(--mint)]"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              <span className="text-[var(--mint)] text-sm font-mono">04.</span> Projects
            </a> */}
            <a 
              href="#contact" 
              className="nav-link text-[var(--slate)] hover:text-[var(--mint)]"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span className="text-[var(--mint)] text-sm font-mono">04.</span> Contact
            </a>
            <a
                href="/assets/Prithwish_Sarkar_Resume.pdf"
                download
                className="inline-block px-4 py-2 border border-[var(--mint)] text-[var(--mint)] rounded hover:bg-[var(--mint)]/10 transition-all duration-300 w-fit"
              >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--mint)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-[var(--slate)] hover:text-[var(--mint)]"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                <span className="text-[var(--mint)] text-sm font-mono">01.</span> About
              </a>
              <a 
                href="#experience" 
                className="text-[var(--slate)] hover:text-[var(--mint)]"
                onClick={(e) => handleNavClick(e, '#experience')}
              >
                <span className="text-[var(--mint)] text-sm font-mono">02.</span> Experience
              </a>
              <a 
                href="#skills" 
                className="text-[var(--slate)] hover:text-[var(--mint)]"
                onClick={(e) => handleNavClick(e, '#skills')}
              >
                <span className="text-[var(--mint)] text-sm font-mono">03.</span> Skills
              </a>
              {/* <a 
                href="#projects" 
                className="text-[var(--slate)] hover:text-[var(--mint)]"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                <span className="text-[var(--mint)] text-sm font-mono">04.</span> Projects
              </a> */}
              <a 
                href="#contact" 
                className="text-[var(--slate)] hover:text-[var(--mint)]"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                <span className="text-[var(--mint)] text-sm font-mono">04.</span> Contact
              </a>
              <a
                href="/assets/Prithwish_Sarkar_Resume.pdf"
                download
                className="inline-block px-4 py-2 border border-[var(--mint)] text-[var(--mint)] rounded hover:bg-[var(--mint)]/10 transition-all duration-300 w-fit"
              >
                Resume
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
