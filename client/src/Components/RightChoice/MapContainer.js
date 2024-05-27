import React from "react";

import IconProps from "./IconProps";
import iconsData from "./IconData";
import RightChoiceStyles from "./RightChoice.module.css";

const MapContainer = () => {
  const iconsContainer = RightChoiceStyles.iconsContainer;

  const contentList = iconsData.map((data) => {
    return <IconProps key={data.id} {...data} />;
  });

  return (
    <>
      <div className={iconsContainer}>{contentList}</div>
    </>
  );
};

export default MapContainer;
