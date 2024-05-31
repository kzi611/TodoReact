import React from 'react';

const Header = ({ backgroundColor, textColor }) => {
  return (
    <header style={{ backgroundColor: backgroundColor, position: "fixed", top: 0, width: "100%"}}>
      <h1 style={{color: textColor}}>TO DO APP UI</h1>
    </header>
  );
};

export default Header;
