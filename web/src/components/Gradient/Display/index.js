import React from 'react';
import { useSelector } from 'react-redux';
// import { generateSpanColor } from './utils';

const Display = () => {
  const firstColor = useSelector((state) => state.firstColor);
  const firstStyle = { color: useSelector((state) => state.firstColor) };
  const lastColor = useSelector((state) => state.lastColor);
  const lastStyle = { color: useSelector((state) => state.lastColor) };

  return (
    <div id="colors">
      <span style={firstStyle}>{firstColor}</span> → <span style={lastStyle}>{lastColor}</span>
    </div>
  );
};

export default Display;