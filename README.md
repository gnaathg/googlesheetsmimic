# Google Sheets Mimic Web Application

## Overview
This web application mimics Google Sheets, providing users with an interface that allows basic spreadsheet functionalities. It supports mathematical functions, data quality operations, and more, all while adhering to a similar interface to Google Sheets.

## Features
- **Spreadsheet Interface**: Dynamic grid with row/column adjustments, drag and drop, and cell editing.
- **Mathematical Functions**: SUM, AVERAGE, MAX, MIN, COUNT.
- **Data Quality Functions**: TRIM, UPPER, LOWER, REMOVE_DUPLICATES, FIND_AND_REPLACE.
- **Cell Formatting**: Bold, italics, font size, and color options.
- **Testing**: Users can input and test formulas with live results.
- **Bonus Features**: Ability to save/load spreadsheets, add more functions, and future enhancements for data visualization.

## Tech Stack
- **React**: For building the UI components.
- **CSS**: For styling the spreadsheet grid and components.
- **React DnD**: For drag-and-drop functionality.
- **Chart.js** (optional): For future data visualization.

## How to Run
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open in the browser at `http://localhost:3000`

## Folder Structure
- `/src/components`: Contains React components for the toolbar, formula bar, and spreadsheet.
- `/src/utils`: Helper functions for math operations, formula evaluation, etc.
- `/src/App.js`: Main App file integrating all components.

