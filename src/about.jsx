import React from "react";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        About <span className="text-pink-500">Me</span>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
      </h2>

      <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 space-y-6 leading-relaxed text-lg">
        
        <p>
          I’m a passionate <span className="text-pink-400 font-semibold">MERN Stack Developer</span> 
          who loves building scalable, responsive, and user-friendly web applications. 
          I enjoy turning real-world problems into impactful digital solutions.
        </p>

        <p>
          My expertise includes working with <span className="text-pink-400 font-semibold">MySQL, Express.js, React, and Node.js</span>. 
          I focus on writing clean, maintainable code and creating seamless user experiences 
          with modern UI/UX principles.
        </p>

        <p>
          I have worked on projects involving <span className="text-pink-400 font-semibold">AI-based systems, analytics dashboards, authentication systems, and full-stack applications</span>. 
          I am always curious to explore new technologies and continuously improve my development skills.
        </p>

        <p>
          Beyond coding, I actively participate in hackathons and tech competitions, 
          where I enjoy solving challenging problems and collaborating with teams. 
          My goal is to build meaningful tech products that create real-world impact.
        </p>

      </div>
    </section>
  );
};

export default About;