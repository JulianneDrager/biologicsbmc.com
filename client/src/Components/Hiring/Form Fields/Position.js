import React from "react";
import { Form } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const Position = ({ positionprop, setPositionProp }) => {
  const position = ContactStyle.position;

  return (
    <>
      <Form.Control
        className={position}
        name="position"
        value={positionprop}
        onChange={(e) => setPositionProp(e.target.value)}
        type="text"
        rows={3}
        placeholder="INQUIRED POSITION"
        required
      />
    </>
  );
};
export default Position;
