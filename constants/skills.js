import { FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

const iconStyle = "w-10 h-10";

export const skills = [
  {
    id: 0,
    icon: <FaReact className={iconStyle} />,
    heading: "Frontend",
    list: [
      "HTML",
      "CSS",
      "React",
      "JavaScript",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    icon: <FiDatabase className={iconStyle} />,
    heading: "Backend",
    list: ["mySQL, SQLite", "Node.js", "Express.js", "Python Flask"],
  },
  {
    id: 2,
    icon: <BsCodeSlash className={iconStyle} />,
    heading: "Other Skills",
    list: ["C", "C#", "Python", "Figma"],
  },
];
