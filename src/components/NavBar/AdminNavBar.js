import React from "react";
import { Sidenav, Nav, } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import DashboardIcon from "@rsuite/icons/Dashboard";
import PeoplesIcon from "@rsuite/icons/Peoples";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import DocPassIcon from "@rsuite/icons/DocPass";
import "./AdminNavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExamActivities from "../ExamActivities/ExamActivities";
import Evaluators from "../Evaluators/Evaluators";
import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";
import ExamCommittee from "../ExamCommittee/ExamCommittee";
import CreateUser from "../CreateUser/CreateUser";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import AdminIcon from '@rsuite/icons/Admin';
import CreateAdmin from "../CreateAdmin/CreateAdmin";


const widthSt = {
  width: "18%",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "600",
};

const AdminNavBar = () => {
  return (
    <>
      <div style={widthSt}>
        <Router>
          <Sidenav
            className="navbardes"
            style={{ marginTop: "50px", marginLeft: "5px" }}
            defaultOpenKeys={["3", "4"]}
            activeKey="1"
          >
            <Sidenav.Body>
              <Nav >
                <Nav.Item
                  className="hover"
                  eventKey="1"
                  icon={<DashboardIcon />}
                >
                  <Link className="texthov" style={linkStyle} to="/dashboard">
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<ExpandOutlineIcon />}
                >
                  <Link
                    className="texthov"
                    style={linkStyle}
                    to="/exam-activities"
                  >
                    Add Exam Activities
                  </Link>
                </Nav.Item>

                <Nav.Item className="hover" eventKey="2" icon={<DocPassIcon />}>
                  <Link className="texthov" style={linkStyle} to="/courses">
                    Add Courses
                  </Link>
                </Nav.Item>
                <Nav.Item className="hover" eventKey="2" icon={<PeoplesIcon />}>
                  <Link
                    className="texthov"
                    style={linkStyle}
                    to="/exam-committee"
                  >
                    Add Exam Committee
                  </Link>
                </Nav.Item>
                <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<UserInfoIcon />}
                >
                  <Link className="texthov" style={linkStyle} to="/evaluators">
                    Add Evaluators
                  </Link>
                </Nav.Item>
                <Nav.Item
                  className="hover"
                  eventKey="1"
                  icon={<AdminIcon />}
                >
                  <Link className="texthov" style={linkStyle} to="/create-admin">
                    Create Admin
                  </Link>
                </Nav.Item>
                

                <Nav.Item
                  className="blank hover block"
                  style={{ height: "300px" }}
                ></Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>

          <Switch>
            <Route exact path="/">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/exam-activities">
              <ExamActivities></ExamActivities>
            </Route>
            <Route path="/evaluators">
              <Evaluators></Evaluators>
            </Route>

            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/exam-committee">
              <ExamCommittee></ExamCommittee>
            </Route>
            <Route path="/create-admin">
              <CreateAdmin></CreateAdmin>
            </Route>
          </Switch>
        </Router>
      </div>

    </>
  );
};

export default AdminNavBar;
