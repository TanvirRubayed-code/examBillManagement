import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
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
      exam_name1:"",
      start_date_1: "",
      end_date_1: "",
      sem_2_6: "",
      exam_name2:"",
      start_date_2: "",
      end_date_2: "",
      sem_3_7: "",
      exam_name3:"",
      start_date_3: "",
      end_date_3: "",
      sem_4_8: "",
      exam_name4:"",
      start_date_4: "",
      end_date_4: "",
    };
  }


  notifySuccess() {
    toast.success("Semester Info Added into Database.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyError() {
    toast.error("Entered Invalid Meeting Date.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  onChangeInSemInfo(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();


    const semInfo = {
      meeting_no: this.state.meeting_no,
      meeting_date: this.state.meeting_date,
      year_of_semester:this.state.year_of_semester,
      sem_1_5: this.state.sem_1_5,
      exam_name1:this.state.exam_name1,
      start_date_1: this.state.start_date_1,
      end_date_1: this.state.end_date_1,
      sem_2_6: this.state.sem_2_6,
      exam_name2:this.state.exam_name2,
      start_date_2: this.state.start_date_2,
      end_date_2: this.state.end_date_2,
      sem_3_7: this.state.sem_3_7,
      exam_name3:this.state.exam_name3,
      start_date_3: this.state.start_date_3,
      end_date_3: this.state.end_date_3,
      sem_4_8: this.state.sem_4_8,
      exam_name4:this.state.exam_name4,
      start_date_4: this.state.start_date_4,
      end_date_4: this.state.end_date_4,
    };

    console.log(semInfo);


    fetch("http://localhost:8080/examBillManagement/src/server/insertExamInfo.php", {
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
    })
    .then(res => res.json())
    .then(data => this.handleNotify(data));




    this.setState({
      meeting_no: "",
      meeting_date: "",
      
      year_of_semester: "",
      sem_1_5: "",
      exam_name1:"",
      start_date_1: "",
      end_date_1: "",
      sem_2_6: "",
      exam_name2:"",
      start_date_2: "",
      end_date_2: "",
      sem_3_7: "",
      exam_name3:"",
      start_date_3: "",
      end_date_3: "",
      sem_4_8: "",
      exam_name4:"",
      start_date_4: "",
      end_date_4: "",
    });

  }
  
  handleNotify(data){
    if(data ===0){
      this.notifyError();
    }
    else if(data ===1){
      this.notifySuccess();
    }
  }



  render(){
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
          <h3>Semester exam Meeting</h3>
  
          <form className="form"  onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Meeting No</b>
              </label>
              <input
                type="number"
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
                type="date"
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
                type="number"
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
                type="number"
                className="form-control"
                name="sem_1_5"
                value={this.state.sem_1_5}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Name</b>
              </label>
              <input
                placeholder="1st semester BSc Engineering"
                type="text"
                className="form-control"
                name="exam_name1"
                value={this.state.exam_name1}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>

            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="date"
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
                type="date"
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
                type="number"
                className="form-control"
                name="sem_2_6"
                value={this.state.sem_2_6}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Name</b>
              </label>
              <input
                placeholder="1st semester BSc Engineering"
                type="text"
                className="form-control"
                name="exam_name2"
                value={this.state.exam_name2}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="date"
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
                type="date"
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
                type="number"
                className="form-control"
                name="sem_3_7"
                value={this.state.sem_3_7}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Name</b>
              </label>
              <input
                placeholder="1st semester BSc Engineering"
                type="text"
                className="form-control"
                name="exam_name3"
                value={this.state.exam_name3}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="date"
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
                type="date"
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
                type="number"
                className="form-control"
                name="sem_4_8"
                value={this.state.sem_4_8}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Name</b>
              </label>
              <input
                placeholder="1st semester BSc Engineering"
                type="text"
                className="form-control"
                name="exam_name4"
                value={this.state.exam_name4}
                onChange={this.onChangeInSemInfo}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Exam Start Date</b>
              </label>
              <input
                type="date"
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
                type="date"
                className="form-control"
                name="end_date_4"
                value={this.state.end_date_4}
                onChange={this.onChangeInSemInfo}
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
  };
  }

export default SemesterInfo;
