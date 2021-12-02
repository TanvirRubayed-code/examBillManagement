import React, { Component } from "react";
import { Col, Container, Form, Modal, Row, Button } from "react-bootstrap";
import BillTop from "../BillTop/BillTop";
import logo from "../../images/University_of_Chittagong_logo.png";
import { PostData } from "../../services/PostData";

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
    console.log(props);
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
    };
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
    console.log(userData);
    this.setState({ teacherModalShow: !this.state.teacherModalShow });

    this.setState({
      user_name: "",
      user_password: "",
    });
  }

  // let url = "http://localhost:8080/examRemunaration/adminLogin.php";

  onAdminSubmit(e) {
    e.preventDefault();
    const adminData = {
      admin_name: this.state.admin_user_name,
      admin_password: this.state.admin_password,
    };

    this.setState({ adminModalShow: !this.state.adminModalShow });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:3000"
      },

      body: JSON.stringify(adminData),
    };
    fetch(
      "http://localhost:8080/examRemunaration/adminLogin.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((d) => console.log(d));

    // PostData(url,adminData)
    // .then(data=>{
    //   console.log(data);
    // });
  }

  Componentdit;

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
        <div className="mt-5 pt-5 d-flex justify-content-center">
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
              Log In
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
              Log In
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
      </>
    );
  }
}

export default LoginPage;
