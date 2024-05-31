// App.js
import React, { useEffect, useState } from "react";
import CustomizedCard from "./Card"; 
import Header from "./Header"; 
import Footer from "./Footer";

export function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const LIST_ITEM = ["1", "2", "3", "4", "5", "6"];
  const LIST_STATUS = ["DONE", "PENDING", "INPROGRESS", "CANCLE"];

  // Set default text to Green on mount
  useEffect(() => {
    setText("DONE");
  }, []);

  // Log text when count changes
  useEffect(() => {
    console.log({ text });
  }, [count]);

  const randomText = () => {
    const randomIndex = Math.floor(Math.random() * LIST_STATUS.length);
    return LIST_STATUS[randomIndex];
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Header backgroundColor="#333" textColor="#fff"/>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          paddingTop: "100px",
        }}
      >
        {LIST_ITEM.map((number) => (
          <CustomizedCard key={number} number={number} text={randomText()}/>
        ))}
      </div>
      <Footer backgroundColor="#333" textColor="#fff"/>
    </div>
  );
}