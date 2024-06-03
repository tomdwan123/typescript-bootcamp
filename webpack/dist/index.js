import Dog from "./Dog.js";
import { add, multiply, divide } from "./utils.js";
console.log("FROM INDEX FILE");
var elton = new Dog("John", "Evan", 35);
elton.bark();
console.log(add(4, 5));
console.log(divide(4, 2));
console.log(multiply(2, 3));
var req = {
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
function test(req) {
    //let result = req && req.users && req.users.aduroId;
    var result = req.users.aduroIds;
    console.log("user: ", result);
}
function city(profile) {
    var result = (profile && profile.city && profile.city.name) || "no";
    console.log("profile: ", result);
}
//test(req);
city(profile);
