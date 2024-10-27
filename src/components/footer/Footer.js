import React from "react";
import { useSelector } from "react-redux";
import "./footer.styles.css";

export default () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="footer">
      <h1>Total tasks: {counter}</h1>
    </div>
  );
};
