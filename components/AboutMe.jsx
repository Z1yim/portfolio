import React from "react";
import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <section className="w-full section__padding min-h-screen">
      <SectionHeading heading="About Me" />
      <article className="text-center">
        <h3 className="mt-10 mb-5 text-4xl font-bold pb-4">My Education</h3>
        <h4 className="pb-5 text-2xl font-bold">
          Queensland University of Technology (2020 - current)
        </h4>
        <p className="text-xl pb-10">
          Bachelor of Information Technology <br />
          Major: Computer Science | Minor and electives: CGI (3D character
          modeling), UI/UX Design
        </p>
      </article>

      <h3 className="mt-20 mb-5 text-4xl font-bold pb-4 text-center">
        Technologies
      </h3>
      <Skills />
    </section>
  );
}
