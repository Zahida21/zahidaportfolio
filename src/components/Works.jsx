import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, index, isMobile }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, isMobile ? 0.3 : 0.75)} // 💬 reduced animation duration on mobile
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        options={{
          max: isMobile ? 10 : 45, // 💬 limited tilt on small screens
          scale: 1,
          speed: isMobile ? 200 : 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy" // 💬 added lazy loading for performance
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-[#000000cc] hover:bg-[#1a1a1a] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition duration-300"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] sm:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 💬 Check screen width once to optimize animations on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
        >
          Following projects showcase my skills and experience through examples
          of my work. There’s plenty to explore and ignite your imagination!
        </motion.p>
      </div>

      <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-7 min-h-[300px]">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
