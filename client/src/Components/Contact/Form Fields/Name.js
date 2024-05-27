import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Name = () => {
  const nameContact = ContactStyle.nameContact;

  return (
    <>
      {/* <Form.Label className={labelForm}>Name</Form.Label> */}
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="name"
            className={nameContact}
            name="name"
            type="text"
            placeholder="NAME"
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
export default Name;
