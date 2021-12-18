import React, { Component } from "react";
import { Col, Container, Form, Modal, Row, Button } from "react-bootstrap";
import BillTop from "../BillTop/BillTop";
import logo from "../../images/University_of_Chittagong_logo.png";
import Footer from "../Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imageStyle = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  marginBottom: "10px",
};
const margin = { marginBottom: "15px" };

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeAdminUserName = this.onChangeAdminUserName.bind(this);
    this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
    this.onTeacherSubmit = this.onTeacherSubmit.bind(this);
    this.onAdminSubmit = this.onAdminSubmit.bind(this);

    this.state = {
      teacherModalShow: false,
      adminModalShow: false,
      user_name: "",
      user_password: "",
      admin_user_name: "",
      admin_password: "",
      adminShow: false,
      teacherShow: false,
    };
  }

  notify() {
    toast.error("Enter correct Username & Password", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  // ------------ Onchange funciotns ----------

  onChangeUserName(e) {
    this.setState({
      user_name: e.target.value,
    });
  }
  onChangeUserPassword(e) {
    this.setState({
      user_password: e.target.value,
    });
  }
  onChangeAdminUserName(e) {
    this.setState({
      admin_user_name: e.target.value,
    });
  }
  onChangeAdminPassword(e) {
    this.setState({
      admin_password: e.target.value,
    });
  }

  onTeacherSubmit(e) {
    e.preventDefault();

    const userData = {
      user_name: this.state.user_name,
      user_password: this.state.user_password,
    };
    

    this.setState({ teacherModalShow: !this.state.teacherModalShow });

    fetch("http://localhost:8080/examRemunaration/teacherLoginAuth.php", {
      // URL
      body: JSON.stringify(userData), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
      .then((res) => res.json())
      .then((data) => this.handleTeacherAppFunction(data));

    // this.setState({
    //   user_name: "",
    //   user_password: "",
    // });
  }

  handleTeacherAppFunction(data) {
    if (data === 1) {
      this.setState({
        teacherShow: true,
      });
      this.notify();
    } else if (data[0].username.length > 0) {
      this.props.setUserLoggedIn(true);
      sessionStorage.setItem("username", data[0].username);
      localStorage.setItem("userLogin", sessionStorage.getItem("username"));
    }
  }
  // let teacherUrl = 'http://localhost:8080/examRemunaration/teacherLoginAuth.php'

  // let url = "http://localhost:8080/examRemunaration/adminLogin.php";

  onAdminSubmit(e) {
    e.preventDefault();
    const adminData = {
      admin_name: this.state.admin_user_name,
      admin_password: this.state.admin_password,
    };


    this.setState({ adminModalShow: !this.state.adminModalShow });

    fetch("http://localhost:8080/examRemunaration/adminLogin.php", {
      // URL
      body: JSON.stringify(adminData), // data you send.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      redirect: "follow", // *manual, follow, error
      referrer: "no-referrer", // *client, no-referrer
    })
      .then((res) => res.json())
      .then((data) => this.handleAppFunction(data));
  }

  handleAppFunction(data) {
    if (data === 1) {
      this.setState({
        adminShow: true,
      });
      this.notify();
    } else if (data[0].username.length > 0) {
      this.props.setLoggedIn(true);
      

      sessionStorage.setItem("adminName", data[0].username);
      localStorage.setItem("login", sessionStorage.getItem("adminName"));
    }
  }
  handleTeacherModal() {
    this.setState({ teacherModalShow: !this.state.teacherModalShow });
  }

  handleAdminModal() {
    this.setState({ adminModalShow: !this.state.adminModalShow });
  }

  render() {
    return (
      <>
        <BillTop></BillTop>

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

        <div
          style={{ fontFamily: "Times New Roman" }}
          className="mt-5 pt-5 d-flex justify-content-center"
        >
          {/* -----------*****************---------- Teacher Modal Start --------------************-------- */}

          <div className="me-5 pe-5">
            <h3 style={{ color: "#198754" }}>Teacher</h3>
            <button
              style={{ width: "100px" }}
              type="button"
              class="me-5 btn btn-success"
              onClick={() => {
                this.handleTeacherModal();
              }}
            >
              <b style={{ fontFamily: "monospace" }}>Log In</b>
            </button>

            <Modal
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.teacherModalShow}
              onHide={() => this.handleTeacherModal()}
            >
              <Modal.Header
                style={{ borderBottom: 0 }}
                closeButton
              ></Modal.Header>

              <Modal.Body style={{ marginTop: -20 }}>
                <Container>
                  <Row className="logo">
                    <Col></Col>
                    <Col style={imageStyle}>
                      <img width="50px" src={logo} alt="" />
                    </Col>
                    <Col></Col>
                  </Row>

                  <Row>
                    <Col style={{ textAlign: "center", marginBottom: "10px" }}>
                      <h4 style={{ fontWeight: "500", marginBottom: 10 }}>
                        Teacher Log In
                      </h4>
                    </Col>
                  </Row>
                  <Form onSubmit={this.onTeacherSubmit}>
                    <Row style={margin}>
                      <Col>
                        <Form.Control
                          placeholder="Username"
                          value={this.state.user_name}
                          onChange={this.onChangeUserName}
                          required
                        />
                      </Col>
                    </Row>
                    <Row style={margin}>
                      <Col>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          required
                          value={this.state.user_password}
                          onChange={this.onChangeUserPassword}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Button as="input" type="submit" value="Submit" />
                      </Col>
                      <Col></Col>
                    </Row>
                  </Form>
                </Container>
              </Modal.Body>
            </Modal>
          </div>

          {/* -----------*****************---------- Teacher Modal end --------------************-------- */}

          {/* -----------*****************---------- Admin Modal Start --------------************-------- */}

          <div className="md-5 pd-5">
            <h3 style={{ marginLeft: "7px", color: "#dc3545" }}>Admin</h3>
            <button
              style={{ width: "100px" }}
              type="button"
              class="btn btn-danger"
              onClick={() => this.handleAdminModal()}
            >
              <b>Log In</b>
            </button>

            <Modal
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.adminModalShow}
              onHide={() => this.handleAdminModal()}
            >
              <Modal.Header
                style={{ borderBottom: 0 }}
                closeButton
              ></Modal.Header>

              <Modal.Body style={{ marginTop: -20 }}>
                <Container>
                  <Row className="logo">
                    <Col></Col>
                    <Col style={imageStyle}>
                      <img width="50px" src={logo} alt="" />
                    </Col>
                    <Col></Col>
                  </Row>

                  <Row>
                    <Col style={{ textAlign: "center", marginBottom: "10px" }}>
                      <h4 style={{ fontWeight: "500", marginBottom: 10 }}>
                        Admin Log In
                      </h4>
                    </Col>
                  </Row>
                  <Form onSubmit={this.onAdminSubmit}>
                    <Row style={margin}>
                      <Col>
                        <Form.Control
                          placeholder="Username"
                          value={this.state.admin_user_name}
                          onChange={this.onChangeAdminUserName}
                          required
                        />
                      </Col>
                    </Row>
                    <Row style={margin}>
                      <Col>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          value={this.state.admin_password}
                          onChange={this.onChangeAdminPassword}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Button as="input" type="submit" value="Submit" />
                      </Col>
                      <Col></Col>
                    </Row>
                  </Form>
                </Container>
              </Modal.Body>
            </Modal>
          </div>

          {/* -----------*****************---------- Admin Modal End --------------************-------- */}
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default LoginPage;
