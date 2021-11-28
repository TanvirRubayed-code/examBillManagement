import React, { Component } from "react";
import axios from "axios";
import "./Evaluators.css";

const courseStyle = {
    marginTop: "20px",
};

export class Courses extends Component {
    constructor(props) {
        super(props);

        this.onChangeEvaluatorId = this.onChangeEvaluatorId.bind(this);
        this.onChangeEvaluatorNameBNG = this.onChangeEvaluatorNameBNG.bind(this);
        this.onChangeEvaluatorNameEN = this.onChangeEvaluatorNameEN.bind(this);
        this.onChangeEvaluatorTitle = this.onChangeEvaluatorTitle.bind(this);
        this.onChangeEvaluatorLginID = this.onChangeEvaluatorLginID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            evaluator_id: "",
            evaluator_nameBNG: "",
            evaluator_nameEN: "",
            evaluator_title: "",
            evaluator_loginID: ""
        };
    }

    onChangeEvaluatorId(e) {
        this.setState({
            evaluator_id: e.target.value,
        });
    }
    onChangeEvaluatorNameBNG(e) {
        this.setState({
            evaluator_nameBNG: e.target.value,
        });
    }
    onChangeEvaluatorNameEN(e) {
        this.setState({
            evaluator_nameEN: e.target.value,
        });
    }
    onChangeEvaluatorTitle(e) {
        this.setState({
            evaluator_title: e.target.value,
        });
    }
    onChangeEvaluatorLginID(e) {
        this.setState({
            evaluator_loginID: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            evaluator_id: this.state.evaluator_id,
            evaluator_nameBNG: this.state.evaluator_nameBNG,
            evaluator_nameEN: this.state.evaluator_nameEN,
            evaluator_title: this.state.evaluator_title,
            evaluator_loginID: this.state.evaluator_loginID,
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


        fetch('http://localhost/examRemunerationPHP-main/courseInsert.php', { // URL
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
            evaluator_id: "",
            evaluator_nameBNG: "",
            evaluator_nameEN: "",
            evaluator_title: "",
            evaluator_loginID: "",
        })
    }

    render() {
        return (

            <div className="coursedashboardstyle">
                <h3 align="center">Add Evaluator's Information To The Database</h3>

                <form onSubmit={this.onSubmit} style={courseStyle}>
                    <div className="form-group">
                        <label>Evaluator's ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.evaluator_id}
                            onChange={this.onChangeEvaluatorId}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Evaluator's Name In Bangla</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.evaluator_nameBNG}
                            onChange={this.onChangeEvaluatorNameBNG}
                            required="true"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Evaluator's Name In English</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.evaluator_nameEN}
                            onChange={this.onChangeEvaluatorNameEN}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Evaluator's Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.evaluator_title}
                            onChange={this.onChangeEvaluatorTitle}
                            required="true"
                        ></input>
                    </div>
                    <div style={courseStyle} className="form-group">
                        <label>Evaluator's Login ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.evaluator_loginID}
                            onChange={this.onChangeEvaluatorLginID}
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
