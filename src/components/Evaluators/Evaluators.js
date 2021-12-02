import React, { Component } from "react";

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
      email: "",
      password: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();
    const evaluatorInfo = {
      tID : this.state.teacher_id,
      teacherB_name : this.state.teacherB_name,
      teacherE_name : this.state.teacherE_name,
      department : this.state.department,
      title : this.state.title,
      email : this.state.email,
      password : this.state.password,
    };
    console.log(evaluatorInfo);

    fetch('http://localhost:8080/examRemunaration/teacherInsert.php', { // URL
      body: JSON.stringify(evaluatorInfo), // data you send.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
  })


  this.setState({
    teacher_id:"",
    teacherB_name:"",
    teacherE_name:"",
    department:"",
    title:"",
    email:"",
    password:""
  })




  }

  render() {
    return (
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
                <b>Teacher Name(English CP leter)</b>
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
                <b>Department of Teacher</b>
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

export default Evaluators;
