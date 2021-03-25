import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const CourseForm = ({
  subject,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{subject.id ? "Edit" : "Add"} Subject</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        type="text"
        name="title"
        label="Subject"
        value={subject.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        type="number"
        name="classScore"
        label="Class Score"
        value={subject.classScore}
        onChange={onChange}
        error={errors.classScore}
      />

      <TextInput
        type="number"
        name="examScore"
        label="Exam Score"
        value={subject.examScore}
        onChange={onChange}
        error={errors.examScore}
      />

      <TextInput
        type="number"
        name="total"
        label="Total"
        value={subject.total}
        onChange={onChange}
        error={errors.total}
      />

      <TextInput
        type="text"
        name="grade"
        label="Grade"
        value={subject.grade}
        onChange={onChange}
        error={errors.grade}
      />

      <TextInput
        type="text"
        name="remark"
        label="Remark"
        value={subject.remark}
        onChange={onChange}
        error={errors.remark}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  subject: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
