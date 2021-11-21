import React from "react";
import "./Courses.css";
import { Form, Button, Schema, ButtonToolbar,fluid } from "rsuite";

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

const Courses = () => {
  return (
    <div className="coursedashboardstyle">
      <h3>Add Course to the Database</h3>
      <Form>
        <TextField name="name" label="Course ID" />
        <TextField name="name" label="Course Name" />
        <TextField name="name" label="Course Credit" />
        <TextField name="name" label="Course of Semester" />

        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default Courses;
