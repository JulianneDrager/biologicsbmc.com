import React from "react";
import { Image } from "react-bootstrap";
import RightChoiceStyles from "./RightChoice.module.css";

// this is the iterable component that will display the properties given to it

const IconProps = (props) => {
  const title = RightChoiceStyles.title;

  return (
    <>
      <main>
        <div>
          <h5 className={title}>{props.iconTitle}</h5>
          <Image className={props.className} src={props.src} />
        </div>
      </main>
    </>
  );
};

export default IconProps;
