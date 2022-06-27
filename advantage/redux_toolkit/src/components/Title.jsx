import React, { memo } from "react";

const Title = ({ title }) => {
  return <div>{title}</div>;
};

export default memo(Title);
