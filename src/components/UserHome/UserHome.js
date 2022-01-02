import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import BillTop from "../BillTop/BillTop";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import "./UserHome.css";
import propic from "../images/men.jpg";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";
import Footer from "../Footer/Footer";
import EditUser from "../EditUser/EditUser";
import ChangePropic from "../ChangePropic/ChangePropic";
import ChangePassword from "../ChangePassword/ChangePassword";

const userLeftSt = {
  borderRight: "1px solid grey",
};

console.log("%PUBLIC_URL%");

const UserHome = (props) => {
  const [userInformation, setUserInformation] = useState([]);
  const [image, setImage] = useState("");

  let history = useHistory();
  const logoutFunc = () => {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  let username = props.username;
  if (username.length < 1) {
    username = localStorage.getItem("userLogin");
  }
  if (localStorage.getItem("userLogin")) {
    sessionStorage.setItem("username", localStorage.getItem("userLogin"));
  }

  useEffect(() => {
    fetch("http://localhost:8080/examBillManagement/src/server/userData.php", {
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
      .then((data) => setInform(data));
  }, [username]);

  const setInform = (data) => {
    if (data[0].image) {
      setUserInformation(data);
      setImage(data[0]?.image);

      console.log(userInformation);
    }
  };
  console.log(image);
  const i = "61d0c39d00ab0.png";
  console.log(i);

  return (
    <>
      <BrowserRouter>
        <div>
          <BillTop></BillTop>
          <Switch>
            <Route path="/activities/sem-:sem/y-:year">
              <ActivitiesDetails></ActivitiesDetails>
            </Route>
            <Route path="/update-info">
              <EditUser></EditUser>
            </Route>
            <Route path="/change-pic">
              <ChangePropic></ChangePropic>
            </Route>
            <Route path="/change-password">
              <ChangePassword></ChangePassword>
            </Route>

            <div
              style={{ margin: "2% 5%", fontFamily: "Times New Roman" }}
              className="row"
            >
              <div style={userLeftSt} className="col-3">
                {
                  image === '12345678.jpg' ? 
                  <img className="propic" ></img> :
                  image && <img
                  className="propic"
                  src={require(`../../server/images/${image}`).default}
                  alt=""
                />
                }
                <br />
                <h5>{userInformation[0]?.name}</h5>
                <p>{userInformation[0]?.title} ,</p>
                <p>{userInformation[0]?.department} ,</p>
                <p>{userInformation[0]?.university}</p>
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
                  <Dropdown.Item eventKey="2">
                    <Link to="/update-info">
                      <b>Update Info</b>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item eventKey="1">
                    <Link to="/change-pic">
                      <b>Change Profile Pic</b>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">
                    <Link to="/change-password">
                      <b>Change Password</b>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item onClick={logoutFunc} eventKey="3">
                    <b style={{ color: "red" }}>Log Out</b>
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
                    {userInformation[1]?.map((sem) => (
                      <tr>
                        <td>{sem.semester}</td>
                        <td>{sem.examName}</td>
                        <td>{sem.examYear}</td>
                        <td>
                          <Link
                            to={`/activities/sem-${sem.semester}/y-${sem.examYear}`}
                          >
                            <Button className="print-button">Details</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
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
