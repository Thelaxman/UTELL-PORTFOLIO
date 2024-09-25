import React, { useState } from "react";
import { motion } from "framer-motion";
import webb from "./media/webb.png";
import Mobilee from "./media/Mobilee.png";
import Cloudd from "./media/Cloudd.png";

const Tasks = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="cursor-pointer flex flex-col bg-white">
      <h1 className="text-2xl text-center pt-6 text-black font-bold">
        What we do?
      </h1>
      <div className="flex items-center justify-center bg-white h-screen ">
        <div className="flip-card w-[600px] h-[360px] rounded-md p-4 ">
          <motion.div
            onMouseEnter={handleFlip}
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4 "
              style={{ backgroundImage: `url(${webb})` }}
            ></div>
            <div className="flip-card-back w-[100%] h-[100%] bg-cover bg-white border-[1px] text-black rounded-lg p-4">
              <h1 className="text-2xl text-[#004953]  font-bold">
                WEB Development
              </h1>
              <p className="pt-6">
                {" "}
                "Empowering digital landscapes with cutting-edge web solutions,
                our IT company pioneers innovation, crafting bespoke web
                services that redefine online experiences and drive sustainable
                success for businesses globally."
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flip-card w-[600px] h-[360px] rounded-md p-4">
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            onMouseEnter={handleFlip}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className="flip-card-front w-[100%] h-[100%]  bg-center bg-contain bg-no-repeat border-[1px] text-black rounded-lg p-4"
              style={{ backgroundImage: `url(${Mobilee})` }}
            ></div>
            <div className="flip-card-back w-[100%] h-[100%] bg-cover bg-white border-[1px] text-black rounded-lg p-4">
              <h1 className="text-2xl text-[#004953]  font-bold">
                Mobile Development
              </h1>
              <p className="pt-6">
                "Pioneering mobile innovation, our IT company engineers
                cutting-edge solutions, crafting tailored mobile development
                services that elevate user experiences, scale businesses, and
                drive innovation in the ever-evolving mobile landscape."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flip-card w-[600px] h-[360px] rounded-md p-4">
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            onMouseEnter={handleFlip}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className="flip-card-front w-[100%] h-[100%] bg-center bg-contain bg-no-repeat border-[1px] text-black rounded-lg p-4"
              style={{ backgroundImage: `url(${Cloudd})` }}
            ></div>
            <div className="flip-card-back w-[100%] h-[100%] bg-cover bg-white border-[1px] text-black rounded-lg p-4">
              <h1 className="text-2xl text-[#004953]  font-bold">
                Cloud Services
              </h1>
              <p className="pt-6">
                "Revolutionizing businesses through cloud expertise, our IT
                company delivers advanced cloud services, enabling seamless
                scalability, security, and efficiency. We redefine operations,
                offering tailored solutions that optimize performance and propel
                growth in the digital era."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
