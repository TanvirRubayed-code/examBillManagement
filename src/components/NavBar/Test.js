import React from "react";
import { Sidenav, Nav, Dropdown, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Icon, } from '@rsuite/icons';
import GearIcon from '@rsuite/icons/Gear';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import DashboardIcon from '@rsuite/icons/Dashboard';
import PeoplesIcon from '@rsuite/icons/Peoples';

import {
  FaCamera as FaCameraIcon,
  FaReact as FaReactIcon,
  FaAddressBook as FaAddressBookIcon,
  FaSpinner as FaSpinnerIcon,
} from 'react-icons/fa';

const Test = () => {
  return (
    <div style={{ width: 240 }}>
        
        <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<PeoplesIcon />}>
            User Group
          </Nav.Item>
          <Dropdown eventKey="3" title="Advanced">
            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
          </Dropdown>
          <Dropdown eventKey="4" title="Settings" >
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>




    </div>
  );
};

export default Test;


{/* <br /><br /><br /><br />


<Button appearance="primary"> Hello world </Button>
<br />
<GearIcon spin style={{ fontSize: '2em' }} />
<SpinnerIcon pulse style={{ fontSize: '2em' }} />
<br /><br /><br /><br />
<Icon as={FaSpinnerIcon} pulse size="2em" />
<Icon as={FaCameraIcon} size="2em" />
<Icon as={FaReactIcon} size="2em" style={{ color: "#61dafb" }} />
<Icon as={FaAddressBookIcon} size="2em" /> */}