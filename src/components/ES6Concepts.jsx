// --------------------------------------------------------------------
const sectionHeader = (title) => {
  console.log("                        ");
  console.log(`  ${title}  `);
  console.log("************************");
  console.log("                        ");
};
// Logical AND and OR Operators

let a = false;
// let b = false;
const myName = "Mickeyy...";

function myDetails(userName, age, address) {
  return { userName, age, address };
}

// &&
sectionHeader("LOGICAL && and ||");

console.log("Logical AND == ", a && myDetails("Kofi", 3, "Lapaz"));
console.log("Logical OR == ", a || myName);

// --------------------------------------------------------------------

// Template Literals
sectionHeader("Template Literals");
let shape1 = "circle";
let shape2 = "pentagon";

console.log(shape1 + " " + shape2);
console.log(`${shape1} ${shape2}`);

// --------------------------------------------------------------------

// Ternary Operator
sectionHeader("Ternary Operator");
let showMoonIcon = false;

if (showMoonIcon) {
  console.log("Lightmode activated...");
} else {
  console.log("Darkmode activated...");
}

const haveEaten = true;

function ifHasEaten(doThis) {
  return doThis;
}
function ifHasNotEaten(doThis) {
  return doThis;
}

if (haveEaten) {
  console.log(ifHasEaten("Just Drink Water"));
} else {
  console.log(ifHasNotEaten("Go buy some food to eat!"));
}

!haveEaten
  ? console.log(ifHasEaten("Just Drink Water"))
  : console.log(ifHasNotEaten("Go buy some food to eat!"));

// --------------------------------------------------------------------

// Destrusturing Objects
sectionHeader("Destrusturing Objects");

const id = 1;
const productName = "phone";
const type = "new";

const product = {
  id: id,
  productName: productName,
  type: type,
};

// doing shortened property name...
const product2 = {
  desc: "very affordable...",
  id,
  type,
  productName,
};

const getProduct2Desc = product2.desc;

console.log(product);
console.log([product]);
console.log({ product });
console.log(product2);
console.log(getProduct2Desc);
// to destructure, you do...
// const {'what you want to take'} = 'the object or group you want to take from'
const { desc } = product2; // destructuring "desc" from the function...
console.log(desc);

// Destrusturing Arrays

const arrayGroup = [2, 5, 7, 10];
console.log(arrayGroup);

