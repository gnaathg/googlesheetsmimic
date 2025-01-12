import React, { useState } from 'react';
import './Spreadsheet.css'; // Add appropriate styles

const Spreadsheet = ({ formula }) => {
  const [data, setData] = useState(Array(10).fill(Array(10).fill(''))); // 10x10 grid

  const handleCellChange = (row, col, value) => {
    const updatedData = [...data];
    updatedData[row][col] = value;
    setData(updatedData);
  };

  const handleFormula = (row, col) => {
    if (formula) {
      // Process the formula here (e.g., replace cell references with values)
      const result = evaluateFormula(formula, data);
      const updatedData = [...data];
      updatedData[row][col] = result;
      setData(updatedData);
    }
  };

  return (
    <div className="spreadsheet">
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    onBlur={() => handleFormula(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
