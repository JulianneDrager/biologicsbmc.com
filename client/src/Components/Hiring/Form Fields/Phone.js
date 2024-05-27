import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const Phone = ({ phoneprop, setPhoneProp }) => {
  const phone = ContactStyle.phone;

  return (
    <>
      <Form.Group as={Col} sm={12}>
        <InputGroup hasValidation>
          <Form.Control
            className={phone}
            name="phone_number"
            value={phoneprop}
            onChange={(e) => setPhoneProp(e.target.value)}
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="PHONE"
            required
          />
          <Form.Control.Feedback style={{ marginTop: "-.9rem" }} type="invalid">
            Please enter a valid phone number format
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default Phone;
