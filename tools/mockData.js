const subjects = [
  {
    id: 1,
    title: "English Language",
    slug: "english-language",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 2,
    title: "Mathematics",
    slug: "maths",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 3,
    title: "Integrated Science",
    slug: "integrated-science",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 4,
    title: "Social Studies",
    slug: "social-studies",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 5,
    title: "Religious and Moral Education",
    slug: "religious-and-moral-education",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 6,
    title: "Information Communication and Technology",
    slug: "inofrmation-communication-and-technology",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
  {
    id: 7,
    title: "Ghanaian Language",
    slug: "ghanaian-language",
    classScore: null,
    examScore: null,
    total: null,
    grade: null,
    remark: null,
  },
];

const students = [
  { id: 1, name: "Douglas Tawile (Code Whisperer)" },
  { id: 2, name: "Francis Tawile" },
  { id: 3, name: "Dominic Tawile" },
  { id: 4, name: "Daniel Forkuo(Skuskus)" },
  { id: 5, name: "Emmanuel Boateng(Shubishon`)" },
];

const newSubject = {
  id: null,
  title: "",
  classScore: null,
  examScore: null,
  total: null,
  grade: "",
  remark: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSubject,
  subjects,
  students,
};
