import React from "react";
import { Row } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const Title = () => {
  const contactTitleHire = ContactStyle.contactTitleHire;
  const contactTitle2Hire = ContactStyle.contactTitle2Hire;

  return (
    <>
      <Row>
        <p className={contactTitleHire}>ARE YOU ACTIVELY LOOKING?</p>
        <p className={contactTitle2Hire}>WE ARE HIRING</p>
      </Row>
    </>
  );
};
export default Title;
