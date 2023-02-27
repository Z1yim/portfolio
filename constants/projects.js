import Image from "next/image";

export const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: [
      "Responsive, dynamic website built with NEXT.JS and Tailwind CSS. Showcases my previous projects and personal information.",
    ],
    image: (
      <Image
        src="/images/portfolio.png"
        alt="Image of my portfolio"
        width="1694"
        height="953"
        className="rounded transition hover:scale-90 ease-in duration-100"
      />
    ),
    techs: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/tymarcowong/portfolio",
    visit: "https://tymarcowong.netlify.app/",
  },
  {
    id: "randallctc",
    title: "RANDALL.CTC",
    description: [
      "A photographer portfolio website built with Next.JS.",
      "Fully responsive website for displaying artist work.",
    ],
    image: (
      <Image
        src="/images/randallctc.png"
        alt="Image of RANDALL CTC"
        width="1895"
        height="962"
        className="rounded transition hover:scale-90 ease-in duration-100"
      />
    ),
    techs: ["Next.JS", "React", "SASS", "JavaScript"],
    github: "https://github.com/tymarcowong/randallctc.com",
    visit: "https://randallctc.netlify.app/",
  },
];
