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
            y:"-200px",
            margin: "auto",
          }}
          animate={{
            scale: 1,
            y: 0,
            width: "100%",
            opacity: 1,
            transition: { delay: 0.2, ...transition }
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
        <div className='container-information'>
            <section className="hero-section">
              <div className="help-section">Disponible - ASAP</div>
              <div className="presentation-1">
                <div className="presentation-top">
                    <div className="nom">
                      <h4 className="presentation-title">nom</h4>
                      Greiveldinger
                    </div>
                    <div className="prenom">
                      <h4 className="presentation-title">prénom</h4>
                      Victor
                    </div>
                  </div>
                <div className="presentation-mid">
                  <div className="presentation-formation">
                    <div>Issu d'une formation de développeur Fullstack Javascript chez</div>
                    <motion.a
                      href="https://oclock.io/formations/developpeur-web-fullstack-javascript"
                      className="link-to-oclock"
                      target="no_blank"
                      whileHover={{fontWeight: "bolder"}}
                    >O'clock</motion.a>
                  </div>
                </div>
                <div className="presentation-mid2">
                    <div className="naissance">
                      <h4 className="presentation-title">naissance</h4>
                      22 - 11 - 1995
                    </div>
                    <div className="langues">
                      <h4 className="presentation-title">langues</h4>
                      français & anglais
                    </div>
                  </div>
                <div className="presentation-bot">
                    <div className="recherche">
                      <h4 className="presentation-title">recherche</h4>
                      poste de développeur Junior ou stage développeur Front-end / Fullstack
                    </div>
                  </div>
                <div className="presentation-bot2">
                  <div className="mobilité">
                    <h4 className="presentation-title">mobilité</h4>
                    permis B - véhiculé
                  </div>
                  <div className="interet">
                    <h4 className="presentation-title">intêrets</h4>
                    Design - Awwwards - Codrops - nouvelles technologies
                  </div>
                </div>
              </div>
            </section>
        </div>          
    </motion.div>
  );
};

export default Description;