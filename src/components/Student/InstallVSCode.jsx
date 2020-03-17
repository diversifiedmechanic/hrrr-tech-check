/* eslint-disable react/prop-types */
import React from 'react';

const InstallVSCode = ({ updateUserCallback }) => {
  const onButtonPressed = () => {
    updateUserCallback({ installedVSCode: true });
  };

  return (
    <div>
      <h2>
        Click continue after installing Visual Studio Code.
      </h2>
      <a href="https://code.visualstudio.com/docs/setup/setup-overview" target="_blank" rel="noopener noreferrer">Click here to see instructions</a>
      <div>
        <button type="button" onClick={onButtonPressed}>Continue</button>
      </div>
    </div>
  );
};

export default InstallVSCode;
