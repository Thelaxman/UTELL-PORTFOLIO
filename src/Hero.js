import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "dynamic",
      "solution-oriented",
      "resourceful",
      "reliable",
      "experts",
    ],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 70,
  });

  return (
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16 relative">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[##318CE7] text-2xl font-bold">
            Empowering digital success through innovative solutions across
            diverse platforms seamlessly.
          </p>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              <span className="text-[#318CE7]">UTELL.</span>
              We are <span>{text}</span>{" "}
              <span>
                <Cursor />
              </span>
            </p>
          </div>

          <button className="bg-black font-bold w-[200px] rounded-md my-6 mx-auto py-3 text-white">
            {" "}
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
