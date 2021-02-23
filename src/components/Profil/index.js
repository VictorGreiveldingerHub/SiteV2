import React from 'react';
import { motion } from 'framer-motion';

import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';
import ScrollForMore from 'src/components/ScrollForMore';

import './styles.scss';

const Profil = () => {
    return (
        <motion.div
            className="profil-container"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h3>Profil</h3>
            <div>Développeur junior</div>
            <ScrollForMore />
        </motion.div>
    );
};

export default Profil;