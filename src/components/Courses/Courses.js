import React, { Component } from "react";
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

    console.log(obj);
    // axios.post('http://localhost:8080/examRemunaration/courseInsert.php', obj)
    //   .then(res => console.log(res.data));

    // const API_PATH = "http://localhost:8080/examRemunaration/courseInsert.php";

    // axios({
    //   method: 'POST',
    //   url: `${API_PATH}`,
    //   headers: { 'content-type': 'application/json' },
    //   data: obj
    // })
    //   .then(result => {
    //     this.setState({
    //       mailSent: result.data.sent
    //     })
    //   })
    //   .catch(error => this.setState({ error: error.message }));

    fetch("http://localhost:8080/examRemunaration/courseInsert.php", {
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
    });

    this.setState({
      course_id: "",
      course_name: "",
      course_credit: "",
      course_semester: "",
      course_hour: "",
      course_type: ""
    });
  }

  render() {
    return (
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
                type="text"
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
                type="text"
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
                type="text"
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
    );
  }
}

export default Courses;
