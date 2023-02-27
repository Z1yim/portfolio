import React from "react";
import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <section className="w-full section__padding min-h-screen" id="aboutMe">
      <SectionHeading heading="About Me" />
      <article className="">
        <h3 className="mt-20 mb-5 text-4xl font-bold pb-4">My Education</h3>
        <h4 className="pb-5 text-2xl font-bold">
          Queensland University of Technology (Feb 2020 - Dec 2022)
        </h4>
        <p className="text-xl pb-10">
          Distinction (GPA: 5.8/7)
          <br />
          Bachelor of Information Technology <br />
          Major: Computer Science | Minor and electives: 3D character modeling,
          UI/UX Design, Web Development
        </p>
      </article>

      <article className="">
        <h3 className="mt-20 mb-5 text-4xl font-bold pb-4">My Experience</h3>

        <section className="pb-10">
          <h4 className="pb-3 text-2xl font-bold">
            Metro North Health (Brisbane, QLD)
          </h4>
          <p className="text-md pb-3 text-gray-300">
            Full Stack App Development Experience (Aug 2021 - Mar 2022)
          </p>
          <ul className="text-lg">
            <li className="pb-3">
              Designed and developed a mobile responsive, accessible and
              functional shift management website prototype primarily using
              ReactJS, JavaScript and TailwindCSS.
            </li>
            <li>
              In an AGILE project management environment, Worked closely with
              the hospital manager and project manager to ensure high
              performnance quality and time efficiency of the developed app.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="pb-3 text-2xl font-bold">
            Freelance and Personal Projects
          </h4>
          <p className="text-md pb-3 text-gray-300">(Feb 2022 - Current)</p>
          <ul className="text-lg">
            <li className="pb-3">
              Developing photographer portfolio websites for work demonstration.
            </li>
            <li className="pb-3">
              Developing web applications in the hopes of learning and applying
              different web-development technologies.
            </li>
            <li>
              On-going Projects includes: Animated personal portfolio,
              E-commerse website, Spotify-API display page
            </li>
          </ul>
        </section>
      </article>

      <h3 className="mt-20 mb-5 text-4xl font-bold pb-4">Technologies</h3>
      <Skills />
    </section>
  );
}
