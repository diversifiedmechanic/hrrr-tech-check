import React from 'react';
import AdminPanel from './Admin/Panel';
import StudentSheet from './Student/Sheet';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

  render() {
    const { isAdmin } = this.state;
    let nextPage;
    if (isAdmin) {
      nextPage = <AdminPanel />;
    } else {
      nextPage = <StudentSheet />;
    }
    return (
      <div className="Main">
        <h1>
          Welcome to HRR45 Tech-Check!
        </h1>
        {nextPage}
      </div>
    );
  }
}

export default Main;
