import { Card, Col, Form, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import SubmitButtonDisabled from "./Form Fields/SubmitButtonDisabled";

const DesktopHiringForm = ({
  firstnameprop,
  setFirstNameProp,
  phoneprop,
  setPhoneProp,
  lastnameprop,
  setLastNameProp,
  emailprop,
  setEmailProp,
  positionprop,
  setPositionProp,
  file,
  setFile,
  questionprop,
  setQuestionProp,
}) => {
  const formStyleHire = ContactStyle.formStyleHire;
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

  return (
    <>
      <Card id="hire" className={formStyleHire}>
        <Title />
        <Row>
          <Col>
            <FirstName
              firstnameprop={firstnameprop}
              setFirstNameProp={setFirstNameProp}
            />
            <Phone phoneprop={phoneprop} setPhoneProp={setPhoneProp} />
          </Col>
          <Col>
            <LastName
              lastnameprop={lastnameprop}
              setLastNameProp={setLastNameProp}
            />
            <Email emailprop={emailprop} setEmailProp={setEmailProp} />
          </Col>
        </Row>
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
              setBoxIsChecked("I agree to Community of Love contacting me. ")
            }
          />
        </div>
        {!checked ? <SubmitButton /> : <SubmitButtonDisabled />}
      </Card>
    </>
  );
};
export default DesktopHiringForm;
