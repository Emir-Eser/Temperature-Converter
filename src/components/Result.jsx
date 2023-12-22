import React from 'react';

function Result({ convertedTemperature }) {
  return (
    <div className="result">
      {convertedTemperature}
    </div>
  );
}

export default Result;
