import React, { useState } from 'react';
import './App.css';
import Spreadsheet from './components/Spreadsheet';
import Toolbar from './components/Toolbar';
import FormulaBar from './components/FormulaBar';
import { evaluateFormula } from './utils';

const App = () => {
  const [formula, setFormula] = useState('');

  // Callback function for formula submission
  const handleFormulaSubmit = (newFormula) => {
    setFormula(newFormula);
  };

  return (
    <div className="app">
      <Toolbar />
      <FormulaBar onFormulaSubmit={handleFormulaSubmit} />
      <Spreadsheet formula={formula} />
    </div>
  );
};

export default App;
