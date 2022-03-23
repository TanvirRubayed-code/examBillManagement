import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
const style = {
  marginTop: "20px",
};

export class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      current_pass: "",
      new_pass: "",
      confirm_pass: "",
    };
  
}

notifySuccess() {
    toast.success("Successfully Change password.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyCheck() {
    toast.warning("Please check confirm password.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  notifyInvalid() {
    toast.error("Invalid current password.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }





  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const pass = {
      tid: localStorage.getItem("userLogin"),
      current_pass: this.state.current_pass,
      new_pass: this.state.new_pass,
      confirm_pass: this.state.confirm_pass,
    };

    // http://localhost/examRemunaration/changePassword.php

    fetch("http://localhost/examBillManagement/src/server/changePassword.php", {
      // URL
      body: JSON.stringify(pass), // data you send.
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
      .then((data) => this.handleNotify(data));
  }
  handleNotify(data) {
    if (data === 0) {
        this.notifyInvalid();
    } else if (data === 1) {
        this.notifySuccess();
        sessionStorage.clear();
        localStorage.clear();
    } else if (data === 2) {
        this.notifyCheck();
    }
  }

  render() {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="width70 ">
          <a href="/">
            <button
              style={{
                borderRadius: "2px",
                padding: "2px 8px",
                margin: "4px 4px",
              }}
              className="btn-primary"
            >
              Back
            </button>
          </a>

          <h3 className="text-center">
            <u>Change Password</u>
          </h3>

          <form className="form" onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Current Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                name="current_pass"
                value={this.state.current_pass}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>New Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                name="new_pass"
                value={this.state.new_pass}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                name="confirm_pass"
                value={this.state.confirm_pass}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <input
                style={{ fontFamily: "monospace" }}
                type="submit"
                value="Update Password"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ChangePassword;
