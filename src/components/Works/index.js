import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import ImageSite from 'src/assets/images/img0.jpg';

import Box from 'src/components/Works/Box';

import './styles.scss';

const Works = () => {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0,0,120], fov: 70}}
            gl
        >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    );
};

export default Works;