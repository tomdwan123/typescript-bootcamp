// import Dog from "./Dog.js";
// import ShelterDog from "./ShelterDog.js";
// import { add, multiply, divide } from "./utils.js";

import { randomUUID } from "crypto";
//const csv = require("csv-parser");
import fs from "fs";
//import csv from "csv-parser";

// const elton = new Dog("Elton", "Aussue", 0.5);
// elton.bark();

// console.log(add(4, 5));
// console.log(multiply(4, 5));
// console.log(divide(4, 5));

// const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Apring Shelter");

//
let value = "";
let i: number = 1;
while (i <= 1000) {
  if (i % 20 == 0) {
    value += 0 + " ,";
  } else {
    value += `${i}, `;
  }
  i++;
}

console.log(value);

// let value = "";
// fs.createReadStream("./test.csv")
//   .pipe(csv())
//   .on("data", (data: any) => {
//     value += `"${data}",`;
//   })
//   .on("end", (err: any) => {
//     // Output: Array of objects, each representing a row in the CSV
//     console.log(err);
//   });

// console.log(value);
