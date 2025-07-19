import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

// Service card component
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[260px] flex justify-evenly items-center flex-col 
        sm:min-h-[280px] sm:px-12" // 🔧 Tweaked padding and min-height for better mobile responsiveness
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About section component
const About = () => {
  return (
    <>
      <div className="aboutsec mt-12 sm:mt-16 px-4 sm:px-0"> {/* 🔧 Added padding on small screens */}
        <motion.div
          variants={fadeIn('', '', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]" // 🔧 Adjusted font and spacing
        >
          Hi! I’m Zahida — a passionate full-stack developer and graphic designer who turns ideas into engaging digital experiences. From user-friendly websites to bold, story-driven visuals, I blend design and digital craft to create interfaces that are not only visually striking but intuitively seamless. Step into my creative world — I’d love to hear your thoughts! ✨
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-10 items-center sm:items-stretch justify-center"> {/* ✅ Responsive layout fix */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
