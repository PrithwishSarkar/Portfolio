export default function ContactSection() {
  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-[var(--mint)] font-mono text-lg">04. </span>Get In Touch
          </h3>
          
          <p className="text-[var(--slate)] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-[var(--navy-light)]/50 rounded-lg p-8 border border-[var(--navy-light)]/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <i className="fas fa-envelope text-[var(--mint)] text-2xl mb-3"></i>
                  <h4 className="text-lg font-semibold text-[var(--lightest-slate)] mb-2">Email</h4>
                  <a 
                    href="mailto:prithwish1705@gmail.com" 
                    className="text-[var(--slate)] hover:text-[var(--mint)] transition-colors"
                  >
                    prithwish1705@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <i className="fas fa-phone text-[var(--mint)] text-2xl mb-3"></i>
                  <h4 className="text-lg font-semibold text-[var(--lightest-slate)] mb-2">Phone</h4>
                  <a 
                    href="tel:+919051972382" 
                    className="text-[var(--slate)] hover:text-[var(--mint)] transition-colors"
                  >
                    (+91) 9051972382
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <i className="fas fa-map-marker-alt text-[var(--mint)] text-2xl mb-3"></i>
                <h4 className="text-lg font-semibold text-[var(--lightest-slate)] mb-2">Based in</h4>
                <p className="text-[var(--slate)]">Kalyani, Kolkata, West Bengal, India</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-8">
              <a 
                href="https://github.com/PrithwishSarkar" 
                className="social-link text-[var(--slate)] hover:text-[var(--mint)] text-2xl" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/prithwish17" 
                className="social-link text-[var(--slate)] hover:text-[var(--mint)] text-2xl" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="mailto:prithwish1705@gmail.com" 
                className="social-link text-[var(--slate)] hover:text-[var(--mint)] text-2xl"
                aria-label="Send Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="mailto:prithwish1705@gmail.com" 
                className="inline-block px-8 py-4 border border-[var(--mint)] text-[var(--mint)] rounded hover:bg-[var(--mint)]/10 transition-all duration-300 text-lg"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
