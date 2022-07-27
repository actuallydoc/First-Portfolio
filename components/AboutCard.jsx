import React from "react";

function AboutCard() {
  return (
    <div>
      <div class="sm:max-w-sm md:max-w-md xl:max-w-xl text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  transform  hover:scale-110 duration-500">
        <img
          class="rounded-t-lg"
          src="https://www.pinterest.com/pin/3307399714553319/"
          alt=""
        />
        <div class="m-auto p-10">
          <h5 class="mb-2 font-mono text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About me!
          </h5>
          <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I love playing computer games
          </p>
          <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I love cars
          </p>
          <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I'm pretty bad at designing websites....I think?
          </p>
          <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I mostly like backend programming (Node.js, Python, REST,.)
          </p>
          <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
            I'm a big fan of the React and Nextjs
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
