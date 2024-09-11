import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'; // Icons for dark and light mode
import './ToggleButton.css';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? <BsFillSunFill className="icon" /> : <BsFillMoonFill className="icon" />}
    </button>
  );
};

export default Toggle;

