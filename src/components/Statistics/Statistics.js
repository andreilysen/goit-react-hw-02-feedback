import React from "react";
import PropTypes from "prop-types";

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

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  goodPercentage: PropTypes.number.isRequired,
  state: PropTypes.shape(
    PropTypes.number.isRequired
    // {
    // good: PropTypes.number.isRequired,
    // neutral: PropTypes.number.isRequired,
    // bad: PropTypes.number.isRequired,
    // }
  ).isRequired,
};

export default Statistics;
