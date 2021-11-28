import { Modal, Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../images/University_of_Chittagong_logo.png";
import "./LoginModal.css";

function LoginModal(props) {
  console.log(props);
  const imageStyle = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginBottom:'10px'
  };
  const margin = {marginBottom:'10px'} ;


  const submitUser = (e) =>{
    e.preventDefault();
    props.setUserLoggedIn(true);
    console.log('admin logged in');
  }


  return (
    <Modal
    {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container>
          <Row className="logo">
            <Col></Col>
            <Col style={imageStyle}>
              <img width="30px" src={logo} alt="" />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col style={{textAlign:'center',marginBottom:'10px'}}>
              <p style={{fontWeight:'500'}}>Teacher Log In</p>
            </Col>
          </Row>
          <Form onSubmit={submitUser}>
            <Row style={margin}>
              <Col>
                <Form.Control placeholder="User ID" />
              </Col>
            </Row>
            <Row style={margin}>
              <Col>
                <Form.Control placeholder="Password" />
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
  );
}

export default LoginModal;
