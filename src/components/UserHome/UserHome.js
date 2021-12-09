import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const UserHome = () => {
  let history = useHistory();
  const logoutFunc = () => {
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <h1>this is user page</h1>
      <Button onClick={logoutFunc}>Logout</Button>
    </div>
  );
};

export default UserHome;
