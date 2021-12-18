import React from "react";
import { Sidenav, Nav, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import DashboardIcon from "@rsuite/icons/Dashboard";
import PeoplesIcon from "@rsuite/icons/Peoples";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import DocPassIcon from "@rsuite/icons/DocPass";
import "./AdminNavBar.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Evaluators from "../Evaluators/Evaluators";
import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";
import ExamCommittee from "../ExamCommittee/ExamCommittee";
import { useHistory } from "react-router-dom";
import AdminIcon from "@rsuite/icons/Admin";
import CreateAdmin from "../CreateAdmin/CreateAdmin";
import SemesterInfo from "../SemesterInfo/SemesterInfo";
import Tabulation from "../Tabulation/Tabulation";
import TheoryActivities from "../TheoryActivities/TheoryActivities";
import LabActivities from "../LabActivities/LabActivities";
import RemunerationRate from "../RemunerationRate/RemunerationRate";


const widthSt = {
  width: "18%",
  fontFamily:"Times New Roman"
};

const activeStyle={
  color:'#cc2900',

  textDecoration:'underline'
  
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "600",
};

const AdminNavBar = () => {
  let history = useHistory();
  const logoutFunc = () => {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
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
              <Nav>
                <Nav.Item
                  className="hover"
                  eventKey="1"
                  icon={<DashboardIcon />}
                >
                  <NavLink className="texthov" 
                  activeStyle={activeStyle}
                  style={linkStyle} to="/dashboard">
                    Dashboard
                  </NavLink>
                </Nav.Item>
                <Nav.Item className="hover" eventKey="1" icon={<AdminIcon />}>
                  <NavLink
                    className="texthov"
                    style={linkStyle}
                    activeStyle={activeStyle}
                    to="/create-admin"
                  >
                    Create Admin
                  </NavLink>
                </Nav.Item>

                <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<UserInfoIcon />}
                >
                  <NavLink
                   activeStyle={activeStyle}
                   className="texthov" style={linkStyle} to="/evaluators">
                    Add new Evaluators
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="hover" eventKey="2" icon={<DocPassIcon />}>
                  <NavLink 
                   activeStyle={activeStyle}
                  className="texthov" style={linkStyle} to="/courses">
                    Add new Courses
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="hover" eventKey="2" icon={<ExpandOutlineIcon />}>
                  <NavLink
                   activeStyle={activeStyle}
                  className="texthov" style={linkStyle} to="/exam-info">
                    Semester exam Meeting
                  </NavLink>
                </Nav.Item>

                

                <Nav.Item className="hover" eventKey="2" icon={<PeoplesIcon />}>
                  <NavLink
                    className="texthov"
                    activeStyle={activeStyle}
                    style={linkStyle}
                    to="/exam-committee"
                  >
                    Add Exam Committee
                  </NavLink>
                </Nav.Item>

                <Nav.Item className="hover" eventKey="2" icon={<PeoplesIcon />}>
                  <NavLink
                    className="texthov"
                    activeStyle={activeStyle}
                    style={linkStyle}
                    to="/tabulation-members"
                  >
                  Tabulation Members
                  </NavLink>
                </Nav.Item>

                <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<DocPassIcon />}
                >
                  <NavLink
                    className="texthov"
                    activeStyle={activeStyle}
                    style={linkStyle}
                    to="/theory-activities"
                  >
                  Theory Exam Activities
                  </NavLink>
                </Nav.Item>

                <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<DocPassIcon />}
                >
                  <NavLink
                    className="texthov"
                    activeStyle={activeStyle}
                    style={linkStyle}
                    to="/lab-activities"
                  >
                  Lab Exam Activities
                  </NavLink>
                </Nav.Item>

                {/* <Nav.Item
                  className="hover"
                  eventKey="2"
                  icon={<DocPassIcon />}
                >
                  <NavLink
                    className="texthov"
                    activeStyle={activeStyle}
                    style={linkStyle}
                    to="/remuneration"
                  >
                  Remuneration Rate
                  </NavLink>
                </Nav.Item> */}

                <Nav.Item className="logout" eventKey="1">
                  <Button onClick={logoutFunc} color="red" appearance="primary">
                    <b style={{fontFamily:"monospace"}}>Log out</b>
                  </Button>
                </Nav.Item>

                
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
            <Route path="/theory-activities">
              <TheoryActivities></TheoryActivities>
            </Route>
            <Route path="/lab-activities">
              <LabActivities></LabActivities>
            </Route>
            <Route path="/evaluators">
              <Evaluators></Evaluators>
            </Route>

            <Route path="/exam-info">
              <SemesterInfo></SemesterInfo>
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
            <Route path="/tabulation-members">
              <Tabulation></Tabulation>
            </Route>
            <Route path="/remuneration">
              <RemunerationRate></RemunerationRate>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default AdminNavBar;
