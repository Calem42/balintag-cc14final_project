import React from "react";

const Education = () => {
  return (
    <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
        Education
      </h2>

      <div className="mt-4 space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Bachelor of Science in Information Technology - Network Security
          </h3>
          <p className="text-gray-600 dark:text-gray-300">University of the Cordilleras</p>
          <p className="text-gray-500 dark:text-gray-400">2023 - Present</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Senior High School  TVL - ICT</h3>
          <p className="text-gray-600 dark:text-gray-300">Baguio Central University - Senior Highschool</p>
          <p className="text-gray-500 dark:text-gray-400">2022 - 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;