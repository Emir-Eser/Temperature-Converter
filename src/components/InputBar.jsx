import React from 'react';

function InputBar({ value, onChange }) {
  return (
    <input
      type="number"
      placeholder="Celsius"
      value={value}
      onChange={onChange}
      className="input-bar"
    />
  );
}

export default InputBar;
