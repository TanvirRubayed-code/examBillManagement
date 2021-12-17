import React, { Component } from "react";
import "./Tabulation.css";

const style = {
  marginTop: "20px",
};

export class Tabulation extends Component {
  constructor(props) {
    super(props)

    this.onChangeInTabulation = this.onChangeInTabulation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       tabulation_mem_1:"",
       tabulation_mem_2:"",
       tabulation_mem_3:"",
       gradesheet_writer:"",
       gradesheet_examiner_1:"",
       gradesheet_examiner_2:"",
       scrutiny:"",
       total_examinee:"",

    }
  }

  onChangeInTabulation(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    
    const tabComittee = {
      tabulation_mem_1: this.state.tabulation_mem_1,
      tabulation_mem_2: this.state.tabulation_mem_2,
      tabulation_mem_3: this.state.tabulation_mem_3,
      gradesheet_writer: this.state.gradesheet_writer,
      gradesheet_examiner_1: this.state.gradesheet_examiner_1,
      gradesheet_examiner_2: this.state.gradesheet_examiner_2,
      scrutiny: this.state.scrutiny,
      total_examinee: this.state.total_examinee,

    };

    console.log(tabComittee);
    fetch("http://localhost:8080/examRemunaration/insertTabulationCommittee.php", {
      // URL
      body: JSON.stringify(tabComittee), // data you send.
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
  
  render() {
    return (
      <div>
        <div className="margin">
          <div className="createAdmin">
            <h3>Tabulation & Gredesheet</h3>

            <form className="form" onSubmit={this.onSubmit} style={style}>
              

              <div style={style} className="form-group">
                <label>
                  <b>Tabulation member (1st)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tabulation_mem_1"
                    value={this.state.tabulation_mem_1}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Tabulation member (2nd)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tabulation_mem_2"
                    value={this.state.tabulation_mem_2}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Tabulation member (3rd)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tabulation_mem_3"
                    value={this.state.tabulation_mem_3}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Gradesheet writer</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="gradesheet_writer"
                    value={this.state.gradesheet_writer}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Gradesheed examiner (1st)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="gradesheet_examiner_1"
                    value={this.state.gradesheet_examiner_1}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>
              <div style={style} className="form-group">
                <label>
                  <b>Gradesheed examiner (2nd)</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="gradesheet_examiner_2"
                    value={this.state.gradesheet_examiner_2}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>
              <div style={style} className="form-group">
                <label>
                  <b>Scrutiny</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="scrutiny"
                    value={this.state.scrutiny}
                    onChange={this.onChangeInTabulation}
                  required="true"
                ></input>
              </div>

              <div style={style} className="form-group">
                <label>
                  <b>Total Examinee</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="total_examinee"
                    value={this.state.total_examinee}
                    onChange={this.onChangeInTabulation}
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
      </div>
    );
  }
}

export default Tabulation;
