import React, { memo } from "react";

const ImmerText = ({ text }) => {
  return <div>{text}</div>;
};

export default memo(ImmerText);
