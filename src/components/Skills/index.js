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
            Skills
        </motion.div>
    );
};

export default Skills;