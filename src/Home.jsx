import React, { useState } from "react";
import "./style.css";
import jsPDF from "jspdf";

const Home = () => {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleConvertToPDF = () => {
    const doc = new jsPDF();
    doc.text(textInput, 10, 10);
    doc.save("converted-text.pdf");
  };

  return (
    <>
      <div className="converter-container">
        <h1>Text to PDF Converter</h1>
        <textarea
          className="text-input"
          placeholder="Enter your text here..."
          value={textInput}
          onChange={handleTextChange}
        />
        <button className="convert-button" onClick={handleConvertToPDF}>
          Convert to PDF
        </button>
      </div>
    </>
  );
};

export default Home;