const [firstNum, secondNum, thirdNum, fourthNum, fifthNum] = arrayGroup; // destructuring here too...
console.log(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
const [anyNumber] = arrayGroup;
console.log(anyNumber);

// --------------------------------------------------------------------

// Default Parameters, Spread Operators, and Rest Operators...
sectionHeader("Default Parameters");

function productOfDigits(digit1, digit2) {
  return digit1 * digit2;
}
console.log(productOfDigits(20)); // returns 60 because only "num1" had his value updated to 20 and so (20 * 3) = 60...

function productOfNumbers(num1 = 2, num2 = 3) {
  return num1 * num2;
}
console.log(productOfNumbers(20)); // returns 60 because only "num1" had his value updated to 20 and so (20 * 3) = 60...

// Spread Operators (...)
sectionHeader("Spread Operator");

const arrayGroup2 = [1, 3, 5];
console.log(arrayGroup2);
console.log(...arrayGroup2);
console.log([...arrayGroup2]);
console.log([...arrayGroup2, arrayGroup]);
console.log([...arrayGroup2, ...arrayGroup]);
console.log([12, ...arrayGroup2, 99, ...arrayGroup, 1000]);

// Rest Operators...
sectionHeader("REST operator");
function getNumbers(a, b, ...c) {
  console.log(a, b, c);
  return "Helllooooo";
}
console.log(getNumbers(2, 3, 4, 5, 6, 7, 8, 9));

// --------------------------------------------------------------------

// ES6 Array Methods... map, filter, some, every, includes, indexOf, findIndex...
sectionHeader("ES6 Array Methods");
const customerData = [
  {
    id: 1,
    name: "Kofi",
    age: 32,
    country: "Ghana",
  },
  {
    id: 2,
    name: "Sarah",
    age: 36,
    country: "USA",
  },
  {
    id: 3,
    name: "Yaw",
    age: 28,
    country: "Togo",
  },
  {
    id: 4,
    name: "Ming",
    age: 30,
    country: "China",
  },
  {
    id: 5,
    name: "Sarah",
    age: 33,
    country: "USA",
  },
  {
    id: 6,
    name: "John",
    age: 46,
    country: "UK",
  },
  {
    id: 7,
    name: "Priya",
    age: 29,
    country: "India",
  },
  {
    id: 8,
    name: "Akwasi",
    age: 39,
    country: "China",
  },
  {
    id: 9,
    name: "Ahmed",
    age: 38,
    country: "Egypt",
  },
  {
    id: 10,
    name: "John",
    age: 41,
    country: "UK",
  },
  {
    id: 11,
    name: "Priya",
    age: 27,
    country: "India",
  },
  {
    id: 12,
    name: "Ahmed",
    age: 35,
    country: "Egypt",
  },
];

// map...
sectionHeader("MAP function");
const getAllNames = customerData.map((singleName) => {
  console.log(...singleName.name);
  console.log(singleName.name);
  return `${singleName.name} is ${singleName.age}years old. A recident from ${singleName.country}`;
});

console.log(getAllNames);

// find - returns only the first result it comes across..
sectionHeader("FIND function");
const getPersonByCountry = customerData.find((singleName) => {
  return singleName.country === "China"; //
});

console.log(getPersonByCountry);

// filter - returns all the results associated with the condition...
sectionHeader("FILTER function");
const getAllChinese = customerData.filter((singleName) => {
  return singleName.country === "China";
});

console.log(getAllChinese);
console.log(...getAllChinese);

// some - returns a boolean flag if any (at least one) condition is satisfied...
sectionHeader("SOME function");
const checkSomeAge = customerData.some((singleName) => {
  console.log(singleName.age);
  let result = `It is ${
    singleName.age > 30
  } that the least age in the database is greater than 30`;
  console.log(result);
  return result;
});

console.log(checkSomeAge);
// every - returns a boolean flag if all conditions are satisfied...
sectionHeader("EVERY function");
const checkEveryAge = customerData.every((singleName) => {
  let everyResult = `It is ${
    singleName.age < 30
  } that all the ages in the database is lesser than 30`;
  console.log(everyResult);
  return everyResult;
});

console.log(checkEveryAge);

// includes - returns a boolean flag if condition is satified...
sectionHeader("INCLUDES function");
const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("apple"));

// indexOf - returns the current index of an item if it exist. and returns -1 if it does not exist...
sectionHeader("INDEXOF function");
console.log(fruits.includes("apple"), fruits.indexOf("mango"));
console.log(fruits.includes("apple"), fruits.indexOf("guava"));

// findIndex
sectionHeader("FINDINDEX function");
const getIndexOfGhanaian = customerData.findIndex((singleName) => {
  return singleName.country === "India";
});

console.log(getIndexOfGhanaian);

// --------------------------------------------------------------------

// API Fetching and Integration...
sectionHeader("API FETCH function");
const getListOfProductElement = document.querySelector(".apiFetchProducts");

function renderProducts(showProduct) {
  getListOfProductElement.innerHTML = showProduct
    .map((singleProduct) => `<p>${singleProduct.title}</p>`)
    .join("");
}

async function fetchProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const apiResults = await apiResponse.json();
    // console.log(apiResults);
    // console.log(apiResults.products);
    // console.log(...apiResults.products);

    if (apiResults?.products?.length > 0) renderProducts(apiResults?.products);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
// --------------------------------------------------------------------

// --------------------------------------------------------------------

// --------------------------------------------------------------------

// --------------------------------------------------------------------

// --------------------------------------------------------------------

console.log(" ");
console.log(" ");
console.log(" ");

const ES6Concepts = () => {
  return <></>;
};

export default ES6Concepts;
