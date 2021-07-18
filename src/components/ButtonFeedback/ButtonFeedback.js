import React from "react";
import PropTypes from "prop-types";

const ButtonFeedback = ({ increment }) => {
  return (
    <>
      <button type="button" name="good" onClick={increment}>
        good
      </button>
      <button type="button" name="neutral" onClick={increment}>
        neutral
      </button>
      <button type="button" name="bad" onClick={increment}>
        bad
      </button>
    </>
  );
};

ButtonFeedback.propTypes = {
  increment: PropTypes.func.isRequired,
};

export default ButtonFeedback;
