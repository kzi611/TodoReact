import React from "react";

const Text = ({ text }) => {
  const STYLE = {
    "DONE": {
      backgroundColor: "#00FF00",
      color: "white",
    },
    "PENDING": {
      backgroundColor: "#FFFF00",
      color: "#333",
    },
    "IN PROGRESS": {
      backgroundColor: "#0000FF",
      color: "white",
    },
    "CANCEL": {
      backgroundColor: "#FF0000",
      color: "#333",
    },
  };

  return (
    <p
      style={{
        ...STYLE[text],
        margin: '5px 0',
        width: '100%'
      }}
    >
      {text}
    </p>
  );
};

export default Text;