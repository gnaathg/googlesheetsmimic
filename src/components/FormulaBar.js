import React, { useState } from 'react';

const FormulaBar = ({ onFormulaSubmit }) => {
  const [formula, setFormula] = useState('');

  const handleChange = (e) => setFormula(e.target.value);

  const handleSubmit = () => {
    onFormulaSubmit(formula);
    setFormula(''); // Reset after submission
  };

  return (
    <div className="formula-bar">
      <input
        type="text"
        value={formula}
        onChange={handleChange}
        placeholder="Enter formula"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormulaBar;
