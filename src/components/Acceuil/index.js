// Import npm
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

// Import d'éléments annexes
import MenuNav from 'src/components/MenuNav';
import {
    variants,
    rectangleDisapear,
    imageTransition,
    imageVariants
} from 'src/utils/elementsParam.js';

// Import Styles
import './styles.scss';

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
        <div>
            <motion.div className="acceuil-container" initial="initial"
                animate= "in"
                exit="out"
                variants={imageVariants}
                transition={imageTransition}
            />
            <motion.div
                className="lastname"
                animate={{ x: 100}}
                transition={{ ease: "easeIn", delay: 0.2 }}
            >Greiveldinger</motion.div>
            <motion.div
                className="firstname"
                animate={{y : -100}}
                transition={{ ease: "easeIn", delay: 0.2 }}
            >
                Victor
            </motion.div>
            <motion.div
                className="line-disapear"
                animate={{width : "0%"}}
                transition={{ ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
                className="line-display"
                animate={{width : "3.5vw"}}
                transition={{ ease: "easeIn", delay: 0.2 }}
            />
            <motion.div
                className="info"
                initial="hidden"
                animate="visible"
                variants={variants}
            >developpeur junior</motion.div>
            <motion.div className="web-mobile">web & web mobile</motion.div>
            <div className="folio">
                folio
                <motion.div
                style={{
                    position: "absolute",
                    opacity: "0.7",
                    height: "2px",
                    background: "rgb(53, 53, 53)",
                    top: "1.3vh",
                    left: "-6vw",
                }}
                animate={{width : "5vw"}}
                transition={{ ease: "easeIn", delay: 0.2 }}
            />
            </div>
            { rectangleValue && (
                <motion.div variants={rectangleDisapear} initial="hidden" animate="visible">
                    <motion.div className="rectangle-1" animate={{width: "20vw", x: 250}} transition={{ease: "easeIn", duration: 1 ,delay: 1}}/>
                    <motion.div className="rectangle-2"  animate={{width: "20vw", x: 250}} transition={{ease: "easeIn", duration: 1 ,delay: 2}}/>
                    <motion.div className="rectangle-3"  animate={{width: "20vw", x: 250}} transition={{ease: "easeIn", duration: 1 ,delay: 3}}/>
                </motion.div>   
            )}
            { !rectangleValue && (
                <>
                <motion.div className="nbr-folio" variants={rectangleDisapear} initial="hidden" animate="visible">002</motion.div>
                <MenuNav />
                <motion.div className="contact" >contact</motion.div>
                <motion.div className="localisation">
                    <div>Metz</div>
                    <div>france</div>
                </motion.div>
                <motion.div className="count-div" >introduction</motion.div>
                <motion.div className="year" >2021</motion.div>
                </>
            )}
            {/* <div className="fast-summary">
                <ul className="list-fast-summary">
                    <li className="item-fast-summary">Intro</li>
                    <li className="item-fast-summary">Profil</li>
                    <li className="item-fast-summary">Works</li>
                    <li className="item-fast-summary">Compétences</li>
                </ul>
            </div> */}
        </div>
    );
};

export default Acceuil;