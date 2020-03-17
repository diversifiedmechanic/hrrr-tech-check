/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import React from 'react';

const StudentList = ({ student }) => {
  const list = [
    'haveLearnedAboutBP',
    'installedVSCode',
    'windowsUser',
    'configuredBash',
    'openTerminal',
    'nodeVersion',
    'whichNode',
    'configuredVSCode',
    'installedLiveShare',
    'updatedGitHubProfile',
    'setGitConfig',
    'installedZoomClient',
    'installedSlack',
    'setUpZoomRoom',
    'canAccessLearn',
    'operatingSystem',
    'wslInstalled',
    'operatingSystemVersion',
    'createdBlog',
  ];

  return (
    <div className="studentList">
      <div className="studentName">
        {`${student.firstName} ${student.lastName}`}
      </div>
      {list.map((item) => <PopulateChecklist key={item} item={item} student={student} />)}
    </div>
  );
};

const PopulateChecklist = ({ item, student }) => {

  const isDone = () => {
    if (student[item] === undefined) return 'false';
    return 'true';
  };

  return (
    <div className="checklistItem">
      {isDone()}
    </div>
  );
};

export default StudentList;
