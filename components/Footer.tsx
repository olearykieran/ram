export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-accent text-3xl font-semibold tracking-wider mb-4 block">RAM</span>
            <p className="text-white/70">Religious Asset Management</p>
          </div>
          
          <div>
            <h4 className="font-accent text-sm uppercase tracking-wider text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-secondary transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-accent text-sm uppercase tracking-wider text-secondary mb-4">Professional Associations</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Member of National Association of Church Business Administration
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Certified Religious Property Specialist
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 Religious Asset Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}