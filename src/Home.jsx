import React, { useState } from "react";
import "./style.css";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleConvertToPDF = () => {
    if (!textInput) {
      toast.error(`Please Enter something`, {
        position: "top-right",
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const doc = new jsPDF();
      doc.text(textInput, 10, 10);
      doc.save("converted-text.pdf");
      console.log("file downloaded");
    }
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
      <ToastContainer />
    </>
  );
};

export default Home;
