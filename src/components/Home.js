import React from "react";
import { SocialIcon } from "react-social-icons";
import TypeWriter from "typewriter-effect";

function Home() {
  const staticWord = "I am a ";
  const typewriterText = [
    //what you'd like for the typewriter to write
    "text1.",
    "text2.",
    "text3.",
    "text4.",
    "text5.",
  ];
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-purple-500 to-gray-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div>
          <h1 className="text-white text-center text-8xl p-4 font-bold">Your Name</h1>
        </div>

        <div>
          <div className="text-cyan-200 text-3xl p-5">
            <span>
              <TypeWriter
                options={{
                  delay: 70,
                  deleteSpeed: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    // type static word
                    .typeString(staticWord)
                    // pause
                    .pauseFor(150);

                  // call start function repeatedly
                  setInterval(() => {
                    typewriter.start();

                    // Loop typewriterText array and call typeString function
                    typewriterText.forEach((text) => {
                      typewriter
                        .typeString(text)
                        // pause
                        .pauseFor(500)
                        // delete typewriter text
                        .deleteChars(text.length)
                        // pause
                        .pauseFor(50);
                    });
                  }, 500);
                }}
              />
            </span>
          </div>
        </div>
        <div className="p-5">
          {/* other icons available, will post icon upon entering link */}
          <SocialIcon
            className="mx-4 hover:scale-125"
            // bgColor="cyan"
            target="_blank"
            url="https://www.linkedin.com/in"
          />
          <SocialIcon
            className="mx-4 hover:scale-125"
            bgColor="white"
            target="_blank"
            url="https://github.com"
          />
          <SocialIcon
            className="mx-4 hover:scale-125"
            bgColor="black"
            target="_blank"
            url="https://medium.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
