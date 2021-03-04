import React,{ useEffect, useState, createRef } from "react";
import { motion } from "framer-motion";
import locomotiveScroll from "locomotive-scroll";
import ImageProfil from 'src/assets/images/profil.jpg';
import './styles.scss';
import './locoStyles.css';

// Components

import ScrollForMore from "src/components/ScrollForMore";
import Arrow from "src/components/Arrow";


const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Description = () => {
  const scrollRef = createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      scrollFromAnywhere: true,
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <motion.div
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='container'>
        <div className='top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span className="span-first" variants={letter}>V</motion.span>
                <motion.span className="span-first" variants={letter}>i</motion.span>
                <motion.span className="span-first" variants={letter}>c</motion.span>
                <motion.span className="span-first" variants={letter}>t</motion.span>
                <motion.span className="span-first" variants={letter}>o</motion.span>
                <motion.span className="span-first" variants={letter}>r</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span className="span-first" variants={letter}>G</motion.span>
                <motion.span className="span-first" variants={letter}>r</motion.span>
                <motion.span className="span-first" variants={letter}>e</motion.span>
                <motion.span className="span-first" variants={letter}>i</motion.span>
                <motion.span className="span-first" variants={letter}>v</motion.span>
                <motion.span className="span-first" variants={letter}>e</motion.span>
                <motion.span className="span-first" variants={letter}>l</motion.span>
                <motion.span className="span-first" variants={letter}>d</motion.span>
                <motion.span className="span-first" variants={letter}>i</motion.span>
                <motion.span className="span-first" variants={letter}>n</motion.span>
                <motion.span className="span-first" variants={letter}>g</motion.span>
                <motion.span className="span-first" variants={letter}>e</motion.span>
                <motion.span className="span-first" variants={letter}>r</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <motion.div className='bottom-row'
          initial={{
            scale: 1.1,
            width: "524px",
            y:"-28.5vh",
            margin: "auto",
          }}
          animate={{
            scale: 1,
            y: 0,
            width: "100%",
            opacity: 1,
            transition: { delay: 0.3, ...transition }
          }}
          >
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}
                >
                  <motion.img
                    src={ImageProfil}
                    alt='an image'
                    className="description-image"
                    initial={{ scale: 1.0 }}
                    animate={{
                      scale: 2,
                      transition: { delay: 0.2, ...transition },
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </motion.div>
      </div>
      <div className='detailed-information' >
        <div className='container-information' ref={scrollRef}>
          <div className='row'>
            <section className="hero-section">
              {/* <div className="lines-container">
                <div className="line-1" data-scroll data-scroll-speed="1">
                    Time
                  </div>
                  <div className="line-2" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
                    to meet
                  </div>
                  <div className="line-3" data-scroll data-scroll-speed="15" data-scroll-direction="horizontal">
                    a junior developper...
                </div>
              </div> */}
              <div className="help-section" data-scroll data-scroll-speed="25" data-scroll-direction="horizontal">
              Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP -
              </div>
              <div className="presentation" data-scroll data-scroll-speed="1">
                Je m'appelle Victor Greiveldinger <span>&</span> j'ai récemment terminé une formation de développeur Fullstack Javascript avec une spécialité en React <span>,</span>
              </div>
              <div className="presentation" data-scroll data-scroll-speed="1">
                Je recherche aujourd'hui une opportunité de travail <span>Front</span> & <span>Back</span>
              </div>
              <div className="presentation" data-scroll data-scroll-speed="1">
                Motivé <span>+++</span> pour travailler
              </div>
              <div className="cv-section" data-scroll data-scroll-speed="1">Télécharger mon CV <Arrow /></div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;