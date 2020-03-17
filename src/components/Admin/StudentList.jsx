/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import React from 'react';

const StudentList = ({ student }) => {
  const populateFields = () => {
    let fields = '';

    for (const [key, value] of Object.entries(student)) {
      if (key !== 'firstName' && key !== 'lastName' && key !== '_id' && key !== '__v') {
        if (fields !== '') fields += ' ';
        fields += (`${key} ${value}`);
      }
    }
    return fields;
  };

  return (
    <div>
      {`${student.firstName} ${student.lastName}`}
      <div>
        {populateFields()}
      </div>
    </div>
  );
};

export default StudentList;
