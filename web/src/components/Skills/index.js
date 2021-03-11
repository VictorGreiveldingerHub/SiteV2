import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';

// import ScrollForMore from 'src/components/ScrollForMore';

const Skills = () => {
    return (
        <motion.div
            className="profil-container"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <section className="global-section">
                <h3>Soft</h3>
                <div>Utilisation de Git, Github, Discord, VsCode</div>
            </section>
            <section className="frontend-section">
                <h3>Front-end</h3>
                <div>Utilisation du HTML5, CSS3, Javascript, React</div>
            </section>
            <section className="backend-section">
                <h3>Back-end</h3>
                <div>Utilisation de NodeJs, Express</div>
            </section>
        </motion.div>
    );
};

export default Skills;