import React from 'react';
import NbColors from './NbColors';
import RandomizeColors from './RandomizeColors';

const Gradient = () => {
    return (
        <div>
            <RandomizeColors />
            <NbColors />
        </div>
    );
};

export default Gradient;