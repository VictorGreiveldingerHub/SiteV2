import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
// import { generateSpanColor } from './utils';

const Display = () => {
  const direction = useSelector((state) => state.direction);
  const firstColor = useSelector((state) => state.firstColor);
  const firstStyle = { color: useSelector((state) => state.firstColor) };
  const lastColor = useSelector((state) => state.lastColor);
  const lastStyle = { color: useSelector((state) => state.lastColor) };

  let arrow = "→";
  if (direction === "270deg") {
    arrow = "←";
  };
  return (
    <div id="colors">
      <span style={firstStyle}>{firstColor}</span> {arrow} <span style={lastStyle}>{lastColor}</span>
    </div>
  );
};

export default Display;