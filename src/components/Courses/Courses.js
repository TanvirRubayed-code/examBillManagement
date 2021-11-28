import React, { Component } from "react";
import "./Courses.css";

const courseStyle = {
  marginTop: "20px",
};

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseId = this.onChangeCourseId.bind(this);
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangeCourseCredit = this.onChangeCourseCredit.bind(this);
    this.onChangeCourseSemester = this.onChangeCourseSemester.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      course_id: "",
      course_name: "",
      course_credit: "",
      course_semester: "",
    };
  }

  onChangeCourseId(e) {
    this.setState({
      course_id: e.target.value,
    });
  }
  onChangeCourseName(e) {
    this.setState({
      course_name: e.target.value,
    });
  }
  onChangeCourseCredit(e) {
    this.setState({
      course_credit: e.target.value,
    });
  }
  onChangeCourseSemester(e) {
    this.setState({
      course_semester: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      course_id: this.state.course_id,
      course_name: this.state.course_name,
      course_credit: this.state.course_credit,
      course_semester: this.state.course_semester,
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


    fetch('http://localhost:8080/examRemunaration/courseInsert.php', { // URL
      body: JSON.stringify(obj), // data you send.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
  })


    this.setState({
      course_id: "",
      course_name: "",
      course_credit: "",
      course_semester: "",
    })
  }

  render() {
    return (
      <div className="coursedashboardstyle">
        <h3>Add New Course to the Database</h3>





        <form onSubmit={this.onSubmit} style={courseStyle}>
          <div className="form-group">
            <label>Course ID</label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_id}
              onChange={this.onChangeCourseId}
              required="true"
            ></input>
          </div>
          <div style={courseStyle} className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_name}
              onChange={this.onChangeCourseName}
              required="true"
            ></input>
          </div>
          <div style={courseStyle} className="form-group">
            <label>Course Credit</label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_credit}
              onChange={this.onChangeCourseCredit}
              required="true"
            ></input>
          </div>
          <div style={courseStyle} className="form-group">
            <label>Course of Semester</label>
            <input
              type="text"
              className="form-control"
              value={this.state.course_semester}
              onChange={this.onChangeCourseSemester}
              required="true"
            ></input>
          </div>
          <div style={courseStyle} className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            ></input>
          </div>
        </form>











        
      </div>
    );
  }
}

export default Courses;
