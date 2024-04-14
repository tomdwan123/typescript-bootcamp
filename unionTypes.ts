let age: number | string = 20;
age = 30;
age = "40";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 5, y: 6 };
coordinates = { lat: 15.35, long: 36.54 };

function printAge(age: number | string) {
  console.log(`You are ${age} years old`);
}

printAge(20);
printAge("30");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}

console.log(calculateTax(45, 0.7));
console.log(calculateTax("$45", 0.7));

let zero: 0 = 0;
// zero = 2; not assign 2 to type zero

const getAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}`;
};

console.log(getAnswer("no"));
// console.log(getAnswer("oh boy T'm not sure"));

type DateOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thurday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// let day: DateOfWeek = "uoa"; not allowed
