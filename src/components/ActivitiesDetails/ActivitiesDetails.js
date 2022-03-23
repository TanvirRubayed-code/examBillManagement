import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import TeacherPanel from "../TeacherPanel/TeacherPanel";
import "./ActivitiesDetails.css";

const ActivitiesDetails = () => {
  const [activity, setActivity] = useState({})
  const {sem,year} = useParams();

  const obj = {
    semester:sem,
    exam_year:year,
    username:sessionStorage.getItem('username')
  }

// http://localhost/examRemunaration/activitiesDetails.php

useEffect(() => {
  fetch("http://localhost/examBillManagement/src/server/activitiesDetails.php", {
    // URL
    body: JSON.stringify(obj), // data you send.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // *manual, follow, error
    referrer: "no-referrer", // *client, no-referrer
  })
  .then(res => res.json())
  .then(data => setActivity(data));
}, []);




  let componentRef = useRef();
  return (
    <div className="main">
        <Link to='/'><Button className="backbutton">Back</Button></Link>
        <ReactToPrint
          trigger={() => <Button className="printbutton">Print</Button>}
          content={() => componentRef}
        />
      <div className="buttonprint">
        
        <TeacherPanel data = {activity} ref={(el) => (componentRef = el)} />
      </div>
      <div></div>
    </div>
  );
};

export default ActivitiesDetails;
