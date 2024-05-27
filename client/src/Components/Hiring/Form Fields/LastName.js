import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const LastName = ({ lastnameprop, setLastNameProp }) => {
  const lastName = ContactStyle.lastName;

  return (
    <>
      <Form.Group as={Col}>
        <InputGroup hasValidation>
          <Form.Control
            id="lastName"
            className={lastName}
            name="last_name"
            value={lastnameprop}
            onChange={(e) => setLastNameProp(e.target.value)}
            type="text"
            placeholder="LAST NAME"
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
export default LastName;
