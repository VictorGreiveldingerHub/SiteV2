import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NbColors from './NbColors';

const Gradient = () => {
    const gradientstate = useSelector((state) => state.gradient);
    console.log(gradientstate);
    return (
        <div>
            Gradient
            <NbColors />
        </div>
    );
};

export default Gradient;