import React from 'react';

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }

  render() {
    const { currentStep } = this.state;
    return (
      <div>
        Am a student.
        {currentStep}
      </div>
    );
  }

}

export default Sheet;
