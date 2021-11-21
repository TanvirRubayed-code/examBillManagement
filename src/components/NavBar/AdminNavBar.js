import React from "react";
import { Sidenav, Nav, Dropdown, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import {  Icon, } from '@rsuite/icons';
import DashboardIcon from '@rsuite/icons/Dashboard';
import PeoplesIcon from '@rsuite/icons/Peoples';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import DocPassIcon from '@rsuite/icons/DocPass';
import "./AdminNavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExamActivities from "../ExamActivities/ExamActivities";
import Evaluators from "../Evaluators/Evaluators";
import Courses from "../Courses/Courses";
import Dashboard from "../Dashboard/Dashboard";
import ExamCommittee from "../ExamCommittee/ExamCommittee";


const AdminNavBar = () => {
  const linkStyle = {
    textDecoration: "none",

  }
    return (
        <div style={{ width: 240 }}>
        
        <Router>
        <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
          <Link style={linkStyle} to="/dashboard">Dashboard</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<ExpandOutlineIcon />}>
          <Link style={linkStyle} to="/exam-activities">Add Exam Activities</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<UserInfoIcon />}>
          <Link style={linkStyle} to="/evaluators">Add Evaluators</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<DocPassIcon />}>
          <Link style={linkStyle} to="/courses">Add Courses</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
          <Link style={linkStyle} to="/exam-committee">Add Exam Committee</Link>
          </Nav.Item>
          <Nav.Item className="blank" style={{height:"300px"}}>
           
          </Nav.Item>
          
          
        </Nav>
      </Sidenav.Body>
    </Sidenav>

    <Switch >
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
    </Switch>

    </Router>

    </div>
    );
};

export default AdminNavBar;