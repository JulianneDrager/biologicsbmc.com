import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const FirstName = ({ firstnameprop, setFirstNameProp }) => {
  const firstName = ContactStyle.firstName;

  return (
    <>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="firstName"
            className={firstName}
            name="name"
            value={firstnameprop}
            onChange={(e) => setFirstNameProp(e.target.value)}
            type="text"
            placeholder="FIRST NAME"
            required
            minLength={3}
            maxLength={20}
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Full name required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default FirstName;
