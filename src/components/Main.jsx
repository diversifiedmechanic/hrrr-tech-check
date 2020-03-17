import React from 'react';
import AdminPanel from './Admin/Panel';
import StudentSheet from './Student/Sheet';
import lib from './../lib.js';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    lib.addUser(firstName, lastName)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div className="Main">
        <h1>
          Welcome to HRR45 Tech-Check!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="firstName">
            <label>
              First Name:
              <input type="text" name="firstName" required value={firstName} onChange={this.handleChange} />
            </label>
          </div>
          <div className="lastName">
            <label>
              Last Name:
              <input type="text" name="lastName" required value={lastName} onChange={this.handleChange} />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Main;
