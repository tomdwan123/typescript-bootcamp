function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

greet();
greet("Tony");
doSomething("Chicken", 76, false);

const addNums = (x: number, y: number): number => {
  return x + y;
};

addNums(2, 5);

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return num;
}

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toLowerCase();
});

/* Void returns undefined or null, which is techincally
   still a type of value
*/
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

/* The never type represents values that NEVER
  occur. We might use it to annotate a function
  that always throw an exception, or a function
  that never finishes executing
*/

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
