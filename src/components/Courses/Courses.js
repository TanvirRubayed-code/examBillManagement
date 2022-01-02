import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Courses.css";

const style = {
  marginTop: "20px",
};

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.onChangeInCourse = this.onChangeInCourse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      course_id: "",
      course_name: "",
      course_credit: "",
      course_semester: "",
      course_hour: "",
      course_type: ""
    };
  }

  notifySuccess() {
    toast.success("New Course Added into Database.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyWarning(){
    toast.warning("Course is already added into Database.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  onChangeInCourse(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      course_id: this.state.course_id,
      course_name: this.state.course_name,
      course_semester: this.state.course_semester,
      course_hour: this.state.course_hour,
      course_credit: this.state.course_credit,
      course_type: this.state.course_type
    };

    fetch("http://localhost:8080/examBillManagement/src/server/courseInsert.php", {
      // URL
      body: JSON.stringify(obj), // data you send.
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
      course_id: "",
      course_name: "",
      course_credit: "",
      course_semester: "",
      course_hour: "",
      course_type: ""
    });
  }

  handleNotify(data){
    if(data===0){
      this.notifyWarning();
    }
    else if(data===1){
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
        <div className="createAdmin">
          <h3>Add Course into DATABASE</h3>

          <form className="form" onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Course ID</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="course_id"
                value={this.state.course_id}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Course Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="course_name"
                value={this.state.course_name}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Semester</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="course_semester"
                value={this.state.course_semester}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Hours per week</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="course_hour"
                value={this.state.course_hour}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Course Credit</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="course_credit"
                value={this.state.course_credit}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Course Type</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="course_type"
                value={this.state.course_type}
                onChange={this.onChangeInCourse}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <input style={{fontFamily:"monospace"}}
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

export default Courses;
