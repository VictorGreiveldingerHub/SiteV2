import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import './styles.scss';

const Profil = () => {
    const pageVariants = useSelector((state) => state.pageVariants);
    const pageTransition = useSelector((state) => state.pageTransition);
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
        </motion.div>
    );
};

export default Profil;