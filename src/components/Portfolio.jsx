import React, { useState, useEffect } from "react";
import { mockData } from "../mock";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-2xl font-medium text-gray-800 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero data={mockData.personal} />
        <About data={mockData.personal} education={mockData.education[0]} />
        <Projects projects={mockData.projects} />
        <Experience experience={mockData.experience} />
        <Skills skills={mockData.skills} />
        <Achievements 
          achievements={mockData.achievements} 
          certifications={mockData.certifications}
          leadership={mockData.leadership}
        />
        <Contact data={mockData.personal} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;