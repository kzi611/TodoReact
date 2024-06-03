import React from "react";
import CustomizedCard from "./Card"; 
import Header from "./Header"; 
import Footer from "./Footer";

export function App() {
  const LIST_ITEM = [
    { numberItem: "Item 1",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.", statusItem: "DONE" },
    { numberItem: "Item 2", 
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.", statusItem: "PENDING" },
    { numberItem: "Item 3", 
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.", statusItem: "IN PROGRESS" },
    { numberItem: "Item 4", 
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.", statusItem: "IN PROGRESS" },
    { numberItem: "Item 5", 
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.", statusItem: "IN PROGRESS" },
    { numberItem: "Item 6", 
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",   statusItem: "CANCEL" }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        padding: "10px"
      }}
    >
      <Header backgroundColor="#333" textColor="#fff"/>
      <div style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', marginTop: '80px'}}>
        {LIST_ITEM.map((item, index) => (
          <CustomizedCard key={index} numberItem={item.numberItem} content={item.content} statusItem={item.statusItem}/>
        ))}
      </div>
      <Footer backgroundColor="#333" textColor="#fff"/>
    </div>
  );
}