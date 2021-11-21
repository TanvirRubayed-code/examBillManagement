import React from "react";
import AdminLogin from "../AdminLogin/AdminLogin";
import BillTop from "../BillTop/BillTop";

import LoginModal from "../LoginModal/LoginModal";

const LoginPage = (props) => {
  // props[0].setLoggedIn= true;
  console.log(props.setLoggedIn);
  console.log(props.isLoggedIn);

  const [modalShow, setModalShow] = React.useState(false);
  const [adminModalShow, setAdminModalShow] = React.useState(false);

  return (
    <>
      <BillTop></BillTop>
      <div className="mt-5 pt-5 d-flex justify-content-center">
        <div className="me-5 pe-5">
          <h3 style={{ color: "#198754" }}>Teacher</h3>
          <button
            style={{ width: "100px" }}
            type="button"
            class="me-5 btn btn-success"
            onClick={() => setModalShow(true)}
          >
            Log In
          </button>

          <LoginModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          ></LoginModal>
        </div>
        <div className="md-5 pd-5">
          <h3 style={{ marginLeft: "7px", color: "#dc3545" }}>Admin</h3>
          <button
            onClick={() => setAdminModalShow(true)}
            style={{ width: "100px" }}
            type="button"
            class="btn btn-danger"
          >
            Log In
          </button>

          <AdminLogin
            isLoggedIn={props.isLoggedIn} setLoggedIn={props.setLoggedIn}
            setHomeAction={props.setHomeAction}
            show={adminModalShow}
            onHide={() => setAdminModalShow(false)}
          ></AdminLogin>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
