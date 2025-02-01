import React from "react";

const Skills = () => {
  return (
    <div className=" container pt-32 ">
      <div className=" grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className=" text-4xl md:text-4.9xl">
            Programming Languages That I am Working
          </h2>
          <p className=" text-gray-400 pt-2">
            "I am proficient in HTML, CSS, TypeScript, and Next.js, leveraging
            these technologies to craft responsive, visually appealing, and
            high-performance web applications. With HTML and CSS, I create
            structured, well-designed user interfaces. Using TypeScript, I build
            robust and scalable logic, ensuring type safety and reducing errors.
            Next.js allows me to develop modern, SEO-friendly, and efficient
            applications, utilizing features like server-side rendering and API
            routes for dynamic functionality. Together, these skills empower me
            to deliver exceptional user experiences and reliable solutions."
          </p>
        </div>
        <div>
          <div className=" grid grid-cols-2 text-orange-400 text-3xl sm:text-4xl">
            <div className=" space-y-2">
              <h2>TYPESCRIPT</h2>
              <h2>HTML</h2>
              <h2>CSS</h2>
            </div>
            <div className=" space-y-2">
              <h2>JAVASCRIPT</h2>
              <h2>NEXT.JS</h2>
              <h2>REACT.JS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
