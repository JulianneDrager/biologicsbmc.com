import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Message = () => {
  const message = ContactStyle.message;
  return (
    <>
      <Form.Control
        className={message}
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
