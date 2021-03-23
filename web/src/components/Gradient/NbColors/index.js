import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const NbColors = () => {
    const nbColors = useSelector((state) => state.nbColors);
    
    let sentence = `couleur générée`;
    if (nbColors > 1) {
        sentence = `couleurs générées`;
    };

    return (
        <div className="nbr-colors">{nbColors} {sentence}</div>
    );
};

export default NbColors;