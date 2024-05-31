import React from "react";

const Text = ({ text, otherProps, ...rest }) => {
  const STYLE = {
    DONE: {
      backgroundColor:"#00FF00",
      color: "white",
    },
    PENDING: {
      backgroundColor: "#FFFF00",
      color: "#333",
    },
    INPROGRESS: {
      backgroundColor: "#0000FF",
      color: "white",
    },
    CANCLE: {
      backgroundColor: "#FF0000",
      color: "#333",
    },
  };

  return (
    <p
      {...otherProps}
      {...rest}
      style={{
        backgroundColor: STYLE[text]?.backgroundColor,
        color: STYLE[text]?.color,
      }}
    >
      {text}
    </p>
  );
};

export default Text;