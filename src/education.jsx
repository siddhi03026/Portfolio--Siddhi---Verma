const Education = () => {
  return (
    <section id="education" className="relative py-24 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-20
        bg-gradient-to-r from-pink-400 to-purple-400
        bg-clip-text text-transparent">
        Education Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px]
          bg-gradient-to-b from-pink-500 to-purple-500" />

        {/* ===== CARD TEMPLATE ===== */}
        {[
          {
            title: "10th Grade (2021)",
            sub: "Mahavir Convent H.S. School",
            back: "70% • Strong foundation in Maths & Science",
            side: "left",
          },
          {
            title: "12th Grade (2023)",
            sub: "PCM Stream",
            back: "67% • Logical & analytical mindset built",
            side: "right",
          },
          {
            title: "B.Tech – CSE",
            sub: "Acropolis Institute of Technology",
            back: "CGPA 6.91 • MERN • DSA • Hackathons",
            side: "left",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`relative mb-24 pl-12 md:pl-0 md:flex
              ${item.side === "left" ? "md:justify-start" : "md:justify-end"}`}
          >
            {/* Dot */}
            <div className="absolute left-2 md:left-1/2 top-8
              w-4 h-4 bg-pink-500 rounded-full -translate-x-1/2 z-10" />

            {/* Flip Card */}
            <div className="group [perspective:1200px] w-full md:w-[45%]">
              <div
                className="
                relative h-48
                transition-transform duration-700
                [transform-style:preserve-3d]
                group-hover:rotate-y-180
                group-focus-within:rotate-y-180
                active:rotate-y-180
                "
                tabIndex={0}
              >
                {/* FRONT */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-br from-[#1b1f3b]/80 to-[#2a0f2f]/80
                  backdrop-blur-xl
                  border border-white/20
                  rounded-2xl p-6 shadow-xl
                  [backface-visibility:hidden]
                  "
                >
                  <h3 className="text-xl font-semibold text-pink-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {item.sub}
                  </p>
                  <p className="text-xs text-gray-500 mt-4">
                  
                  </p>
                </div>

                {/* BACK */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r from-pink-500 to-purple-600
                  rounded-2xl p-6 text-white
                  rotate-y-180
                  [backface-visibility:hidden]
                  flex items-center
                  "
                >
                  <p className="text-sm leading-relaxed">
                    {item.back}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Education