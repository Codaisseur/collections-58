// Datatypes

// Number => Integer (Whole numbers) || Float (decimal point)
// 3, 4;
// String (array)
// ("Hello class 58!");

// Boolean (logical operators)
// true || false;

// null || NaN || undefined

// Objects

// A product
const product = {
  name: "Ps5",
  price: 430,
  id: 223465,
  inStock: false,
  description: "some description",
  reviews: [
    { rating: 4, message: "kajsdbkajsbd" },
    { rating: 4, message: "kajsdbkajsbd" },
    { rating: 4, message: "kajsdbkajsbd" },
  ],
};

// 2 ways of accessing objects:
// dot notaion
const name = product.name;

// bracket notation
const price = product[0];
console.log("price", price);

console.log(
  "my product",
  product.inStock ? "We have this product" : "Not in stock right now"
);

// Arrays (=> they are also objects)
// a ordered list of _things_
//                  0          1        2         3         4
const students = ["Rayssa", "Panos", "Armand", "Naomi", "laurens"];

// console.log("student", students[3]);
const group = [
  {
    fullName: "rayssa",
    age: 10,
    hobbies: ["tv", "gym"],
    present: true,
  },
  {
    fullName: "panos",
    age: 10,
    hobbies: ["climbing", "treking"],
    present: true,
  },
  {
    fullName: "matias",
    age: 10,
    hobbies: ["sailing", "gaming"],
    present: true,
  },
];

console.log("the class", group[1].hobbies[2]);

// Objects
// key: value pairs (collections)

const product2 = {
  name: "Ps5",
  price: 430,
  id: 223465,
  inStock: false,
  description: "some description",
  reviews: [
    { rating: 4, message: "kajsdbkajsbd" },
    { rating: 4, message: "kajsdbkajsbd" },
    { rating: 4, message: "kajsdbkajsbd" },
  ],
};

// to access objects:
// dot notation (prefered)
const pName = product.name;
// bracket notation
const pName2 = product["name"];

// Arrays
// What are they: An ordered list.
const students2 = ["Rayssa", "Panos", "Armand", "Naomi", "laurens"];

// To access it?
// brackets and the index (by order). Remember they start at 0
const firstStudent = students2[0];
const thirdStudent = students2[2];

const lastStudent = students2[students2.length - 1];

console.log("length of this array", lastStudent);
