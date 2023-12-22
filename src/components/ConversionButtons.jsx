import React from 'react';

function ConversionButtons({ onKelvinClick, onFahrenheitClick }) {
  return (
    <div className="button-container">
      <button onClick={onKelvinClick} className="conversion-button">
        Kelvin
      </button>
      <button onClick={onFahrenheitClick} className="conversion-button">
        Fahrenheit
      </button>
    </div>
  );
}

export default ConversionButtons;
