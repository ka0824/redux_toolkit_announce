import React, { memo } from "react";

const Text = ({ text }) => {
  return <div>{text}</div>;
};

export default memo(Text);
