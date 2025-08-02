import React from "react";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      items: skills.languages,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Frontend",
      icon: <Code size={24} />,
      items: skills.frontend,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      items: skills.backend,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      items: skills.databases,
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "ML Tools",
      icon: <Brain size={24} />,
      items: skills.mlTools,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      items: skills.tools,
      color: "bg-gray-50 border-gray-200"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Technical Skills
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life,
            from concept to deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${category.color}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-gray-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-black">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 group hover:border-gray-200 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;