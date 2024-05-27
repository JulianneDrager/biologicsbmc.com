import React from "react";
import { Button } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const SubmitButton = ({ ffIsValid, validated }) => {
  const btn = ContactStyle.btn;
  const btnContainer = ContactStyle.btnContainer;

  return (
    <div className={btnContainer}>
      <Button variant="light" type="submit" value="send" className={btn}>
        SUBMIT
      </Button>
    </div>
  );
};
export default SubmitButton;
