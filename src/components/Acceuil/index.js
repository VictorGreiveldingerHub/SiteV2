// Import npm
import React from 'react';
import { motion } from 'framer-motion';

import MenuNav from 'src/components/MenuNav';

// Import Styles
import './styles.scss';

const Acceuil = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    return (
        <div className="acceuil-container">
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
                animate={{width : "5vw"}}
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
            </div>
            <div className="nbr-folio">
                <div>00<span style={{color: 'red', opacity: '0.7'}}>2</span></div>
            </div>
            {/* <MenuNav /> */}
            {/* <div className="contact">contact</div>
            <div className="localisation">
                <div>Metz</div>
                <div>france</div>
            </div>
            <div className="count-div">introduction</div>
            <div className="fast-summary">
                <ul className="list-fast-summary">
                    <li className="item-fast-summary">Intro</li>
                    <li className="item-fast-summary">Profil</li>
                    <li className="item-fast-summary">Works</li>
                    <li className="item-fast-summary">Compétences</li>
                </ul>
            </div>
            <div className="year">2021</div> */}
        </div>
    );
};

export default Acceuil;