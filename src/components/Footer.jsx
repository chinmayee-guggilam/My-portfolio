import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/chinmayee-guggilam",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/chinmayee-guggilam",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:chinmayeeguggilam@gmail.com",
      label: "Email"
    }
  ];

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-light text-black mb-4">
              Chinmayee Guggilam
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Computer Science student passionate about building innovative 
              solutions that bridge technology and real-world impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : "_self"}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="p-3 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium text-black mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-black transition-colors font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-medium text-black mb-6">
              Let's Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:chinmayeeguggilam@gmail.com"
                className="block text-gray-600 hover:text-black transition-colors font-light"
              >
                chinmayeeguggilam@gmail.com
              </a>
              <a
                href="tel:+91-94931-88004"
                className="block text-gray-600 hover:text-black transition-colors font-light"
              >
                +91-94931-88004
              </a>
              <p className="text-gray-600 font-light">
                Based in India
              </p>
            </div>
            
            {/* Status Badge */}
            <div className="mt-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>© {currentYear} Chinmayee Guggilam. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors text-sm group"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs">
            This portfolio showcases my journey as a Computer Science student and aspiring software engineer. 
            All projects and achievements mentioned are genuine and can be verified through the provided links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;