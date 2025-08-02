import React, { useState } from "react";
import { Award, Trophy, BookOpen, Users } from "lucide-react";

const Achievements = ({ achievements, certifications, leadership }) => {
  const [activeTab, setActiveTab] = useState("achievements");

  const tabs = [
    { id: "achievements", label: "Achievements", icon: <Trophy size={20} /> },
    { id: "certifications", label: "Certifications", icon: <Award size={20} /> },
    { id: "leadership", label: "Leadership", icon: <Users size={20} /> }
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Milestones that reflect my commitment to excellence, continuous learning, 
            and community contribution.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Trophy size={24} className="text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-black mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === "certifications" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <BookOpen size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-black mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Leadership Tab */}
          {activeTab === "leadership" && (
            <div className="space-y-6">
              {leadership.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Users size={24} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-black mb-3">
                        {activity.activity}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-black p-8 rounded-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-light mb-2">{achievements.length}</h3>
              <p className="text-gray-300 text-sm">Achievements</p>
            </div>
            <div>
              <h3 className="text-3xl font-light mb-2">{certifications.length}</h3>
              <p className="text-gray-300 text-sm">Certifications</p>
            </div>
            <div>
              <h3 className="text-3xl font-light mb-2">600+</h3>
              <p className="text-gray-300 text-sm">Problems Solved</p>
            </div>
            <div>
              <h3 className="text-3xl font-light mb-2">8.88</h3>
              <p className="text-gray-300 text-sm">CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;