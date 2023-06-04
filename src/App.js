import React, { useState } from 'react';
import Tela1 from './components/tela1';
import Tela2 from './components/tela2';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const [showTela2, setShowTela2] = useState(false);

  const handleGetStarted = () => {
    setShowTela2(true);
  };

  return (
    <BrowserRouter>
    <div className="app">
      {showTela2 ? (
        <Tela2 />
      ) : (
        <Tela1 handleGetStarted={handleGetStarted} />
      )}
    </div>
        </BrowserRouter>
  );
};

export default App;
