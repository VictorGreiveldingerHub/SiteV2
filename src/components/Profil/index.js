import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { imageDetails } from 'src/utils/elementsParam.js';
import ImageProfil from 'src/assets/images/profil.jpg';
import {
  pageVariants,
  pageTransition,
} from 'src/utils/elementsParam.js';

import './styles.scss';

const Profil = ({image}) => {

  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
      <motion.div
        className='container'
        initial="initial"
        animate= "in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className='row-center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
            >
              <div className='frame'>
                <Link to={`/profil/victor-greiveldinger`}>
                  <ProgressiveImage
                    src={ImageProfil}
                    placeholder={ImageProfil}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Victor Greiveldinger'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title-name'>Victor Greiveldinger</div>
              <div className='caracteristique'>
                Développeur Junior
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

export default Profil;