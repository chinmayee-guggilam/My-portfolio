import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Full-Stack", "Machine Learning", "MobileApp"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Selected Works
          </h2>
          <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my passion for building 
            innovative solutions across different domains.
          </p>
        </div>

        {/* Projects with Filter */}
        <div>
          {/* Filter Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Filter size={20} className="text-gray-600" />
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all shadow-sm hover:shadow-md ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-200"
              >
                {/* Project Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
  {project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="text-blue-600 font-medium text-lg">
      {project.category}
    </div>
  )}
</div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full whitespace-nowrap ml-2 font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-normal text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full border border-gray-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1 font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        <Github size={14} />
                        <span className="text-xs">Code</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                      >
                        <ExternalLink size={14} />
                        <span className="text-xs">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;