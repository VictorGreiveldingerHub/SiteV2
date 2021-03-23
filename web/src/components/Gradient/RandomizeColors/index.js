import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import './styles.scss';

const RandomizeColors = () => {

    const dispatch = useDispatch();
    return (
        <div className="gradient-buttons">
            <motion.button
                whileHover={{ letterSpacing: ".05em"}}
                whileTap={{ scale: .9}}
                className="btn button-1"
                type="button"
                onClick={() => dispatch({ type: 'RANDOM_FIRST'})}
            >Random First</motion.button>
            <motion.button
                whileHover={{ letterSpacing: ".05em"}}
                whileTap={{ scale: .9}}
                className="btn button-2"
                type="button"
                onClick={() => {
                    dispatch({ type: 'RANDOM_FIRST'});
                    dispatch({ type: 'RANDOM_LAST'})
                }}>Random All
            </motion.button>
            <motion.button
                whileHover={{ letterSpacing: ".05em"}}
                whileTap={{ scale: .9}}
                className="btn button-3"
                type="button"
                onClick={() => dispatch({ type: 'RANDOM_LAST'})}
            >Random Last
            </motion.button>
        </div>
    );
};

export default RandomizeColors;