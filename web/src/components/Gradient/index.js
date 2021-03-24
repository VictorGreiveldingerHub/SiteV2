import React from 'react';

import NbColors from './NbColors';
import RandomizeColors from './RandomizeColors';
import Settings from './Settings';
import Display from './Display';

import './styles.scss';

const Gradient = () => {
    return (
        <div className="gradient-container">
            <NbColors />
            <RandomizeColors />
            <Display />
            <Settings />
        </div>
    );
};

export default Gradient;