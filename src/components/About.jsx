import React from "react";
import { GraduationCap, MapPin } from "lucide-react";

const About = ({ data, education }) => {
  return (
    <section id="about" className="py-24 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">
              About Me
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg font-normal text-gray-700 leading-relaxed">
                {data.summary}
              </p>
              
              <p className="text-lg font-normal text-gray-700 leading-relaxed">
                I thrive on solving complex problems and building scalable solutions 
                that make a real impact. My experience spans from developing AI-powered 
                applications to creating intuitive user interfaces, always with a focus 
                on clean, efficient code and user-centered design.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">7+</h3>
                <p className="text-gray-600 font-normal">Projects Built</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">3</h3>
                <p className="text-gray-600 font-normal">Internships</p>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Location */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <GraduationCap size={24} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-gray-600 mb-2">{education.institution}</p>
                  <p className="text-sm text-gray-500 mb-3">{education.duration}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    CGPA: {education.cgpa}
                  </p>
                </div>
              </div>
              
              {/* Relevant Courses */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-50 rounded-full">
                  <MapPin size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Based in {data.location}
                  </h3>
                  <p className="text-gray-600">Open to opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Currently Seeking</h3>
              <p className="text-blue-100 font-normal leading-relaxed">
                Full-time opportunities in product-based companies where I can 
                contribute to innovative projects and grow as a software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;