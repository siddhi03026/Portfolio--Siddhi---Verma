const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 text-white"
      style={{
        backgroundImage: "url('/hero-space.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-300 tracking-widest mb-3 text-sm">
            HELLO, I'M
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Siddhi Verma
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6">
            MERN Stack Developer
          </h2>

          <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
            Building scalable and impactful web applications using modern
            technologies with a creative touch.
          </p>

          <a
            href="#projects"
            className="inline-block px-7 py-3 rounded-lg 
              bg-gradient-to-r from-pink-500 to-purple-500 
              hover:scale-105 transition 
              shadow-lg shadow-pink-500/30"
          >
            View Projects
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          
          {/* Glow */}
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 
            md:w-96 md:h-96 
            bg-gradient-to-r from-pink-500 to-purple-600 
            rounded-full blur-3xl opacity-30">
          </div>

          {/* Profile */}
          <img
            src="/profile.jpeg"
            alt="profile"
            className="relative w-44 h-44 sm:w-52 sm:h-52 
              md:w-72 md:h-72 
              rounded-full object-cover 
              border-4 border-purple-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero