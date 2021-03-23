import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';


const Settings = () => {
    const dispatch = useDispatch();
    const gradient = useSelector((state) => {
    const { direction, firstColor, lastColor } = state;
    return { background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})`, borderRadius: '20px'};
  });

  return (
    <>
      <div
        id="gradient"
        style={gradient}
      />
      <div className="gradient-buttons">
        <motion.button
          whileHover={{ letterSpacing: ".05em"}}
          whileTap={{ scale: .9}}
          type="button"
          className="direction-btn"
          onClick={() => dispatch({ type: 'CHANGE_DIRECTION_TO_LEFT'})}
        >Gauche</motion.button>
        <motion.button
          whileHover={{ letterSpacing: ".05em"}}
          whileTap={{ scale: .9}}
          type="button"
          className="direction-btn"
          onClick={() => dispatch({ type: 'CHANGE_DIRECTION_TO_RIGHT'})}
        >Droite</motion.button>
      </div>
    </>
  );
};

export default Settings;