import React from 'react';
import "./BillTop.css";

const BillTop = () => {
    return (
        <div className="header2 text-center">
        <b className="billLine">এক্সাম বিল ম্যানেজমেন্ট সিস্টেম</b>
        <p className="billLine">
          {new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate()}
        </p>
      </div>
    );
};

export default BillTop;