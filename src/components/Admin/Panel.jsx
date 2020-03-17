/* eslint-disable no-underscore-dangle */
import React from 'react';
import lib from '../../lib';
import StudentList from './StudentList';
import Headers from './Headers';
import './Panel.css';

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
    const list = ['bp', 'VSCode', 'Windows', 'Bash', 'Terminal', 'Node -v', 'whichNode', 'VSCode config', 'LiveShare', 'GitHub Profile', 'Git Config', 'Zoom', 'Slack', 'Zoom Room', 'gLearn', 'OS', 'WSL', 'OS -v', 'Blog'];
    const { studentList } = this.state;
    return (
      <div>
        <div className="headers">
          <div className="headerName">Name</div>
          {list.map((item) => <Headers key={item} item={item} />)}
        </div>
        <div className="checkList">
          {studentList.map((student) => <StudentList key={student._id} student={student} />)}
        </div>
      </div>
    );
  }
}

export default Panel;
