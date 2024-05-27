import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const Email = ({ emailprop, setEmailProp }) => {
  const email = ContactStyle.email;

  return (
    <>
      <Form.Control
        className={email}
        name="email"
        value={emailprop}
        onChange={(e) => setEmailProp(e.target.value)}
        type="email"
        rows={3}
        placeholder="EMAIL"
        required
      />
    </>
  );
};
export default Email;
