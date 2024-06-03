import axios from "axios";

function slowQuery(url) {
  axios
    .get(url)
    .then(function (response) {
      it.next();
    })
    .catch(function (error) {
      it.next(0);
    });
}

function* myGen(i = 0) {
  let queryResult = 0;

  console.log("query1", queryResult);
  queryResult = yield slowQuery("https://google.com");

  if (queryResult == 1) {
    console.log("query2", queryResult);
    //change it to the correct url and run again.
    queryResult = yield slowQuery("https://1111111111google.com");
  }

  if (queryResult == 1) {
    console.log("query3", queryResult);
    queryResult = yield slowQuery("https://google.com");
  } else {
    console.log("query4", queryResult);
    queryResult = yield slowQuery("https://google.com");
  }
  mygen3();
}

function mygen2() {
  console.log("+++++++++++end1+++++++++++");
}

function mygen3() {
  console.log("+++++++++++end3+++++++++++");
}

console.log("+++++++++++start+++++++++++");
let it = myGen();
it.next();
mygen2();
console.log("+++++++++++end2+++++++++++");

function* square(x) {
  for (var i = 0; i < 5; i++) {
    x = x * 2;
    yield x;
  }
}

var gen = square(2);
for (var x of gen) {
  console.log(x);
}
