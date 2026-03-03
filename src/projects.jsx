import React from "react";

const projects = [
  {
    title: "Flavourystic – AI Recipe & Flavor Intelligence Platform",
    desc: "Flavourystic is an AI-driven web application designed to solve everyday cooking problems by suggesting recipes based on available ingredients. The platform integrates OpenAI API to generate intelligent flavor pairings, ingredient substitutions, and step-by-step recipe guidance. A structured recipe and flavor database ensures accuracy while the AI layer enhances personalization. This project demonstrates real-world use of AI, API integration, and full-stack development principles.",
    tech: ["React.js", "Node.js", "OpenAI API", "Recipe & Flavor DB"],
  },
  {
    title: "Alumni Management System (Minor Project)",
    desc: "A full-fledged alumni management website aimed at strengthening the connection between college alumni and current students. The platform allows alumni registration, profile creation, and structured data storage for long-term engagement. It supports basic communication features and serves as a centralized alumni directory. This project focuses on database design, backend integration, and scalable web architecture.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Student Risk Prediction System",
    desc: "This mini project focuses on identifying students at academic risk using performance-related data. The system processes inputs such as attendance and marks to predict risk levels and highlight students who may require academic support. Developed as a single-page application, the project emphasizes logical flow, data handling, and backend connectivity using PHP and MySQL concepts.",
    tech: ["PHP", "MySQL", "HTML"],
  },
  {
    title: "Event Hub – Interactive Event Listing Platform",
    desc: "Event Hub is a responsive web application that displays upcoming events in an organized and visually appealing format. The platform allows users to explore events with interactive UI components. Built using core frontend technologies, this project highlights strong fundamentals in layout design, DOM manipulation, and responsive web development.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-4">
      <h2 className="text-4xl font-bold text-center mb-20 text-white">
        My <span className="text-pink-500">Projects</span>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12">
        {projects.map((p, index) => (
          <div
            key={p.title}
            className={`relative p-[2px] rounded-2xl animate-gradient
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            ${index % 2 === 0 ? "slide-left" : "slide-right"}`}
          >
            <div className="h-full bg-black/80 backdrop-blur-xl rounded-2xl p-7 hover:-translate-y-2 transition duration-500">
              <h3 className="text-2xl font-semibold text-white leading-snug">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full
                    bg-pink-500/20 text-pink-400 border border-pink-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 5s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .slide-left {
          animation: slideFromLeft 1.1s ease forwards;
        }

        .slide-right {
          animation: slideFromRight 1.1s ease forwards;
        }

        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-70px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(70px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;