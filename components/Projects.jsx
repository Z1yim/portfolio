import React from "react";
import { projects } from "../constants/projects";
import Card from "./Card";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="w-full section__padding min-h-screen" id="projects">
      <SectionHeading heading="Projects" />

      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}

      <p className="text-lg">
        Check out my{" "}
        <a
          href="https://github.com/tymarcowong"
          className="text-blue-400 underline"
        >
          GitHub
        </a>{" "}
        for more of my university / personal projects.
      </p>
    </section>
  );
}
