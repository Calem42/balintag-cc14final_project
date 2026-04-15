import React from "react";

const Skills = () => {
  const skills = [
    "Cisco Packet Tracer",
    "HTML",
    "CSS",
    "Python",
    
  ];

  return (
    <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
        Skills
      </h2>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-blue-50 dark:bg-gray-700 text-center rounded-xl py-3 font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;