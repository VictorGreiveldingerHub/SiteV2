// Imports Npm
import React, { useEffect, useRef, createRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { Block, useBlock } from "src/components/Works/Block";
import lerp from "lerp";

// Imports personnals files
import state from "src/components/Works/stateTest.js";
import './styles.scss';

////////////////////// Composants à déplacer dans des dossiers distincts plus tard
const Plane = ({ color = "white", ...props }) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};
  
const Cross = () => {
  const ref = useRef();
  const { viewportHeight } = useBlock();

  useFrame(() => {
    const curTop = state.top.current
    const curY = ref.current.rotation.z
    const nextY = (curTop / ((state.pages - 1) * viewportHeight * state.zoom)) * Math.PI
    ref.current.rotation.z = lerp(curY, nextY, 0.1)
  });
  return (
    <group ref={ref} scale={[2, 2, 2]}>
      <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
      <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
    </group>
  );
};
  
const Content = ({ left, children }) => {
  const { contentMaxWidth, canvasWidth, margin } = useBlock();
  const aspect = 1.75;
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2;
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="black" />
      {children}
    </group>
  );
};
  
const Stripe = () => {
  const { contentMaxWidth } = useBlock()
  return (
    <Plane
      scale={[100, contentMaxWidth, 1]}
      rotation={[0, 0, Math.PI / 4]}
      position={[0, 0, -1]}
      color="#e3f6f5"
    />
  );
};
///////////////////////****************** */

const Works = () => {

  const scrollArea = useRef();
  const onScroll = e => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
      <>
        <Canvas 
          colorManagement={false}
          orthographic
          camera={{
            zoom: state.zoom,
            position: [10, 10, 500]
          }}
        >
          <Block factor={1.5} offset={0}>
            <Content left />
          </Block>
          <Block factor={2.0} offset={1}>
            <Content />
          </Block>
          <Block factor={2.0} offset={3}>
            <Content />
          </Block>
          <Block factor={-1.0} offset={1}>
            <Stripe />
          </Block>
          <Block factor={1.5} offset={2}>
            <Content left>
              <Block factor={-0.5}>
              </Block>
            </Content>
          </Block>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
      </>
  );
};

export default Works;