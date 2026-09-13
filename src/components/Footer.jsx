import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-12 pb-8 px-4 sm:px-6 lg:px-12 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">
          
          {/* Brand & Description Column (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 text-left">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img
                src={logoText}
                alt="Dev Stack Logo"
                className="h-7 object-contain"
              />
            </div>

            {/* Description */}
            <p className="max-w-sm text-slate-400 text-xs leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
              <a href="#github" className="hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="text-left">
            <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
              PRODUCT
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
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
          <div className="text-left">
            <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
              COMPANY
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
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
          <div className="text-left">
            <h3 className="font-bold text-slate-900 tracking-wider text-xs mb-4 uppercase">
              LEGAL
            </h3>
            <ul className="space-y-3 text-xs text-slate-500">
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

        {/* Bottom Bar / Copyright Section */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
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