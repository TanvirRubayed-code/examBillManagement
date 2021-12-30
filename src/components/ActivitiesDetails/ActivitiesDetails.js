import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import TeacherPanel from "../TeacherPanel/TeacherPanel";
import "./ActivitiesDetails.css";

const ActivitiesDetails = () => {
  let componentRef = useRef();
  return (
    <div className="main">
        <Link to='/'><Button className="backbutton">Back</Button></Link>
        <ReactToPrint
          trigger={() => <Button className="printbutton">Print</Button>}
          content={() => componentRef}
        />
      <div className="buttonprint">
        
        <TeacherPanel ref={(el) => (componentRef = el)} />
      </div>
      <div></div>
    </div>
  );
};

export default ActivitiesDetails;
