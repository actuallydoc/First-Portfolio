import Image from "next/image";
import React from "react";

function AboutCard() {
  return (
    <div>
      <div className="sm:max-w-sm md:max-w-md xl:max-w-xl text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  transform  hover:scale-110 duration-500">
        <Image
          className="rounded-t-lg mt-5"
          src="https://i.pinimg.com/originals/70/4f/2b/704f2b9c53b01caf36eedecd6e4ade0e.png"
          width="100"
          height="100"
          alt="logo"
        />
        <div className="m-auto p-10">
          <h5 className="mb-2 font-mono text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About me!
          </h5>
          <p className="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I love playing computer games
          </p>
          <p className="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I love cars
          </p>
          <p className="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I'm pretty bad at designing websites....I think?
          </p>
          <p className="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I mostly like backend programming (Node.js, Python, REST,.)
          </p>
          <p className="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I'm a big fan of the React and Nextjs
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
