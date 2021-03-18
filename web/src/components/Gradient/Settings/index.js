import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';


const Settings = () => {
    const dispatch = useDispatch();
    const gradient = useSelector((state) => {
    const { direction, firstColor, lastColor } = state;
    return { background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})` };
  });

  return (
    <div
      id="gradient"
      style={gradient}
    />
  );
};

export default Settings;