import React from "react";
import CULogo from "../../images/University_of_Chittagong_logo.png";
import AdminLogin from "../AdminLogin/AdminLogin";

import LoginModal from "../LoginModal/LoginModal";
import "./Home.css";
const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [adminModalShow, setAdminModalShow] = React.useState(false);
  return (
    <div>
      <div className="header d-flex">
        <img
          className="ms-2 mt-2"
          style={{ height: "80px" }}
          src={CULogo}
          alt=""
          srcset=""
        />
        <div className="text text-center fs-5 d-flex align-items-center justify-content-center p-2">
          <div>
            <b>চট্টগ্রাম বিশ্ববিদ্যালয়</b>
            <br />
            <small>কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং</small>
          </div>
        </div>
      </div>
      <div className="header2 text-center">
        <b className="billLine">এক্সাম বিল ম্যানেজমেন্ট সিস্টেম</b>
        <p className="billLine">
          {new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate()}
        </p>
      </div>
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
            show={adminModalShow}
            onHide={() => setAdminModalShow(false)}
          ></AdminLogin>
        </div>
      </div>
    </div>
  );
};

export default Home;
