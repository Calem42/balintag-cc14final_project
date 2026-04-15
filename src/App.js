import logo from './logo.svg';
import './App.css';

import React from 'react';
import AboutMe from "./components/aboutme";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="text-center py-8 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">My Portfolio</h1>
              <p className="mt-2 text-blue-100">
                CC14-2M Final Project
              </p>
            </div>

            
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
