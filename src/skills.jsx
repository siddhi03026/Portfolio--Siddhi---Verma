const skills = [
  // Technical Skills
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "Tailwind",
  
  // Tools
  "GitHub",
  "MS Word",
  "Canva",
  
  // Soft Skills
  "Teamwork",
  "Communication",
  "Time Management",
  "Problem Solving",
  "Leadership"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 flex justify-center items-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          My <span className="text-pink-500">Skills</span>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {skills.map((skill) => (
            <div key={skill} className="group perspective">
              {/* Gradient Border */}
              <div className="relative rounded-xl p-[2px] animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                {/* Card */}
                <div className="skill-card">
                  <span className="text-lg font-semibold text-white">
                    {skill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* extra styles */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }

        .skill-card {
          width: 130px;
          height: 80px;
          background: rgba(15, 15, 25, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }

        .group:hover .skill-card {
          transform: rotateY(180deg);
        }

        @media (min-width: 640px) {
          .skill-card {
            width: 150px;
            height: 90px;
          }
        }

        @media (min-width: 1024px) {
          .skill-card {
            width: 170px;
            height: 100px;
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 4s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills