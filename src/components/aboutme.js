import React from "react";

const AboutMe = () => {
  return (
    <section className="-white shadow-md rounded-2xl p-6 my-12bg">
      
      {/* TOP SECTION: PHOTO + NAME */}
      <div className="flex items-center gap-6">
        
        {/* 🖼️ PHOTO */}
       <img
  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7Uq_Sg-zCzk48-yFX-n0zlVSgF4UQnKlhtTixeXCdQExQ-2LMwTxAzSXbJUDDC7VjrYfULwJ8SF3VGXWnYaUSYua8HldUfYu5E3SPC6Rcft0paRHo50AaFwe84hMw9j4oNzq8vADH0zneUFD3VuNQ9hIhwNYGtD89A0paFSwfCX29JWb2cHyuvbr7PGA/s320/428694900_7231438940258582_3294705476853533309_n.jpg"
  alt="Profile"
  className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
/>

        {/* 👤 NAME + TITLE */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            Gaevrylle Paul D. Balintag
          </h2>
          <p className="text-gray-600 mt-2">
            Network Security Student
          </p>
        </div>

      </div>

      {/* 📄 DESCRIPTION */}
      <p className="text-lg mt-6">
        I am a motivated and passionate student of University of the Cordilleras, taking BSIT - Network Security
      </p>

    </section>
  );
};

export default AboutMe;