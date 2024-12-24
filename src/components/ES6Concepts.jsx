// --------------------------------------------------------------------
// Logical AND and OR Operators

let a = false;
// let b = false;
const myName = "Mickeyy...";

function myDetails(userName, age, address) {
	return { userName, age, address };
}

// &&
console.log("Logical AND == ", a && myDetails("Kofi", 3, "Lapaz"));
console.log("Logical OR == ", a || myName);

// --------------------------------------------------------------------

// Template Literals
let shape1 = "circle";
let shape2 = "pentagon";

console.log(shape1 + " " + shape2);
console.log(`${shape1} ${shape2}`);

// --------------------------------------------------------------------

// Ternary Operator
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

const id = 1;
const productName = "phone";
const type = "new";

const product = {
	id: id,
	productName: productName,
	type: type,
};

const product2 = {
	desc: "very affordable...",
	id,
	type,
	productName,
};

const getProduct2Desc = product2.desc;

console.log(product);
console.log(product2);
console.log(getProduct2Desc);
const { desc } = product2;
console.log(desc);

// Destrusturing Arrays

const arrayGroup = [2, 5, 7, 10];
console.log(arrayGroup);

const [firstNum, secondNum, thirdNum, fourthNum, fifthNum] = arrayGroup;
console.log(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
// --------------------------------------------------------------------

// Default Parameters, Spread Operators, and Rest Operators...

function productOfNumbers(num1 = 2, num2 = 3) {
	return num1 * num2;
}
console.log(productOfNumbers(20));

// Spread Operators (...)
const arrayGroup2 = [1, 3, 5];
console.log(arrayGroup2);
console.log(...arrayGroup2);
console.log([...arrayGroup2]);
console.log([...arrayGroup2, arrayGroup]);
console.log([...arrayGroup2, ...arrayGroup]);
console.log([12, ...arrayGroup2, 99, ...arrayGroup, 1000]);

// Rest Operators...
function getNumbers(a, b, ...c) {
	console.log(a, b, c);
	return "Helllooooo";
}
console.log(getNumbers(2, 3, 4, 5, 6, 7, 8, 9));

// --------------------------------------------------------------------

// ES6 Array Methods... map, filter, some, every, includes, indexOf, findIndex...

const customerData = [
	{
		id: 1,
		name: "Kofi",
		age: 23,
		country: "Ghana",
	},
	{
		id: 2,
		name: "Sarah",
		age: 31,
		country: "USA",
	},
	{
		id: 3,
		name: "Yaw",
		age: 21,
		country: "Togo",
	},
	{
		id: 4,
		name: "Ming",
		age: 28,
		country: "China",
	},
	{
		id: 5,
		name: "Sarah",
		age: 31,
		country: "USA",
	},
	{
		id: 6,
		name: "John",
		age: 45,
		country: "UK",
	},
	{
		id: 7,
		name: "Priya",
		age: 27,
		country: "India",
	},
	{
		id: 8,
		name: "Ming",
		age: 28,
		country: "China",
	},
	{
		id: 9,
		name: "Ahmed",
		age: 35,
		country: "Egypt",
	},
	{
		id: 10,
		name: "John",
		age: 45,
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

const getAllNames = customerData.map((singleData, index) => {
	console.log(singleData.country, index);
	return `${singleData.name} is from ${singleData.country} ${index}`;
});

console.log(...getAllNames);
// --------------------------------------------------------------------

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
