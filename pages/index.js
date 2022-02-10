import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-slate-900 text-primary">
      <Hero />
      <main className="container">
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
