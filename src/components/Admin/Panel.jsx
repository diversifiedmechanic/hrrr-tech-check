/* eslint-disable no-underscore-dangle */
import React from 'react';
import lib from '../../lib';
import StudentList from './StudentList';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
    };
    this.constantUpdate = this.constantUpdate.bind(this);
  }

  componentDidMount() {
    setInterval(this.constantUpdate, 500);
  }

  constantUpdate() {
    const { studentList } = this.state;
    lib.getAllStudents()
      .then((students) => {
        if (students !== studentList) {
          this.setState({
            studentList: students,
          });
        }
      });
  }

  render() {
    const { studentList } = this.state;
    return (
      <div>
        {studentList.map((student) => <StudentList key={student._id} student={student} />)}
      </div>
    );
  }
}

export default Panel;
