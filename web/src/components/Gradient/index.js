import React from 'react';
import NbColors from './NbColors';
import RandomizeColors from './RandomizeColors';
import Settings from './Settings';
import Display from './Display';

const Gradient = () => {
    return (
        <div>
            <NbColors />
            <RandomizeColors />
            <Display />
            <Settings />
        </div>
    );
};

export default Gradient;