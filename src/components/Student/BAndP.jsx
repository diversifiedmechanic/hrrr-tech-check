/* eslint-disable react/prop-types */
import React from 'react';

const BAndP = ({ updateUserCallback }) => {
  const onButtonPressed = () => {
    updateUserCallback({ haveLearnedAboutBP: true });
  };

  return (
    <div>
      <h2>
        Click continue after learning about b, p, and bp.
      </h2>
      <button type="button" onClick={onButtonPressed}>Continue</button>
    </div>
  );
};

export default BAndP;
