// Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import d'éléments annexes
import MenuNav from 'src/components/MenuNav';
import {
    rectangleDisapear,
    imageTransition,
    imageVariants
} from 'src/utils/elementsParam.js';

// Import Styles
import './styles.scss';


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
                exit={{
                    transition: .5,
                }}
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
            >
                developpeur junior
            </motion.div>
            <motion.div
                className="web-mobile"
                initial="hidden"
                animate="visible"
                variants={rectangleDisapear}
                transition={{duration: 2}}
            >
                web & web mobile
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
                    <motion.div className="contact" variants={rectangleDisapear} initial={{opacity: 0}} animate={{ opacity: 1}}>
                        <Link to="/contact">contact</Link>
                    </motion.div>
                    <motion.div className="year" variants={rectangleDisapear} initial={{opacity: 0}} animate={{ opacity: 1}}>2021</motion.div>
                </>
            )}
        </div>
    );
};

export default Acceuil;