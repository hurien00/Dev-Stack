import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-12 pb-6 px-4 sm:px-6 lg:px-12 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Upper Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 pb-12">
          
          {/* Brand & Description Column */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <img
                src={logoText}
                alt="Dev Stack Logo"
                className="h-8 object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-xs mx-auto lg:mx-0 text-slate-500 leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building 
              modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 font-semibold text-slate-700">
              <a href="#github" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <span className="text-slate-400">•</span>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <span className="text-slate-400">•</span>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center lg:text-left">
            {/* PRODUCT */}
            <div>
              <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
                PRODUCT
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#home" className="hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
                COMPANY
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#about" className="hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
                LEGAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#privacy" className="hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright Section */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;