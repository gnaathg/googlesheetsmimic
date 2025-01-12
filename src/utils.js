// utils.js

// Basic Math Functions
export const sum = (range, data) => {
    const [start, end] = range;
    let total = 0;
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        total += parseFloat(data[i][j]) || 0;
      }
    }
    return total;
  };
  
  export const average = (range, data) => {
    const [start, end] = range;
    let total = 0;
    let count = 0;
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        const value = parseFloat(data[i][j]);
        if (!isNaN(value)) {
          total += value;
          count++;
        }
      }
    }
    return count > 0 ? total / count : 0;
  };
  
  // Formula Parser (basic version)
  export const evaluateFormula = (formula, data) => {
    if (formula.startsWith('=SUM')) {
      const match = formula.match(/\((.*)\)/);
      if (match) {
        const range = match[1].split(':').map(cell => {
          const [row, col] = cell.split('');
          return [parseInt(row) - 1, parseInt(col) - 1];
        });
        return sum(range, data);
      }
    }
    return formula;
  };
  
  // Data Quality Functions
  export const trim = (value) => value.trim();
  export const toUpper = (value) => value.toUpperCase();
  export const toLower = (value) => value.toLowerCase();
  export const removeDuplicates = (range, data) => {
    const seen = new Set();
    const updatedData = data.map(row => row.filter(cell => {
      if (seen.has(cell)) {
        return false;
      } else {
        seen.add(cell);
        return true;
      }
    }));
    return updatedData;
  };
  
  export const findAndReplace = (range, data, find, replace) => {
    const updatedData = data.map(row => row.map(cell => {
      return cell === find ? replace : cell;
    }));
    return updatedData;
  };
  