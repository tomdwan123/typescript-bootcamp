function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Tony", last: "Jane" });

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

type Point = {
  x: number;
  y: number;
  z?: number; // optional properties
};

let coordinate: Point = { x: 34, y: 2 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12345,
  username: "Tom",
};

// user.id = 54321; // not update

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: Number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
