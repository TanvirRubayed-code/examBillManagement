import React from "react";
import "./SemesterInfo.css";

const style = {
  marginTop: "20px",
};

const SemesterInfo = () => {
  return (
    <div className="margin">
      <div className="createAdmin">
        <h3>Add Course into DATABASE</h3>

        <form className="form" style={style}>
          <div className="form-group">
            <label>
              <b>Course ID</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="course_id"
            //   value={this.state.course_id}
            //   onChange={this.onChangeInCourse}
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
            //   value={this.state.course_name}
            //   onChange={this.onChangeInCourse}
              required="true"
            ></input>
          </div>
          

          <div style={style} className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SemesterInfo;
