import React from 'react';

const Toolbar = ({ onBold, onItalic, onFontSizeChange, onColorChange }) => {
  return (
    <div className="toolbar">
      <button onClick={onBold}><b>B</b></button>
      <button onClick={onItalic}><i>I</i></button>
      <button onClick={() => onFontSizeChange('20px')}>Font Size 20</button>
      <input type="color" onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
};

export default Toolbar;
