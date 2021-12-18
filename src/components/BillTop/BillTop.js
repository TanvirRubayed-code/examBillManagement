import React from "react";
import "./BillTop.css";

const BillTop = () => {
  return (
    <div style={{ fontFamily: "kalpurush" }} className="header2 text-center">
      <p>এক্সাম বিল ম্যানেজমেন্ট সিস্টেম</p>
      {new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate()}
    </div>
  );
};

export default BillTop;
