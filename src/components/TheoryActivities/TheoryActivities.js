import React, { Component } from 'react';


import './TheoryActivities.css';

const style = {
    marginTop: "20px",
  };
  


  export class TheoryActivities extends Component {

    constructor(props) {
      super(props)

    this.onChangeInTheoryAct = this.onChangeInTheoryAct.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
      this.state = {
        course_id:"",
        first_question_setter:"",
        second_question_setter:"",
        time_of_exam:"",
        question_type:"",
        tutorial_question_setter:"",
        number_of_tutorial:"",
        tutorial_examiner:"",
        total_examinee_tutorial:"",
        first_theory_examiner:"",
        second_theory_examiner:"",
        number_of_paper:"",
        question_writer:"",
        question_photocopier:"",

     }

    }
    
    onChangeInTheoryAct(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    
    onSubmit(e){
      e.preventDefault();
      
      const theoryAct = {
        course_id: this.state.course_id,
        first_question_setter: this.state.first_question_setter,
        second_question_setter: this.state.second_question_setter,
        time_of_exam: this.state.time_of_exam,
        question_type: this.state.question_type,
        tutorial_question_setter: this.state.tutorial_question_setter,
        number_of_tutorial: this.state.number_of_tutorial,
        tutorial_examiner: this.state.tutorial_examiner,
        total_examinee_tutorial: this.state.total_examinee_tutorial,
        first_theory_examiner: this.state.first_theory_examiner,
        second_theory_examiner: this.state.second_theory_examiner,
        number_of_paper: this.state.number_of_paper,
        question_writer: this.state.question_writer,
        question_photocopier: this.state.question_photocopier,
  
      };



      fetch("http://localhost:8080/examRemunaration/theoryActivities.php", {
      // URL
      body: JSON.stringify(theoryAct), // data you send.
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
        <h3>Theory Exam Activities</h3>

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
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>First Question Setter</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="first_question_setter"
                value={this.state.first_question_setter}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Second Question Setter</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="second_question_setter"
                value={this.state.second_question_setter}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Time of Exam</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="time_of_exam"
                value={this.state.time_of_exam}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Question type (Half/Full)</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="question_type"
                value={this.state.question_type}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Tutorial Question Setter</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="tutorial_question_setter"
                value={this.state.tutorial_question_setter}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Number of Tutorial</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="number_of_tutorial"
                value={this.state.number_of_tutorial}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Turorial Examiner</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="tutorial_examiner"
                value={this.state.tutorial_examiner}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Total Examinee in Tutorial</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="total_examinee_tutorial"
                value={this.state.total_examinee_tutorial}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>First Theory Examiner</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="first_theory_examiner"
                value={this.state.first_theory_examiner}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>
          <div style={style} className="form-group">
            <label>
              <b>Second Theory Examiner</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="second_theory_examiner"
                value={this.state.second_theory_examiner}
                onChange={this.onChangeInTheoryAct}
              required="true"
            ></input>
          </div>

          <div style={style} className="form-group">
            <label>
              <b>Number of paper</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="number_of_paper"
                value={this.state.number_of_paper}
                onChange={this.onChangeInTheoryAct}
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
                onChange={this.onChangeInTheoryAct}
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
                onChange={this.onChangeInTheoryAct}
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

export default TheoryActivities;