import React from "react";
import Image from "next/image";
function TechCard() {
  return (
    <div className="sm:flex-row">
      <div className="sm:max-w-sm  md:max-w-md xl:max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  transform  hover:scale-110 duration-500">
        <Image
          className="rounded-t-lg"
          src="https://www.pinterest.com/pin/3307399714553319/"
          alt="what I'm learning"
          width="50"
          height="40"
        />
        <div className="mr-20 p-10 space-y-3 text-center font-mono sm:max-w-sm md:max-w-md xl:max-w-md">
          <h5 className="mb-2 font-mono text-2xl font-bold tracking-tight text-gray-900 dark:text-white transform  hover:animate-pulse duration-500">
            Technology that I'm learning!
          </h5>
          <div className="flex text-white hover:animate-bounce">
            <div className="underline decoration-sky-500">
              <a>Pyt</a>
            </div>
            <div className="underline decoration-yellow-500">
              <a>hon</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
              width="50"
              height="40"
              alt="Python"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-yellow-500">
              <a>JavaScript</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              width="50"
              height="40"
              alt="JavaScript"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-sky-500">
              <a>React</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png"
              width="50"
              height="40"
              alt="ReactJS"
            />
          </div>
          <div className="flex text-white">
            <div className="underline decoration-green-500">
              <a>Node</a>
            </div>
            <div className="underline decoration-gray-700 text-gray-700">
              <a href="">JS</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
              width="50"
              height="40"
              alt="NodeJS"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-green-500">
              <a>MongoDB </a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png"
              width="50"
              height="40"
              alt="MongoDB"
            />
          </div>

          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>ExpressJS</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://adityasingh.gallerycdn.vsassets.io/extensions/adityasingh/expressjs-snippets/0.0.1/1639291392716/Microsoft.VisualStudio.Services.Icons.Default"
              width="50"
              height="40"
              alt="ExpressJS"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>TypeScript</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
              width="50"
              height="40"
              alt="TypeScript"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-black">
              <a>Prisma</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png"
              width="50"
              height="40"
              alt="Prisma"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-black">
              <a>NextJS</a>
            </div>
            <Image
              className="mx-2  text-center rounded-md group:hover:bg-slate-600"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
              width="60"
              height="15"
              alt="NextJS"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-green-50">
              <a>TailwindCSS</a>
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://miro.medium.com/max/800/1*mUISLg4ghf6QYT_f1-cnlg.png"
              width="50"
              height="40"
              alt="TailwindCSS"
            />
          </div>
          <div className="flex group  text-white">
            <div className="underline decoration-sky-500">
              <a>Material</a>
            </div>
            <div className="underline decoration-blue-500 text-blue-500">
              UI
            </div>
            <Image
              className="my-5 mx-2 max-h-10 text-center rounded-md group:hover:bg-slate-600"
              src="https://mui.com/static/logo.png"
              width="50"
              height="40"
              alt="Material UI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
