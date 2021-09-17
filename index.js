const students = [
  { firstName: "Tirth", lastName: "shah", age: 23 },
  { firstName: "Abhishek", lastName: "pathak", age: 25 },
  { firstName: "Riya", lastName: "patel", age: 24 },
  { firstName: "Bhala", lastName: "batuk", age: 18 },
  { firstName: "Khalnayak", lastName: "Kalia", age: 24 },
];

const filtered = students.filter(student=>student.age>=24).map(el=>console.log(`${el.firstName} ${el.lastName}`))
