import React, { useState } from 'react';

function MarcoPolo() {
  const [displayText, setDisplayText] = useState('Marco');
  const [buttonText, setButtonText] = useState('Polo');

  const toggleText = () => {
    if (displayText === 'Marco') {
      setDisplayText('Polo');
      setButtonText('Marco');
    } else {
      setDisplayText('Marco');
      setButtonText('Polo');
    }
  };

  return (
    <div>
      <h1 id="marco-polo">{displayText}</h1>
      <button id="marco-polo-toggler" onClick={toggleText}>
        {buttonText}
      </button>
    </div>
  );
}

export default MarcoPolo;
