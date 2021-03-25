import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadSubjects, saveSubject } from "../../redux/actions/subjectActions";
import PropTypes from "prop-types";
import SubjectForm from "./SubjectForm";
import { newSubject } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const ManageSubjectPage = ({
  subjects,
  loadSubjects,
  saveSubject,
  history,
  ...props
}) => {
  const [subject, setSubject] = useState({ ...props.subject });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (subjects.length === 0) {
      loadSubjects().catch((error) => {
        alert("Loading subjects failed" + error);
      });
    } else {
      setSubject({ ...props.subject });
    }
  }, [props.subject]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubject((prevSubject) => ({
      ...prevSubject,
      [name]: value,
    }));
  };

  function formIsValid() {
    const { title, classScore, examScore, total, grade, remark } = subject;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!classScore) errors.classScore = "Class Score is required";
    if (!examScore) errors.examScore = "Exam Score is required";
    if (!total) errors.total = "Total Score is required";
    if (!grade) errors.grade = "Grade is required";
    if (!remark) errors.remark = "Remark Score is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  const handleSave = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveSubject(subject)
      .then(() => {
        toast.success("Subject saved successfully.");
        history.push("/subjects");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return subjects.length === 0 ? (
    <Spinner />
  ) : (
    <SubjectForm
      subject={subject}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

ManageSubjectPage.propTypes = {
  subjects: PropTypes.array.isRequired,
  loadSubjects: PropTypes.func.isRequired,
  subject: PropTypes.object.isRequired,
  saveSubject: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export const getSubjectBySlug = (subjects, slug) => {
  return subjects.find((subject) => subject.slug === slug) || null;
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const subject =
    slug && state.subjects.length > 0
      ? getSubjectBySlug(state.subjects, slug)
      : newSubject;
  return {
    subjects: state.subjects,
    subject,
  };
}

const mapDispatchToProps = {
  loadSubjects,
  saveSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSubjectPage);
