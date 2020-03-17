/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import AdminPanel from './Admin/Panel';
// import StudentSheet from './Student/Sheet';
import pageParser from './pageParser';
import lib from '../lib';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      currentPage: 0,
      isAdmin: false,
    };
    this.updateUserCallback = this.updateUserCallback.bind(this);
  }

  updateUserCallback(update) {
    const { id, currentPage } = this.state;

    if (id === null) {
      lib.addUser(update)
        .then((newId) => {
          console.log(newId);
          if (newId === 'Admin') {
            this.setState({
              isAdmin: true,
            });
          } else {
            this.setState({
              id: newId,
              currentPage: currentPage + 1,
            });
          }
        })
        .catch((error) => {
          console.error('Not a valid first or last name! ', error);
        });
    } else {
      lib.updateUser({ id, update })
        .then(() => {
          this.setState({
            currentPage: currentPage + 1,
          });
        })
        .catch((error) => console.error(error));
    }
  }

  render() {
    const {
      id,
      currentPage,
      isAdmin,
    } = this.state;

    let pageToRender;
    if (isAdmin) {
      pageToRender = <AdminPanel />;
    } else {
      pageToRender = pageParser(currentPage, id, this.updateUserCallback);
    }

    return (
      <div className="Main">
        <h1>
          Welcome HRR45!
        </h1>
        {pageToRender}
      </div>
    );
  }
}

export default Main;
