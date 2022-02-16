import Head from "next/head";

import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-slate-900 text-primary">
      <Head>
        <title>Marco Wong</title>
        <meta name="description" content="A portfolio website of Marco Wong" />
      </Head>
      <Hero />
      <main className="container">
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
