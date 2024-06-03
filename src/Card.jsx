import React from "react";
import Button from "./Button";
import Text from "./Text";

const CustomizedCard = ({ numberItem, statusItem, content }) => (
  <div style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px', flexDirection: 'column', alignItems: 'flex' ,boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
    <div style={{fontWeight:'bold', fontSize:'20px', top:'10px',textAlign: 'left'}}>
      <Text text={numberItem} />
    </div>
    <div style={{textAlign: 'left'}}>
      <Text text={content} />
    </div>
    <Text text={statusItem} />
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
      <Button text="Edit" style={{ color: "#fff", backgroundColor: "#1bb3ce", border: "1px solid #1bb3ce", borderRadius: "3px", padding: '5px 10px' }} />
      <Button text="Delete" style={{ color: "#fff", backgroundColor: "#ff5733", border: "1px solid #ff5733", borderRadius: "3px", padding: '5px 10px' }} />
    </div>
  </div>
);

export default CustomizedCard;