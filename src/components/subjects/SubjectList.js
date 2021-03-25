import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubjectList = ({ subjects }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Class Score(30%)</th>
          <th>Exam Score(70%)</th>
          <th>Total(100%)</th>
          <th>Grade</th>
          <th>Remark</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject) => {
          return (
            <tr key={subject.id}>
              <td>
                <Link to={"/subject/" + subject.slug}>{subject.title}</Link>
              </td>
              <td>{subject.classScore}</td>
              <td>{subject.examScore}</td>
              <td>{subject.total}</td>
              <td>{subject.grade}</td>
              <td>{subject.remark}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired,
};

export default SubjectList;
