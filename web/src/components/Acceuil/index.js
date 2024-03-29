// Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

// Import d'éléments annexes
import {
    rectangleDisapear,
    imageTransition,
    imageVariants
} from 'src/utils/elementsParam.js';

// Import Styles
import './styles.scss';

const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };

const ville = {
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
  
  const pays = {
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
        y: 20,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
  };

const rectanglesTransition1 = {
    ease: "easeIn",
    delay: 0,
    duration: 2,
};
const rectanglesTransition2 = {
    ease: "easeIn",
    delay: 1,
    duration: 2,
};
const rectanglesTransition3 = {
    ease: "easeIn",
    delay: 2,
    duration: 2,
};

const Acceuil = () => {

// Pour le controle sur les rectangles et l'affichage des chiffres
    const rectangleValue = useSelector((state) => state.rectangleValue);
    const dispatch = useDispatch();

// Pour cacher les rectangles après quelques secondes et éviter d'avoir un effet visuel non désiré
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'HIDE_RECTANGLE'})
        }, 5200
        );
    });

    return (
        <div style={{height: "100vh"}}>
            <motion.div
                className="acceuil-container"
                initial="initial"
                animate= "in"
                exit={{ transition: .5 }}
                variants={imageVariants}
                transition={imageTransition}
            />
            <motion.div
                className="lastname"
                animate={{ x: 100}}
                transition={{ delay: 1.5 }}
            > Greiveldinger
                <motion.div
                    className="line-disapear"
                    animate={{width : "0%"}}
                    transition={{ ease: "easeOut", delay: 2.5, duration: 1 }}
                />
            </motion.div>
            <motion.div
                className="firstname"
                animate={{y : -100}}
                transition={{ ease: "easeIn", delay: 1.5 }}
            >
                Victor
                <motion.div
                    className="line-display"
                    animate={{width : "20%"}}
                    transition={{ ease: "easeIn", delay: 2.5, duration: 1 }}
                />
            </motion.div>
            <motion.div
                className="info"
                initial="hidden"
                animate="visible"
                variants={rectangleDisapear}
                transition={{duration: 1}}
            > developpeur junior
            </motion.div>
            <motion.div
                className="web-mobile"
                initial="hidden"
                animate="visible"
                variants={rectangleDisapear}
                transition={{duration: 2}}
            > web & web mobile
            </motion.div>
            <motion.div className='localisation'>
              <motion.span className='ville' variants={ville}>
                <motion.span className="span-v" variants={letter}>M</motion.span>
                <motion.span className="span-v" variants={letter}>e</motion.span>
                <motion.span className="span-v" variants={letter}>t</motion.span>
                <motion.span className="span-v" variants={letter}>z</motion.span>
              </motion.span>
              <motion.span className='pays' variants={pays}>
                <motion.span className="span-v" variants={letter}>F</motion.span>
                <motion.span className="span-v" variants={letter}>r</motion.span>
                <motion.span className="span-v" variants={letter}>a</motion.span>
                <motion.span className="span-v" variants={letter}>n</motion.span>
                <motion.span className="span-v" variants={letter}>c</motion.span>
                <motion.span className="span-v" variants={letter}>e</motion.span>
              </motion.span>
            </motion.div>
            <motion.div
                className="folio"
                initial="hidden"
                animate="visible"
                variants={rectangleDisapear}
                transition={{duration: 3}}
            >
                folio
                <motion.div
                    className="line-folio"
                    animate={{width : "4em"}}
                    transition={{ ease: "easeIn", delay: 0.5, duration: 2 }}
                />
                { !rectangleValue && (
                    <motion.div
                        className="nbr-folio"
                        variants={rectangleDisapear}
                        initial={{opacity: 0}}
                        animate={{ opacity: 1}}
                    >
                        002
                    </motion.div>  
                )}
            </motion.div>
            { rectangleValue && (
                <div>
                    <motion.div className="rectangle-1" animate={{width: [0, 100, 200], x: [0, 300]}} transition={rectanglesTransition1}/>
                    <motion.div className="rectangle-2" animate={{width: [0, 100, 200], x: [0, 300]}} transition={rectanglesTransition2}/>
                    <motion.div className="rectangle-3" animate={{width: [0, 100, 200], x: [0, 300]}} transition={rectanglesTransition3}/>
                </div>   
            )}
            { !rectangleValue && (
                <>
                    <motion.div className="year" variants={rectangleDisapear} initial={{opacity: 0}} animate={{ opacity: 1}}>2021</motion.div>
                </>
            )}
        </div>
    );
};

export default Acceuil;