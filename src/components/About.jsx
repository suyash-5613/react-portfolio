import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi, I'm Suyash Sahu, a passionate and experienced web developer with a
          knack for creating dynamic and responsive web applications. With a
          strong foundation in both front-end and back-end technologies, I
          strive to deliver seamless and user-friendly digital experiences.
        </p>

        <br />

        <p className="text-xl">
          My expertise spans both front-end and back-end development, leveraging
          technologies such as HTML, CSS, JavaScript, React, Node.js, and
          MongoDB. I've had the privilege of working on a diverse range of
          projects, from high-traffic e-commerce platforms to sleek personal
          portfolios. My focus is on creating intuitive user experiences and
          writing clean, efficient code that meets modern web standards.
        </p>
      </div>
    </div>
  );
};

export default About;
