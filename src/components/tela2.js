import React from 'react';
import { Link } from 'react-router-dom';
import './tela2.css';
import logo from '../assets/logo spotify.svg';
import darkModeImage from '../assets/dark mode.png';
import lightModeImage from '../assets/light mode.png';

const Tela2 = () => {
  return (
    <div className="tela2">
      <img src={logo} alt="Logo do Spotify" className="logo" />
      <h1>Choose mode</h1>

      <div className="button-container">
        <div className="image-container">
          <img src={darkModeImage} alt="dark mode" className="button-image" />
          <h2 className="image-title">Dark</h2>
        </div>

        <div className="image-container">
          <img src={lightModeImage} alt="light mode" className="button-image" />
          <h2 className="image-title">Light</h2>
        </div>
      </div>

      <button className="get-started-button">
        Continue
      </button>
    </div>
  );
};

export default Tela2;
