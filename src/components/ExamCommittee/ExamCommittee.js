import React, { Component } from "react";
import axios from "axios";
import "./Examcommittee.css";

const courseStyle = {
    marginTop: "6 px",
};

export class Courses extends Component {
    constructor(props) {
        super(props);

        this.onChangeExamcomID = this.onChangeExamcomID.bind(this);
        this.onChangeExamcomName = this.onChangeExamcomName.bind(this);
        this.onChangeExamcomTitle = this.onChangeExamcomTitle.bind(this);
        this.onChangeExamcomMeetingDate = this.onChangeExamcomMeetingDate.bind(this);
        this.onChangeExamcomMeetingNum = this.onChangeExamcomMeetingNum.bind(this);
        this.onChangeExamStartDate = this.onChangeExamStartDate.bind(this);
        this.onChangeExamEndDate = this.onChangeExamEndDate.bind(this);
        this.onChangeSemesterID = this.onChangeSemesterID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            examcom_ID: "",
            examcom_name: "",
            examcom_title: "",
            examcom_meetingdate: "",
            examcom_meetingnum: "",
            exam_startdate: "",
            exam_enddate: "",
            semester_id: ""
        };
    }

    onChangeExamcomID(e) {
        this.setState({
            examcom_ID: e.target.value,
        });
    }
    onChangeExamcomName(e) {
        this.setState({
            examcom_name: e.target.value,
        });
    }
    onChangeExamcomTitle(e) {
        this.setState({
            examcom_title: e.target.value,
        });
    }
    onChangeExamcomMeetingDate(e) {
        this.setState({
            examcom_meetingdate: e.target.value,
        });
    }
    onChangeExamcomMeetingNum(e) {
        this.setState({
            examcom_meetingnum: e.target.value,
        });
    }
    onChangeExamStartDate(e) {
        this.setState({
            exam_startdate: e.target.value,
        });
    }
    onChangeExamEndDate(e) {
        this.setState({
            exam_enddate: e.target.value,
        });
    }
    onChangeSemesterID(e) {
        this.setState({
            semester_id: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            examcom_ID: this.state.examcom_ID,
            examcom_name: this.state.examcom_name,
            examcom_title: this.state.examcom_title,
            examcom_meetingdate: this.state.examcom_meetingdate,
            examcom_meetingnum: this.state.examcom_meetingnum,
            exam_startdate: this.state.exam_startdate,
            exam_enddate: this.state.exam_enddate,
            semester_id: this.state.semester_id,
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

        //CONNECTING TO PHP DATABASE 

        fetch('http://localhost/examRemunerationPHP-main/examcomInsert.php', { // URL
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
            examcom_ID: "",
            examcom_name: "",
            examcom_title: "",
            examcom_meetingdate: "",
            examcom_meetingnum: "",
            exam_startdate: "",
            exam_enddate: "",
            semester_id: "",
        })
    }

    render() {
        return (
            <div className="coursedashboardstyle">
                <h3>Add New Exam Committee to the Database</h3>

                <form onSubmit={this.onSubmit} style={courseStyle}>
                    <div className="form-group">
                        <label>Exam Committee ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.examcom_id}
                            onChange={this.onChangeExamcomID}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Exam Committee Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.examcom_name}
                            onChange={this.onChangeExamcomName}
                            required="true"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Exam Committee Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.examcom_title}
                            onChange={this.onChangeExamcomTitle}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Meeting Date</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.examcom_meetingdate}
                            onChange={this.onChangeExamcomMeetingDate}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Meeting Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.examcom_meetingnum}
                            onChange={this.onChangeExamcomMeetingNum}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Exam Start Date</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exam_startdate}
                            onChange={this.onChangeExamStartDate}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Exam End Date</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.exam_enddate}
                            onChange={this.onChangeExamEndDate}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Semester ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.semester_id}
                            onChange={this.onChangeSemesterID}
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
