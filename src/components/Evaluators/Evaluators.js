import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Evaluators.css";

const style = {
  marginTop: "20px",
};

export class Evaluators extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: "",
      teacherB_name: "",
      teacherE_name: "",
      department: "",
      title: "",
      university: "",
      mobile_no: "",
      email: "",
      password: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  notifySuccess() {
    toast.success("New Teacher Added into Database.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyWarning() {
    toast.warning("Teacher is already added into Database.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const evaluatorInfo = {
      tID: this.state.teacher_id,
      teacherB_name: this.state.teacherB_name,
      teacherE_name: this.state.teacherE_name,
      department: this.state.department,
      title: this.state.title,
      university: this.state.university,
      mobile_no: this.state.mobile_no,
      email: this.state.email,
      password: this.state.password,
    };

    fetch("http://localhost/examBillManagement/src/server/teacherInsert.php", {
      // URL
      body: JSON.stringify(evaluatorInfo), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
    .then(res => res.json())
    .then(data => this.handleNotify(data));

    this.setState({
      teacher_id: "",
      teacherB_name: "",
      teacherE_name: "",
      department: "",
      title: "",
      university: "",
      mobile_no: "",
      email: "",
      password: "",
    });
  }

  handleNotify(data){
    if(data ===0){
      this.notifyWarning();
    }
    else if(data ===1){
      this.notifySuccess();
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
        <div className="margin">
          <div className="evdashboardstyle">
            <h3>Enter Teacher Information</h3>

            <form className="form" onSubmit={this.onSubmit} style={style}>
              <div className="form-group">
                <label>
                  <b>Teacher ID</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="teacher_id"
                  value={this.state.teacher_id}
                  onChange={this.onChange}
                  required="true"
                ></input>
              </div>
              <div style={style} className="form-group">
                <label>
                  <b>Teacher Name(Bangla)</b>
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
                  <b>Teacher Name(English Capital leter)</b>
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
                  <b>Department</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={this.state.department}
                  onChange={this.onChange}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>University Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="university"
                  value={this.state.university}
                  onChange={this.onChange}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Mobile no</b>
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
                <label>
                  <b>Teacher email ID</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required="true"
                ></input>
              </div>
              <div style={style} className="form-group">
                <label>
                  <b>Teacher password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required="true"
                ></input>
              </div>
              <div style={style} className="form-group">
                <input
                  style={{ fontFamily: "monospace" }}
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Evaluators;
