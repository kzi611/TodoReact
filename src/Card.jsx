// CustomizedCard.js
import React from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";
import Text from "./Text";

const CustomizedCard = ({ number, text }) => (
  <div style={{ }}>
    <Card style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>Item {number}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.
        </Card.Text>
        <Text text={text} />
        <Button text="Edit" style={{ color: "#fff", backgroundColor: "#1bb3ce", border: "1px solid #1bb3ce", borderRadius: "3px"}} />
        <Button text="Delete" style={{ color: "#fff", backgroundColor: "#ff5733", border: "1px solid #ff5733", borderRadius: "3px" }} />
      </Card.Body>
    </Card>
  </div>
);

export default CustomizedCard;