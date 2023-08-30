import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="converter-container">
        <h1>Text to PDF Converter</h1>
        <textarea
          className="text-input"
          placeholder="Enter your text here..."
          //   value={textInput}
          //   onChange={handleTextChange}
        />
        <button
          className="convert-button"
          // onClick={handleConvertToPDF}
        >
          Convert to PDF
        </button>
      </div>
    </>
  );
};

export default Home;
