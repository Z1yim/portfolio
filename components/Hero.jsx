import React from "react";

export default function Hero() {
  return (
    <header className="w-full min-h-screen flex flex-col justify-center items-center section__padding">
      <h2 className="text-7xl my-5 font-bold text-transparent bg-clip-text gradient">
        Marco Wong
      </h2>

      <h3 className="text-3xl leading-loose">Frontend Web-Developer</h3>

      <p className="py-7 text-xl w-1/3 text-center text-gray-400">
        I build interactive, responsive, accessible websites! I've started my
        web-dev journey a year ago and I am constantly learning new skills to
        become a better dev.
      </p>

      <button
        onClick={() => {
          window.location = "http://google.com";
        }}
        className="gradient text-xl p-5 rounded-full mt-5
            "
      >
        Check out my projects
      </button>
    </header>
  );
}
