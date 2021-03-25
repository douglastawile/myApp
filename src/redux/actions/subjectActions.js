import * as types from "./actionTypes";
import * as subjectApi from "../../api/subjectApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSubjectSuccess(subjects) {
  return { type: types.LOAD_SUBJECTS_SUCCESS, subjects };
}

export function createSubjectSuccess(subject) {
  return { type: types.CREATE_SUBJECT_SUCCESS, subject };
}

export function updateSubjectSuccess(subject) {
  return { type: types.UPDATE_SUBJECT_SUCCESS, subject };
}

export function loadSubjects() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return subjectApi
      .getSubject()
      .then((subjects) => {
        dispatch(loadSubjectSuccess(subjects));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveSubject(subject) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return subjectApi
      .saveSubject(subject)
      .then((savedSubject) => {
        subject.id
          ? dispatch(updateSubjectSuccess(savedSubject))
          : dispatch(createSubjectSuccess(savedSubject));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
