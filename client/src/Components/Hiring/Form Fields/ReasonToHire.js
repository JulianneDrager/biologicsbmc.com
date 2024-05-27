import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const ReasonToHire = ({ questionprop, setQuestionProp }) => {
  const reason = ContactStyle.reason;

  return (
    <>
      <Form.Control
        className={reason}
        as="textarea"
        name="reason"
        value={questionprop}
        onChange={(e) => setQuestionProp(e.target.value)}
        type="text"
        rows={3}
        placeholder="WHY SHOULD WE HIRE YOU?"
      />
    </>
  );
};
export default ReasonToHire;
