import React from "react";

import CULogo from "../../images/University_of_Chittagong_logo.png";
import mujiblogo from "../../images/mujib.png";

import "./Home.css";
import { Link, Route } from "react-router-dom";
import App from "../../App";
import UserHome from "../UserHome/UserHome";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";
const Home = () => {
  return (
    <div>

      <div className="header d-flex">
        <a href="/">
          <img
            className="cuLogo"
            style={{ height: "75px" }}
            src={CULogo}
            alt=""
            srcset=""
          />
        </a>

        <div style={{fontFamily:'kalpurush'}} className="text text-center fs-5 d-flex align-items-center justify-content-center p-2">
          <div>
            <h3>চট্টগ্রাম বিশ্ববিদ্যালয়</h3>
            <p>কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং</p>
          </div>
        </div>
        <div>
          <img className="mujiblogo" src={mujiblogo} alt="" />
        </div>
      </div>

      <div className="forstyle"></div>
    </div>
  );
};

export default Home;
