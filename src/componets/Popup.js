import { Span } from "next/dist/trace";
import React from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <Span onClick={onClose}>&times</Span>
      <p>Popup Content</p>
    </div>
  );
};

export default Popup;
