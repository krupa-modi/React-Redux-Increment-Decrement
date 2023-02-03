import React from "react";

const PropsDemo = ({ data }) => {
  // const { data } = props;
  return (
    <div>
      <h1>welcome to Props Demo</h1>
      <h2>{data.name}</h2>
    </div>
  );
};

export default PropsDemo;
