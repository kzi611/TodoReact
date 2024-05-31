import React from 'react';

const Footer = ({ backgroundColor, textColor }) => {
  return (
    <footer style={{ backgroundColor: backgroundColor, position: "fixed", bottom: 0, width: "100%" }}>
      <h1 style={{color: textColor}}>2024</h1>
    </footer>
  );
};

export default Footer;