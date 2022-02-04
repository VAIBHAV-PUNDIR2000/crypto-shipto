import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin style={{ fontSize: 50 }} size="large" />
    </div>
  );
};

export default Loader;
