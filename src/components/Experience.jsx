import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Experience
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Professional experiences that have shaped my skills and understanding 
            of real-world software development and data science.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:-translate-x-px"></div>

          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 w-4 h-4 bg-white border-4 border-black rounded-full md:left-1/2 md:-translate-x-2"></div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 ${
                index % 2 === 0 
                  ? "md:pr-12 md:w-1/2" 
                  : "md:pl-12 md:w-1/2 md:ml-auto"
              }`}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
                  {/* Company & Position */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-black mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                    </div>
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Briefcase size={20} className="text-gray-600" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Experience Type Badge */}
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-black mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-gray-600 font-light mb-6">
              I'm actively seeking full-time opportunities where I can contribute 
              to meaningful projects and continue growing as a software engineer.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;