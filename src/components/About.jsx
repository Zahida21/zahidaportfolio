import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div className="aboutsec mt-10">
      <motion.div  variants={fadeIn("", "", 0.2, 0.5)}initial="hidden" 
  whileInView="show" 
  viewport={{ once: false, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}initial='hidden'
        whileInView='show' viewport={{once:true, amount:0.2}}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
         Hi! I’m Zahida — a passionate full-stack developer and graphic designer who turns ideas into engaging digital experiences. From user-friendly websites to bold, story-driven visuals, I blend design and digital craft to create interfaces that are not only visually striking but intuitively seamless. Step into my creative world — I’d love to hear your thoughts! ✨
      </motion.p>
</div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
