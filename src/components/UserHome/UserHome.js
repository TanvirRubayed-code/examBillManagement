import React from "react";
import { useHistory } from "react-router";
import BillTop from "../BillTop/BillTop";
import "./UserHome.css";
import propic from "../images/men.jpg";

const userLeftSt = {
  borderRight: "1px solid grey",
  //   marginLeft:'5%'
};

const UserHome = (props) => {
  let history = useHistory();
  const logoutFunc = () => {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  const userInfo = {
    username:''
  }
  userInfo.username = props.username;
  
  if (userInfo.username.length < 1) {
    userInfo.username = sessionStorage.getItem("username");
  }
  const user = JSON.stringify(userInfo);

  if (userInfo.username) {
    fetch("http://localhost:8080/examRemunaration/userData.php", {
      // URL
      body: JSON.stringify(user), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })


  }

  return (
    <div>
      <BillTop></BillTop>

      <div
        style={{ margin: "2% 5%", fontFamily: "Times New Roman" }}
        className="row"
      >
        <div style={userLeftSt} className="col-3">
          <img className="propic" src={propic} alt="" />
          <br />
          <h5>Md. Hanif Seddiqui</h5>
          <p>Professor ,</p>
          <p>Computer Science & Engineering ,</p>
          <p>University of Chittagong</p>
          <br />
          <button onClick={logoutFunc} className="btn btn-danger btn-sm">
            <b style={{ fontFamily: "monospace" }}>Log Out</b>
          </button>
        </div>
        <div className="col-9">
          <table style={{ fontFamily: "Times New Roman" }} class="styled-table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Details Print</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dom</td>
                <td>6000</td>
                <td>
                  <button className="print-button">Print</button>
                </td>
              </tr>
              <tr class="active-row">
                <td>Melissa</td>
                <td>Introduction to Computer Slstems and Computing Agents </td>
                <td>
                  <button className="print-button">Print</button>
                </td>
              </tr>
              <tr>
                <td>Melissa</td>
                <td>5150</td>
                <td>
                  <button className="print-button">Print</button>
                </td>
              </tr>
              <tr class="active-row">
                <td>Melissa</td>
                <td>5150</td>
                <td>
                  <button className="print-button">Print</button>
                </td>
              </tr>
              <tr class="active-row">
                <td>Melissa</td>
                <td>5150</td>
                <td>
                  <button className="print-button">Print</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
