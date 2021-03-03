import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ImageProfil from 'src/assets/images/profil.jpg';
import {imageDetails} from 'src/utils/elementsParam.js';
import './styles.scss';
//Components
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
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
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
              <motion.div className='birth'>
                <span>22 novembre 1995</span>
              </motion.div>
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
          initial={{opacity: 0}}
          animate={{
            width: "100%",
            y: "28%",
            opacity: 1,
            transition: { delay: 0.2, ...transition }
          }}
          >
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                // initial={{
                //   y: "-50%",
                //   width: imageDetails.width,
                //   height: imageDetails.height,
                // }}
                // animate={{
                //   y: 0,
                //   width: "100%",
                //   height: window.innerWidth > 1440 ? 800 : 400,
                //   transition: { delay: 0.2, ...transition },
                // }}
                className='thumbnail-single'
              >
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
                      y: "10vh",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </motion.div>
      </div>
      <div className='detailed-information'>
        <div className='container-information'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <section className="hero-section">
              <div className="lines-container">
                <div className="line-1">
                  Time
                </div>
                <div className="line-2">
                  to meet
                </div>
                <div className="line-3">
                  a junior developper.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;