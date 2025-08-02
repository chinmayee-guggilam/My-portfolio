import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white relative shadow-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-lg font-medium text-gray-600 mb-2">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-4 tracking-tight">
              {data.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              {data.title}
            </h2>
          </div>

          {/* Brief Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg font-normal text-gray-700 leading-relaxed">
              Passionate about building innovative solutions at the intersection of 
              <span className="text-blue-600 font-semibold"> full-stack development</span> and 
              <span className="text-blue-600 font-semibold"> machine learning</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <Github size={20} className="text-gray-600 group-hover:text-blue-600" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <Linkedin size={20} className="text-gray-600 group-hover:text-blue-600" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-4 bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <Mail size={20} className="text-gray-600 group-hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform p-2 bg-white rounded-full shadow-md"
        >
          <ChevronDown size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Custom CSS for slow animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;