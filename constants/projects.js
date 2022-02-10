import Image from "next/image";

export const projects = [
  {
    id: 0,
    title: "Portfolio",
    description: [
      "Responsive, dynamic website built with NEXT.JS and Tailwind CSS. Showcases my previous projects and personal information.",
    ],
    image: (
      <Image
        src="/images/portfolio.png"
        alt="Image of project"
        width="1694"
        height="953"
        className="rounded transition hover:scale-90 ease-in duration-100"
      />
    ),
    techs: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/tymarcowong/portfolio",
    visit: "https://marcowong.herokuapp.com/",
  },
  {
    id: 1,
    title: "TicketEZ",
    description: [
      "A university project that simualtes a ticket booking website.",
      "Users can create their own event listing to sell their event tickets, or purchase tickets from existing events.",
      "Fully functional user authentication system, live user comments and renders dynamic data fetched from a SQLite database. ",
    ],
    image: (
      <Image
        src="/images/ticketEZ.png"
        alt="Image of project"
        width="1659"
        height="933"
        className="rounded transition hover:scale-90 ease-in duration-100"
      />
    ),
    techs: ["HTML5", "CSS3", "Bootstrap", "Python Flask", "SQLite", "Heroku"],
    github: "https://github.com/Z1yim/IAB207-ASM3",
    visit: "http://iab207-asm3.herokuapp.com/",
  },
];
