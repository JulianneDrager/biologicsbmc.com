import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Message = () => {
  const messageContact = ContactStyle.messageContact;
  return (
    <>
      {/* <Form.Label className={labelForm}>Reason for Connecting</Form.Label> */}

      <Form.Control
        className={messageContact}
        as="textarea"
        name="message"
        type="text"
        rows={3}
        placeholder="MESSAGE"
      />
    </>
  );
};
export default Message;
