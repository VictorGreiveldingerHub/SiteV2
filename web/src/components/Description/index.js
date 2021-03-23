import React from "react";
import { motion } from "framer-motion";
import ImageProfil from 'src/assets/images/profil.jpg';
import './styles.scss';

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
            scale: 1,
            width: "524px",
            y:"-27.5vh",
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
      {/* <div className='detailed-information' >
        <div className='container-information'>
          <div className='row'>
            <section className="hero-section">
              <div
                className="help-section"
                
              >
              Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP - Disponible ASAP -
              </div>
              <section className="presentation-section">
                <div className="presentation-1">
                  Je m'appelle Victor Greiveldinger & j'ai récemment terminé une formation de développeur Fullstack Javascript avec une spécialité en React. Je recherche aujourd'hui une <span>opportunité de travail</span> en tant que stagiaire ou développeur Junior à Metz et au Luxembourg.
                </div>
                <div className="container-personnal">
                  <div className="personnals" >
                    22-11-1995
                  </div>
                  <div className="personnals">
                    <span>Metz - Luxembourg <br/></span>
                    <span>Permis B</span>
                  </div>
                  <div className="personnals">
                    <span>Français : maternelle <br/></span>
                    <span>Anglais : Niveau B2</span> 
                  </div>
                </div>
              </section>
            </section>
          </div>
          
        </div> 
      </div>*/}
    </motion.div>
  );
};

export default Description;