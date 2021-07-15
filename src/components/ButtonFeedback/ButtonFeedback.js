import React from "react";

const ButtonFeedback = ({ title, increment }) => {
  return (
    <>
      <h2>{title}</h2>
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

export default ButtonFeedback;
