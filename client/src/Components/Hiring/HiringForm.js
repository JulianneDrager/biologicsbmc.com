import { useNavigate } from "react-router-dom";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";

import Title from "./Form Fields/Title";
import FirstName from "./Form Fields/FirstName";
import Phone from "./Form Fields/Phone";
import Email from "./Form Fields/Email";
import SubmitButton from "./Form Fields/SubmitButton";
import ContactStyle from "../Contact/Contact.module.css";
import Position from "./Form Fields/Position";
import LastName from "./Form Fields/LastName";
import Resume from "./Form Fields/Resume";
import ReasonToHire from "./Form Fields/ReasonToHire";
import { useMediaQuery } from "@mui/material";
import DesktopHiringForm from "./DesktopHiringFrom";
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";

const HiringForm = () => {
  const hiring = ContactStyle.hiring;
  const desktopHiring = ContactStyle.desktopHiring;
  const formStyle = ContactStyle.formStyle;
  const hiringDivider = ContactStyle.hiringDivider;
  const checkForm = ContactStyle.checkForm;
  const matchSm = useMediaQuery("(max-width: 728px)");

  //for validate ---------------------------------------------
  const [checked, setChecked] = useState(true);

  // for checkbox --------------------------------------------
  const [boxIsChecked, setBoxIsChecked] = useState(false); //fried chicken leg white sandwich

  // for checkbox --------------------------------------------
  const onChangeChoice1 = (e) => {
    if (e.target.name === "content" && e.target.checked === true) {
      setChecked(false);
    }

    if (e.target.checked === false) {
      setChecked(true);
    }
  };

  const refForm = useRef();

  // states
  const [firstnameprop, setFirstNameProp] = useState("");
  const [lastnameprop, setLastNameProp] = useState("");
  const [phoneprop, setPhoneProp] = useState("");
  const [emailprop, setEmailProp] = useState("");
  const [positionprop, setPositionProp] = useState("");
  const [questionprop, setQuestionProp] = useState("");
  const [file, setFile] = useState(null);

  // trying try/catch
  const navigate = useNavigate();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    //prepare to send data
    const formData = new FormData();
    console.log(file);
    formData.append("firstnameprop", firstnameprop);
    formData.append("lastnameprop", lastnameprop);
    formData.append("phoneprop", phoneprop);
    formData.append("emailprop", emailprop);
    formData.append("positionprop", positionprop);
    formData.append("questionprop", questionprop);
    formData.append("file", file);

    for (const entry of formData) {
      console.log(entry);
    }

    try {
      const response = fetch(
        "https://bio-mazze-website-backend.onrender.com/send-email",
        // "http://localhost:5000/send-email",
        {
          method: "POST",
          body: formData,
        }
        // alert("Your form has been submitted!")
      );
      console.log("res", response);
      // alert("email has been sent!");
      //   alert("Message successfully sent!");
    } catch (error) {
      console.log("Error while sending the email");
    } finally {
      //   alert("Message successfully sent!");
      navigate(`/thankyou/${refForm.current.name.value}`);
    }
  };

  return (
    <>
      {matchSm && (
        <>
          <Row id="hire">
            <Col>
              <Form
                ref={refForm}
                onSubmit={sendEmailHandler}
                className={hiring}
                autoComplete="on"
              >
                <Card className={formStyle}>
                  <Title />
                  <FirstName
                    firstnameprop={firstnameprop}
                    setFirstNameProp={setFirstNameProp}
                  />
                  <LastName
                    lastnameprop={lastnameprop}
                    setLastNameProp={setLastNameProp}
                  />
                  <Phone phoneprop={phoneprop} setPhoneProp={setPhoneProp} />
                  <Email emailprop={emailprop} setEmailProp={setEmailProp} />
                  <Position
                    positionprop={positionprop}
                    setPositionProp={setPositionProp}
                  />
                  <Resume file={file} setFile={setFile} />
                  <ReasonToHire
                    questionprop={questionprop}
                    setQuestionProp={setQuestionProp}
                  />

                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "#5a6f8ea1",
                      margin: "1rem 0",
                      borderRadius: ".3rem",
                    }}
                  >
                    <Form.Check
                      className={checkForm}
                      id="content"
                      name="content"
                      label="By checking the box you agree to us contacting you."
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
          <Row>
            <Col>
              <div className={hiringDivider}></div>
            </Col>
          </Row>
        </>
      )}

      {!matchSm && (
        <>
          <Row>
            <Col>
              <Form
                id="contact"
                ref={refForm}
                onSubmit={sendEmailHandler}
                className={desktopHiring}
                autoComplete="on"
              >
                <DesktopHiringForm
                  firstnameprop={firstnameprop}
                  setFirstNameProp={setFirstNameProp}
                  lastnameprop={lastnameprop}
                  setLastNameProp={setLastNameProp}
                  phoneprop={phoneprop}
                  setPhoneProp={setPhoneProp}
                  emailprop={emailprop}
                  setEmailProp={setEmailProp}
                  positionprop={positionprop}
                  setPositionProp={setPositionProp}
                  questionprop={questionprop}
                  setQuestionProp={setQuestionProp}
                  file={file}
                  setFile={setFile}
                />
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={hiringDivider}></div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default HiringForm;
