import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* ✅ Modified layout: added md:flex-row for proper wrapping */}
      <div
        className={`absolute inset-0 top-[70px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-6`}
      >
        {/* ✅ Left Section */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Zahida</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I do{" "}
                <Typewriter
                  options={{
                    strings: [
                      "development",
                      "graphic designing",
                      "web designing",
                      "UI/UX designing",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: "natural",
                    pauseFor: 1000,
                  }}
                />
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Right Image Section */}
        <div className="w-full flex justify-center md:justify-end md:w-1/2 mt-4 md:mt-0">
          {/* ✅ Added custom class 'mobile-img' and responsive sizes */}
          <img
            src={logo}
            alt="Profile"
            className="mobile-img w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-[#915EFF] object-cover shadow-lg transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
