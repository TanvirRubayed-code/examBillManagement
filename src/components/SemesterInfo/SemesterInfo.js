import React, { Component } from "react";
import "./SemesterInfo.css";

const style = {
  marginTop: "20px",
};

export class SemesterInfo extends Component  {
  constructor(props) {
    super(props)

    this.onChangeInSemInfo = this.onChangeInSemInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      meeting_no: "",
      meeting_date: "",
      year_of_semester: "",
      sem_1_5: "",
      start_date_1: "",
      end_date_1: "",
      sem_2_6: "",
      start_date_2: "",
      end_date_2: "",
      sem_3_7: "",
      start_date_3: "",
      end_date_3: "",
      sem_4_8: "",
      start_date_4: "",
      end_date_4: "",
    };
  }


  onChangeInSemInfo(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    console.log('clicked')


    const semInfo = {
      meeting_no: this.state.meeting_no,
      meeting_date: this.state.meeting_date,
      year_of_semester:this.state.year_of_semester,
      sem_1_5: this.state.sem_1_5,
      start_date_1: this.state.start_date_1,
      end_date_1: this.state.end_date_1,
      sem_2_6: this.state.sem_2_5,
      start_date_2: this.state.start_date_2,
      end_date_2: this.state.end_date_2,
      sem_3_7: this.state.sem_3_7,
      start_date_3: this.state.start_date_3,
      end_date_3: this.state.end_date_3,
      sem_4_8: this.state.sem_4_8,
      start_date_4: this.state.start_date_4,
      end_date_4: this.state.end_date_4,
    };


    fetch("http://localhost:8080/examRemunaration/insertExamInfo.php", {
      // URL
      body: JSON.stringify(semInfo), // data you send.
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
      meeting_no: "",
      meeting_date: "",
      year_of_semester: "",
      sem_1_5: "",
      start_date_1: "",
      end_date_1: "",
      sem_2_5: "",
      start_date_2: "",
      end_date_2: "",
      sem_3_7: "",
      start_date_3: "",
      end_date_3: "",
      sem_4_8: "",
      start_date_4: "",
      end_date_4: "",
    });

  }
  



  render(){
    return (
      <div className="margin">
        <div className="createAdmin">
          <h3>Semester exam Meeting</h3>
  
          <form className="form"  onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Meeting No</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="meeting_no"
                value={this.state.meeting_no}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Meeting Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="meeting_date"
                value={this.state.meeting_date}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Year of semester exam</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="year_of_semester"
                value={this.state.year_of_semester}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Semester number</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="sem_1_5"
                value={this.state.sem_1_5}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="start_date_1"
                value={this.state.start_date_1}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam End Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="end_date_1"
                value={this.state.end_date_1}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Semester number</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="sem_2_5"
                value={this.state.sem_2_5}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="start_date_2"
                value={this.state.start_date_2}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam End Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="end_date_2"
                value={this.state.end_date_2}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Semester number</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="sem_3_7"
                value={this.state.sem_3_7}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="start_date_3"
                value={this.state.start_date_3}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam End Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="end_date_3"
                value={this.state.end_date_3}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Semester number</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="sem_4_8"
                value={this.state.sem_4_8}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="start_date_4"
                value={this.state.start_date_4}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam End Date</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="end_date_4"
                value={this.state.end_date_4}
                onChange={this.onChangeInSemInfo}
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
  }

export default SemesterInfo;
