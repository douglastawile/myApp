import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/students/";

export function getStudents() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
