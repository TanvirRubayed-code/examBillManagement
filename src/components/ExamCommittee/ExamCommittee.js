import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Examcommittee.css";

const style = {
  marginTop: "20px",
};

export class ExamCommittee extends Component {
  constructor(props) {
    super(props)

    this.onChangeInCommittee = this.onChangeInCommittee.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       teacher_name:"",
       teacher_title:"",
       semester:""
    }
  }
  notifySuccess() {
    toast.success("Exam Committee member Added into Database.", {
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
    toast.warning("Exam Committee added earlier .", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  onChangeInCommittee(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const comittee = {
      teacher_name: this.state.teacher_name,
      teacher_title: this.state.teacher_title,
      semester: this.state.semester,

    };
    

    fetch("http://localhost/examBillManagement/src/server/insertExamCommittee.php", {
      // URL
      body: JSON.stringify(comittee), // data you send.
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
      teacher_name: "",
      teacher_title: "",
      semester: "",

    });


  }

  handleNotify(data){
    if(data ===0){
      this.notifyWarning();
    }
    else if(data===1){
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
          <h3>Exam Committee</h3>
  
          <form className="form" onSubmit={this.onSubmit} style={style}>

          <div className="form-group">
              <label>
                <b>Semester</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="semester"
                  value={this.state.semester}
                  onChange={this.onChangeInCommittee}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Teacher Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="teacher_name"
                  value={this.state.teacher_name}
                  onChange={this.onChangeInCommittee}
                required="true"
              ></input>
            </div>
  
            <div style={style} className="form-group">
              <label>
                <b>Title in Committee</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="teacher_title"
                  value={this.state.teacher_title}
                  onChange={this.onChangeInCommittee}
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
};

export default ExamCommittee;
