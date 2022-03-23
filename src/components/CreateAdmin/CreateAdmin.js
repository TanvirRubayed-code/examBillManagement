import React, { Component } from "react";
import "./CreateAdmin.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  notifySuccess() {
    toast.success("New Admin Created Successfully.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  notifyFailed() {
    toast.error("Username or Email is already used.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

    fetch("http://localhost/examBillManagement/src/server/setAdmin.php", {
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
    })
    .then(res => res.json())
    .then(data => this.handleNotification(data));

    

  }

  handleNotification(data){
    if(data === 1){
      this.notifySuccess();
      this.setState({
        admin_name: "",
        username: "",
        email: "",
        password: "",
      });
    }
    else if( data === 0){
      this.notifyFailed();
    }
  }

  render() {
    return (
      <div className="margin">

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

        <div className="createAdmin">
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
              <input style={{fontFamily:"monospace"}}
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
