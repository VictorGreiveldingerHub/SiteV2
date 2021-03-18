import React from 'react';
import { useDispatch } from 'react-redux';

const RandomizeColors = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <button type="button" onClick={() => dispatch({ type: 'RANDOM_FIRST'})}>Premiere couleur aléatoire</button>
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: 'RANDOM_FIRST'});
                    dispatch({ type: 'RANDOM_LAST'})
                }}>2 couleurs aléatoires</button>
            <button type="button" onClick={() => dispatch({ type: 'RANDOM_LAST'})}>Deuxieme couleur aléatoire</button>
        </div>
    );
};

export default RandomizeColors;