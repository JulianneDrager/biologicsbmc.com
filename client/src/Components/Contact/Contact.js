import { useNavigate } from "react-router-dom";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useRef, useState } from "react";

import Title from "./Form Fields/Title";
import Name from "./Form Fields/Name";
import Phone from "./Form Fields/Phone";
import Email from "./Form Fields/Email";
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import Message from "./Form Fields/Message";
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";

const Contact = () => {
  const formStyle = ContactStyle.formStyle;
  const contact = ContactStyle.contact;
  const checkForm = ContactStyle.checkForm;

  //for validate
  const [checked, setChecked] = useState(true);

  // for checkbox
  const [boxIsChecked, setBoxIsChecked] = useState(false); //fried chicken leg white sandwich

  // for checkbox
  const onChangeChoice1 = (e) => {
    if (e.target.name === "content" && e.target.checked === true) {
      setChecked(false);
    }

    if (e.target.checked === false) {
      setChecked(true);
    }
  };

  const navigate = useNavigate();
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9so2kab", //service id
        "biomazze-contact", //template id
        // console.log("DATA",  refForm.current.name.value),
        refForm.current,
        "HsTyBQtNhu0EsXU_D" //public key
      )
      .then(
        (result) => {
          //   alert("Message successfully sent!");
          navigate(`/thankyou/${refForm.current.name.value}`);
          // window.location.reload(false);
          console.log("result", result);
        },
        (error) => {
          alert("Failed to send the message, please try again");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Row>
        <Col>
          <Form
            id="contact"
            ref={refForm}
            onSubmit={sendEmail}
            // validated={validated}
            className={contact}
            autoComplete="on"
          >
            <Card className={formStyle}>
              <Title />
              <Name />
              <Phone />
              <Email />
              <Message />

              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#5a6f8ea1",
                  margin: "1rem 0",
                  borderRadius: ".3rem",
                }}
              >
                <Form.Check
                  id="content"
                  name="content"
                  label="By checking the box you agree to us contacting you."
                  className={checkForm}
                  value={boxIsChecked}
                  onChange={onChangeChoice1}
                  required
                  onClick={() =>
                    setBoxIsChecked(
                      "I agree to Community of Love contacting me. "
                    )
                  }
                />
              </div>
              {!checked ? <SubmitButton /> : <SubmitButtonDisabled />}
            </Card>
          </Form>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <div className={contactDivider}></div>
        </Col>
      </Row> */}
    </>
  );
};
export default Contact;
