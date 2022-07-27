import React, { useState } from "react";

function ContactCard() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
            Contact me!
          </h5>
          <div className="flex">
            <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
              <a href="https://github.com/actuallydoc">
                <img
                  className="my-5 mx-2 max-h-10 text-center"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </p>
            <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
              <a href="https://www.linkedin.com/in/maj-knez-65ba6b246/c">
                <img
                  className="my-5 mx-2 max-h-10 text-center"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                />
              </a>
            </p>
            <div className="flex">
              <p class="mb-3 text-lg font-mono text-white transition hover:scale-105">
                <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <img
                    className="my-5 mx-2 max-h-10 text-center rounded-all"
                    src="https://i.pinimg.com/originals/01/b1/e4/01b1e436c03e167d3b2b466f75c184a1.png"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          {isHovering && (
            <a className="font-mono text-xl text-center">Doc#1477</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
