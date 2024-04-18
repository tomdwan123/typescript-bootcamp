/* Tuples are a special exclusive to TypeScript (the don't exist in the JS).
Tuples are arrays of fixed lengths and ordered with specifice types - like supper rigid arrays.
*/
const stuff: (string | number)[] = ["A", 1, 2, "B"];

let myTuples: [number, string];
myTuples = [10, "Hello"];
// myTuples = ["Hello", 10]; CAN'T assign values of diff order

type HTTPResponse = [number, string];
const goodRespponse: HTTPResponse = [200, "OK"];
//goodRespponse[0] = "200";
goodRespponse.push(123);
goodRespponse.pop();
goodRespponse.pop();
goodRespponse.pop();

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];
