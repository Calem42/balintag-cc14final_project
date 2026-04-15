import React from "react";

const Experience = () => {
  return (
    <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
        Experience
      </h2>

      <div className="mt-4 space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Project Management</h3>
          <p className="text-gray-600 dark:text-gray-300">School Project</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Cisco Networking</h3>
          <p className="text-gray-600 dark:text-gray-300">School Project</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;