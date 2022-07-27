import Head from "next/head";
import MusicCard from "../components/MusicCard";
import AboutCard from "../components/AboutCard";
import Nav from "../components/Nav";
import TechCard from "../components/TechCard";
import { Typewriter } from "react-simple-typewriter";
import ContactCard from "../components/ContactCard";

export default function Home() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="bg-black  relative ">
      <Head>{/* <Nav /> */}</Head>
      <div className="bg-black">
        <div className="bg-slate-800">
          <div className="bg-slate-800  text-6xl font-bold bg-cover bg-center p-24 ml-10 mr-10">
            <h1 className="text-center py-5 text-white font-mono transform hover:scale-105 transition-all">
              Hello! I'm Maj and I'm a
              <span>
                <Typewriter
                  words={[" Web Developer", " Teribble web designer"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  delaySpeed={100}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            <div>
              <h1 className="text-center py-5 text-white font-mono transform hover:scale-105 transition-all">
                <span>
                  <Typewriter
                    words={["Eat", "Sleep", "Code", "Repeat!"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={200}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-5 content-start">
              <div className="m-5">
                <TechCard />
              </div>
              <div className="m-5">
                <AboutCard />
              </div>
              <div className="m-5">
                <ContactCard />
              </div>
            </div>
            <div className="fixed bottom-0 right-0">
              <div>
                <MusicCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
