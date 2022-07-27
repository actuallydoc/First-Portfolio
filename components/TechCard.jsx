import React from "react";

function TechCard() {
  return (
    <div className="flex">
      <div class="sm:max-w-sm md:max-w-md xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  transform  hover:scale-110 duration-500">
        <img
          class="rounded-t-lg"
          src="https://www.pinterest.com/pin/3307399714553319/"
          alt=""
        />
        <div class="mr-20 p-10 text-center font-mono sm:max-w-sm md:max-w-md xl:max-w-md">
          <h5 class="mb-2 font-mono text-2xl font-bold tracking-tight text-gray-900 dark:text-white transform  hover:animate-pulse duration-500">
            Technology that I'm learning!
          </h5>

          <div className="flex text-white hover:animate-bounce">
            <div className="underline decoration-sky-500">
              <a>Pyt</a>
            </div>
            <div className="underline decoration-yellow-500">
              <a>hon</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-yellow-500">
              <a>JavaScript</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-sky-500">
              <a>React</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-green-500">
              <a>Node</a>
            </div>
            <div className="underline decoration-gray-700 text-gray-700">
              <a href="">JS</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-green-500">
              <a>MongoDB </a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png"
            />
          </div>

          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>ExpressJS</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://adityasingh.gallerycdn.vsassets.io/extensions/adityasingh/expressjs-snippets/0.0.1/1639291392716/Microsoft.VisualStudio.Services.Icons.Default"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>TypeScript</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-black">
              <a>Prisma</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-black">
              <a>NextJS</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-green-300">
              <a>TailwindCSS</a>
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>Material</a>
            </div>
            <div className="underline decoration-blue-500 text-blue-500">
              UI
            </div>
            <img
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://mui.com/static/logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
