import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import BillTop from "../BillTop/BillTop";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import "./UserHome.css";
import ReactToPrint from "react-to-print";
import propic from "../images/men.jpg";
import TeacherPanel from "../TeacherPanel/TeacherPanel";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";
import Footer from "../Footer/Footer";

const userLeftSt = {
  borderRight: "1px solid grey",
  //   marginLeft:'5%'
};

const UserHome = (props) => {
  const [userInformation, setUserInformation] = useState([]);

  let componentRef = useRef();

  let history = useHistory();
  const logoutFunc = () => {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  let username = props.username;
  if (username.length < 1) {
    username = sessionStorage.getItem("username");
  }

  useEffect(() => {
    fetch("http://localhost:8080/examRemunaration/userData.php", {
      // URL
      body: JSON.stringify(username), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
      .then((res) => res.json())
      .then((data) => setUserInformation(data[0]));
  }, [username]);


  console.log(userInformation);


  return (
    <>
      <BrowserRouter>
        <div>
          <BillTop></BillTop>
          <Switch>
            <Route path="/activities-details">
              <ActivitiesDetails></ActivitiesDetails>
            </Route>

            <div
              style={{ margin: "2% 5%", fontFamily: "Times New Roman" }}
              className="row"
            >
              <div style={userLeftSt} className="col-3">
                <img className="propic" src={propic} alt="" />
                <br />
                <h5>{userInformation?.name}</h5>
                <p>{userInformation?.title} ,</p>
                <p>{userInformation?.department} ,</p>
                <p>{userInformation?.university}</p>
                <br />

                <DropdownButton
                  as={ButtonGroup}
                  key="end"
                  id={`dropdown-button-drop-end`}
                  drop="end"
                  variant="danger"
                  title="Settings"
                  style={{ fontFamily: "monospace" }}
                >
                  <Dropdown.Item eventKey="1">
                    <b>Change Profile Pic</b>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <b>Edit Info</b>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logoutFunc} eventKey="3">
                    <b>Log Out</b>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="col-9">
                <table
                  style={{ fontFamily: "Times New Roman" }}
                  class="styled-table"
                >
                  <thead>
                    <tr>
                      <th>Semester No</th>
                      <th>Exam Name</th>
                      <th>Exam Year</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1st</td>
                      <td>1st semester BSc Engineering</td>
                      <td>2021</td>
                      <td>
                        <Button className="print-button">Details</Button>
                      </td>
                    </tr>
                    <tr class="active-row">
                      <td>2nd</td>
                      <td>2nd semester BSc Engineering</td>
                      <td>2020</td>
                      <td>
                        <Link to="/activities-details">
                          <Button className="print-button">Details</Button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3rd</td>
                      <td>3rd semester BSc Engineering</td>
                      <td>2020</td>
                      <td>
                        <button className="print-button">Details</button>
                      </td>
                    </tr>
                    <tr class="active-row">
                      <td>4th</td>
                      <td>4th semester BSc Engineering</td>
                      <td>2021</td>
                      <td>
                        <button className="print-button">Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default UserHome;
