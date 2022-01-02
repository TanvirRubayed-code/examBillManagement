import React from "react";
import CULogo from "../../images/cu logo white.png";
import "./Footer.css";

import FacebookIcon from '@material-ui/icons/Facebook';
import Youtube from '@material-ui/icons/YouTube';


const Footer = () => {
  return (
    <>
      <div className="footerback">
        <table>
          <tr>
            <td
              style={{
                fontFamily:'Times New Roman',
                border: "none",
                width: "50vw",
                textAlign: "center",
                color: "white",
              }}
            >
              <img
                style={{ marginBottom: "10px", width: "55px" }}
                src={CULogo}
                alt="CU logo"
              />
              <h3 className="text-danger">
                <strong>University Of Chittagong</strong>
              </h3>
              <div style={{marginTop:'5px'}}>
              <a style={{marginRight:'25px'}} href="https://www.facebook.com/ictcu" target='_blank' rel="noreferrer"><FacebookIcon></FacebookIcon></a>
              <a href="https://www.youtube.com/channel/UClQg__wc5h3uW_YHSD-iMbg" target='_blank' rel="noreferrer"><Youtube></Youtube></a>
              </div>
            </td>
            <td
              style={{
                width: "50vw",
                textAlign: "center",
                color: "white",
                border: "none",
                fontFamily:'Times New Roman',
              }}
            >
              <h3 className="text-danger">
                <strong>Contact</strong>
              </h3>
              <b>ICT Cell Help Desk</b>
              <br />
              <b>01555555140, 01555555141, 01556570077</b>
              <br />
              <b>Email: admission@cu.ac.bd</b>
              <br />
              <b>Working Hour: 9.00AM - 9.00PM</b>
              <br />
              <b>Location: ICT Cell, IT Building, University of Chittagong</b>
              <br />
              <b>Official SMS: 01708404777, 01841644355</b>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ textAlign: "center",paddingBottom:'10px',fontFamily:'monospace',backgroundColor:'#212121',color:'lightgray' }}>
        <small>
          {" "}
          &copy; University of Chittagong. All Rights Reserved | Powered by: ICT
          Cell
        </small>
      </div>
    </>
  );
};

export default Footer;
