import React,{ useEffect, useState, createRef } from "react";
import { motion } from "framer-motion";
import locomotiveScroll from "locomotive-scroll";
import ImageProfil from 'src/assets/images/profil.jpg';
import './styles.scss';
import './locoStyles.css';

// Components

import ScrollForMore from "src/components/ScrollForMore";


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
          // initial={{
          //   scale: 1.1,
          //   width: "524px",
          //   y:"-28.5vh",
          //   margin: "auto",
          // }}
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
              <div
                className="help-section"
                data-scroll
                data-scroll-speed="40"
                data-scroll-direction="horizontal"
              >
              Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP -
              </div>
              <section className="presentation-section">
                <div className="presentation-1" data-scroll data-scroll-speed="5" data-scroll-direction="vertical">
                  Je m'appelle Victor Greiveldinger & j'ai récemment terminé une formation de développeur Fullstack Javascript avec une spécialité en React. Je recherche aujourd'hui une <span>opportunité de travail</span> en tant que stagiaire ou développeur Junior à Metz et au Luxembourg.
                </div>
                <div className="container-personnal">
                  <div className="personnals" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
                    22-11-1995
                  </div>
                  <div className="personnals" data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">
                    <span>Metz - Luxembourg <br/></span>
                    <span>Permis B</span>
                  </div>
                  <div className="personnals" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
                    <span>Français : maternelle <br/></span>
                    <span>Anglais : Niveau B2</span> 
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;