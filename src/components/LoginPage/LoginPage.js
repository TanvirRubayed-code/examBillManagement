import React, { Component } from "react";
import { Col, Container, Form, Modal, Row, Button } from "react-bootstrap";
import BillTop from "../BillTop/BillTop";
import logo from "../../images/University_of_Chittagong_logo.png";

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

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

    this.onTeacherSubmit = this.onTeacherSubmit.bind(this);



    this.state = {
      teacherModalShow: false,
      adminModalShow: false,
      user_name: "",
      user_password: "",
    };
  }

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

  onTeacherSubmit(e) {
    e.preventDefault();

    console.log(this.state.user_name);
    console.log(this.state.u_password);
    const obj = {
      user_name: this.state.user_name,
      user_password: this.state.user_password,
    };
    console.log(obj);
  }





  handleTeacherModal() {
    this.setState({ teacherModalShow: !this.state.teacherModalShow });
  }

  handleAdminModal() {
    console.log(this.state.adminModalShow);
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
                          placeholder="User Name"
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

          {/* -----------*****************---------- Teacher Modal Start --------------************-------- */}

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
                  <Form>
                    <Row style={margin}>
                      <Col>
                        <Form.Control placeholder="User ID" required />
                      </Col>
                    </Row>
                    <Row style={margin}>
                      <Col>
                        <Form.Control
                          placeholder="Password"
                          type="password"
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
