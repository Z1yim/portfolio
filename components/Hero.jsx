import React from "react";

export default function Hero() {
  return (
    <div className="flex  flex-col w-full min-h-screen items-center justify-center section__padding">
      <h2 className="text-7xl my-5 font-bold">Marco Wong</h2>

      <p className="text-3xl leading-loose">Frontend Web-Developer</p>

      <button
        onClick={() => {
          window.location = "http://google.com";
        }}
        className="gradient text-xl p-5 rounded-full mt-5
            "
      >
        View my projects
      </button>
    </div>
  );
}
