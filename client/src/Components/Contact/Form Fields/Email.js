import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Email = () => {
  const emailContact = ContactStyle.emailContact;
  return (
    <>
      <Form.Control
        className={emailContact}
        name="email"
        type="email"
        rows={3}
        placeholder="EMAIL"
        required
      />
    </>
  );
};
export default Email;
