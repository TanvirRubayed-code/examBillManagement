import React, { Component } from "react";
import "./CreateAdmin.css";

const style = {
  marginTop: "20px",
};

class CreateAdmin extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      admin_name: "",
      username: "",
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
    const addAdmin = {
      admin_name: this.state.admin_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(addAdmin);

    fetch("http://localhost:8080/examRemunaration/setAdmin.php", {
      // URL
      body: JSON.stringify(addAdmin), // data you send.
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
      admin_name: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="margin">
        <div className="evdashboardstyle">
          <h3>Create a new Admin</h3>

          <form className="form" onSubmit={this.onSubmit} style={style}>
            <div className="form-group">
              <label>
                <b>Admin Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="admin_name"
                value={this.state.admin_name}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                required="true"
              ></input>
            </div>
            <div style={style} className="form-group">
              <label>
                <b>Email</b>
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
                <b>Password</b>
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

export default CreateAdmin;