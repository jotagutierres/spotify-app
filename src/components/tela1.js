import React from 'react';
import './tela1.css';
import logo from '../assets/logo spotify.svg';

const Tela1 = ({ handleGetStarted }) => {
  return (
    <div className="tela1">
      <img src={logo} alt="Logo do Spotify" className="logo" />
      <h1>Enjoy listening to music</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.</p>
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Tela1;
