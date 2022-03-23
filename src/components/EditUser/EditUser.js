import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./EditUser.css";
const style = {
  marginTop: "20px",
};


export class EditUser extends Component {
  
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: localStorage.getItem("userLogin"),
      teacherB_name: "",
      teacherE_name: "",
      title: "",
      mobile_no: "",
      redirect: false
    };
  }



  componentDidMount() {
    fetch("http://localhost/examBillManagement/src/server/seeUserInfoToEdit.php", {
      // URL
      body: JSON.stringify(this.state.teacher_id), // data you send.
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
      .then((data) =>
        this.setState({
          teacherB_name: data.nameB,
          teacherE_name: data.nameE,
          title: data.title,
          mobile_no: data.mobile,
        })
      );
  }

  notifySuccess() {
    toast.success("Successfully update all user Info.", {
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
    const updatedInfo = {
      tID: localStorage.getItem("userLogin"),
      teacherB_name: this.state.teacherB_name,
      teacherE_name: this.state.teacherE_name,
      title: this.state.title,
      mobile_no: this.state.mobile_no,
    };
    console.log(updatedInfo);
    // http://localhost/examRemunaration/updateInfo.php

    fetch("http://localhost/examBillManagement/src/server/updateInfo.php", {
      // URL
      body: JSON.stringify(updatedInfo), // data you send.
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
    }
    else if(data === 1){
      this.notifySuccess();
      console.log(data);

      
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
            <u>Update user Info</u>
          </h3>

          <form className="form" onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Name (Bangla)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="teacherB_name"
                value={this.state.teacherB_name}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Name (English Capital letter)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="teacherE_name"
                value={this.state.teacherE_name}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Title</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Mobile number</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="mobile_no"
                value={this.state.mobile_no}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <input
                style={{ fontFamily: "monospace" }}
                type="submit"
                value="Update Info"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditUser;
