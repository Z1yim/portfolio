import React from "react";
import { projects } from "../constants/projects";
import Card from "./Card";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="w-full section__padding min-h-screen">
      <SectionHeading heading="Projects" />
      <div>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
