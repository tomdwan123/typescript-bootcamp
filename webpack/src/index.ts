import Dog from "./Dog.js";
import { add, multiply, divide } from "./utils.js";

console.log("FROM INDEX FILE");

const elton = new Dog("John", "Evan", 35);
elton.bark();

console.log(add(4, 5));
console.log(divide(4, 2));
console.log(multiply(2, 3));

const req = {
  user: {
    aduroId: "12345",
    name: "dp dam",
  },
};

var profile = {
  city: {
    name: "newyork",
  },
};

function test(req: any) {
  //let result = req && req.users && req.users.aduroId;
  let result = req.users.aduroIds;
  console.log("user: ", result);
}

function city(profile: any) {
  let result = (profile && profile.city && profile.city.name) || "no";
  console.log("profile: ", result);
}

//test(req);
city(profile);
