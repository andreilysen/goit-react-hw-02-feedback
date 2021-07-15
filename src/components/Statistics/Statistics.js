import React from "react";

const Statistics = ({
  total,
  goodPercentage,
  state: { good, neutral, bad },
}) => {
  return (
    <>
      <ul>
        <li>good : {good}</li>
        <li>neutral : {neutral}</li>
        <li>bad : {bad}</li>
        <li>Total : {total}</li>
        <li>Positive feedback : {goodPercentage} %</li>
      </ul>
    </>
  );
};

export default Statistics;
