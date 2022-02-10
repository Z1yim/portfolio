import React from "react";

export default function Skill({ prop }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center xl:border-r last:border-none my-10">
      {prop.icon}
      <h3 className="my-5 text-3xl font-bold text-purple-500">
        {prop.heading}
      </h3>
      <ul>
        {prop.list.map((item) => (
          <li key={item} className="m-2 text-lg text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
