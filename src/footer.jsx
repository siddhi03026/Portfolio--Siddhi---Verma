const Footer = () => {
  return (
    <footer className="relative py-10 px-6 text-center text-white">

      {/* Robot Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/robot.png"
          alt="robot"
          className="
            w-20 sm:w-24
            animate-footer-flip
          "
        />
      </div>

      {/* Footer Text */}
      <p className="text-gray-300 text-sm sm:text-base tracking-wide">
        © {new Date().getFullYear()} 
        <span className="text-pink-500 font-medium"> Siddhi Verma</span>. 
        All rights reserved.
      </p>

      {/* Animation */}
      <style>{`
        .animate-footer-flip {
          animation: footerFlip 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        @keyframes footerFlip {
          0% {
            transform: rotateY(0deg);
          }
          40% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>

    </footer>
  )
}

export default Footer