import Navbar from "./navbar.jsx"
import Hero from "./hero.jsx"
import About from "./about.jsx"
import Skills from "./skills.jsx"
import Projects from "./projects.jsx"
import Education from "./education.jsx"
import Contact from "./contact.jsx"
import Footer from "./footer.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div
        className="relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('/image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;