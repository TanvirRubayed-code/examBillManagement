import React, { Component } from "react";
import "./LabActivities.css";

const style = {
  marginTop: "20px",
};

export class LabActivities extends Component {

  constructor(props) {
    super(props)
  
    this.onChangeInLab = this.onChangeInLab.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       course_id:"",
       practical_question_setter:"",
       practical_paper_examiner:"",
       practical_examinee:"",
       question_writer:"",
       question_photocopier:"",
       viva_examiner1:"",
       viva_examiner2:"",
       viva_examiner3:"",
       viva_examiner4:"",
       viva_examiner5:"",
       viva_examiner6:"",
       practical_notebook_examiner:"",
       total_notebook:"",
       project_examiner1:"",
       project_examiner2:"",
       total_examinee_project:"",

    }
  }
  
  onChangeInLab(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    
    const labAct = {
      course_id: this.state.course_id,
      practical_question_setter: this.state.practical_question_setter,
      practical_paper_examiner: this.state.practical_paper_examiner,
      practical_examinee: this.state.practical_examinee,
      question_writer: this.state.question_writer,
      question_photocopier: this.state.question_photocopier,
      viva_examiner1: this.state.viva_examiner1,
      viva_examiner2: this.state.viva_examiner2,
      viva_examiner3: this.state.viva_examiner3,
      viva_examiner4: this.state.viva_examiner4,
      viva_examiner5: this.state.viva_examiner5,
      viva_examiner6: this.state.viva_examiner6,
      practical_notebook_examiner: this.state.practical_notebook_examiner,
      total_notebook: this.state.total_notebook,
      project_examiner1: this.state.project_examiner1,
      project_examiner2: this.state.project_examiner2,
      total_examinee_project: this.state.total_examinee_project,

    };
    
    fetch("http://localhost:8080/examRemunaration/labActivities.php", {
      // URL
      body: JSON.stringify(labAct), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    });

    


  }



  render(){
    return (
      <div className="margin">
        <div className="createAdmin">
          <h3>Lab Exam Activities</h3>
  
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
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Practical Question Setter</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="practical_question_setter"
                  value={this.state.practical_question_setter}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Practical Paper Examiner</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="practical_paper_examiner"
                  value={this.state.practical_paper_examiner}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Total Practical Examinee</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="practical_examinee"
                  value={this.state.practical_examinee}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Question Writer</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="question_writer"
                  value={this.state.question_writer}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Question Photocopier</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="question_photocopier"
                  value={this.state.question_photocopier}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (1st)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner1"
                  value={this.state.viva_examiner1}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (2nd)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner2"
                  value={this.state.viva_examiner2}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (3rd)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner3"
                  value={this.state.viva_examiner3}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (4th)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner4"
                  value={this.state.viva_examiner4}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (5th)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner5"
                  value={this.state.viva_examiner5}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Viva Examiner (6th)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="viva_examiner6"
                  value={this.state.viva_examiner6}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Practical Notebook Examiner</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="practical_notebook_examiner"
                  value={this.state.practical_notebook_examiner}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Total Notebook</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="total_notebook"
                  value={this.state.total_notebook}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Project Examiner (1st)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="project_examiner1"
                  value={this.state.project_examiner1}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Project Examiner (2nd)</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="project_examiner2"
                  value={this.state.project_examiner2}
                  onChange={this.onChangeInLab}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Total Examinee in Project</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="total_examinee_project"
                  value={this.state.total_examinee_project}
                  onChange={this.onChangeInLab}
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
  }
};

export default LabActivities;
