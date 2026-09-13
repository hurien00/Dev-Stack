import React from 'react';
import logoText from '../assets/logo-text.png'; 

const Nav = () => {
  
  const navLinks = (
  <>
    
    <li>
      <a
        href="#technologies"
        className="text-gray-600 hover:text-[#E91E63]"
      >
        Technologies
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="text-gray-600 hover:text-[#E91E63]"
      >
        Projects
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="text-gray-600 hover:text-[#E91E63]"
      >
        About
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="text-gray-600 hover:text-[#E91E63]"
      >
        Contact
      </a>
    </li>
  </>
);

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ------------ LEFT SECTION ------------ */}
        <div className="navbar-start">
          {/* Mobile view: Hamburger Icon */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Menu */}
           <ul className="flex items-center gap-2 hidden lg:flex font-medium text-sm">
  {navLinks}
</ul>
          </div>

          {/* Desktop view: Logo */}
          <a href="/" className="hidden lg:flex items-center gap-2">
            <img src={logoText} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
          </a>
        </div>

        {/* ------------ CENTER SECTION ------------ */}
        <div className="navbar-center">
          {/* Mobile view: Logo */}
          <a href="/" className="flex lg:hidden items-center">
            <img src={logoText} alt="Dev Stack Logo" className="h-7 w-auto object-contain" />
          </a>

          {/* Desktop view: Nav Links */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-medium text-sm space-x-2">
            {navLinks}
          </ul>
        </div>

        {/* ------------ RIGHT SECTION ------------ */}
        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          {/* Sign In (Text Button) */}
          <button className="btn btn-ghost hover:bg-transparent text-gray-700 hover:text-black font-medium text-sm border-none shadow-none px-2 sm:px-4">
            Sign In
          </button>

          {/* Sign Up (Filled Pill Button) */}
          <button className="btn border-none bg-[#E91E63] hover:bg-[#d81b60] text-white font-medium rounded-full px-5 sm:px-6 min-h-0 h-10 text-sm shadow-md">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Nav;