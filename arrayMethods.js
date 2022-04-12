const patients = require("./patients");

// Loops

// Old school for loop. Shared across all programming languages
// JS has built-in methods that work as more specific for loops
for (let i = 0; i < patients.length - 1; i++) {
  //   console.log(patients[i].firstName);
}

// patients = [{}, {}, {}, {}, {}]
// ForEach is only for sideeffects, we will always prefer
// more specific methods like find, filter and map
patients.forEach((p) => {
  // sendEmail(p.email) // some side effect per element.
});

// filter:
// start from an array
// returns: new array with elements that pass the condition
// returns: [{}, {}, {}] || []
const shortPeople = patients.filter((patient) => {
  if (patient.height < 1.8) {
    return true;
  } else {
    return false;
  }
});

const shortPeople2 = patients.filter((patient) => {
  return patient.height < 1.8;
});

// console.log(shortPeople, shortPeople.length, patients.length);

const malePatients = patients.filter((patient) => {
  return patient.gender === "m";
});

// They can have multiple conditions
const malePatients2 = patients.filter((patient) => {
  return patient.gender === "m" && patient.age > 40;
});

// console.log(malePatients, malePatients.length, patients.length);

// find
// Starts from a list of elements
// returns: {} || undefined

const searchEmail = "jallpressc@epa.gov";

const byEmail = patients.find((patient, index) => {
  //   console.log("what patient are we looking at", index, patient.firstName);

  return patient.email === searchEmail;
});

// console.log("by email", byEmail);

// MAP
// Transform every element
// returns a new array with the same amount of elements

const numbers = [1, 2, 3, 4, 5, 6];

const mapExample = numbers.map((num) => {
  return num * 2;
});

// console.log("map example", mapExample);

// I want a list of emails
// right now: I have a list of patient objects
const listOfEmails = patients.map((patient) => {
  return patient.email;
});
// console.log(listOfEmails);

// We want to output a message per patient
// "{firstName} is lazy"
// "{firstName} is not lazy"
const messages = patients.map((patient) => {
  const lazyOrNo = patient.dailyExercise === "yes" ? "is not lazy" : "is lazy";
  return patient.firstName + " " + lazyOrNo;
});

console.log(messages);
