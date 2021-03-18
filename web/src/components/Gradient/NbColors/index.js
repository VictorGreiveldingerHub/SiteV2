import React from 'react';
import { useSelector } from 'react-redux';

const NbColors = () => {
    const nbColors = useSelector((state) => state.nbColors);
    
    let sentence = `couleur généré`;
    if (nbColors > 1) {
        sentence = `couleurs générés`;
    };

    return (
        <div>{nbColors} {sentence}</div>
    );
};

export default NbColors;