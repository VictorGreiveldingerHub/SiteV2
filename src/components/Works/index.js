import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from 'src/utils/elementsParam.js';
import ImageSite from 'src/assets/images/img0.jpg';

import './styles.scss';

const Works = () => {
    return (
        <motion.div
            className="works-container"
            initial="initial"
            animate= "in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            Back to 0. Essaie de react-three-fiber
        </motion.div>
    );
};

export default Works;