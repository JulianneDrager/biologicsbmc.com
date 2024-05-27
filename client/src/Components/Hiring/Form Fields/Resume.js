import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";
import ContactStyle from "../../Contact/Contact.module.css";

const Resume = ({ file, setFile }) => {
  const resume = ContactStyle.resume;

  return (
    <>
      <FormLabel style={{ margin: " 1rem 0 0 0" }}>
        Attach Resume Here:
      </FormLabel>
      <Form.Control
        style={{ margin: " 0 0 .5rem 0" }}
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </>
  );
};
export default Resume;
