// types
type PersonN = {
  name: string;
};

// Error! TS compplains about duplicate types
// type PersonN = {
//     age: number
// }

// Error! Age didn't get added to Person type
// const personN: PersonN = {
//     name: "Tom",
//     age: 20
// }

// interfaces
interface PersonM {
  name: string;
}

interface PersonM {
  age: number;
}

const personM: PersonM = {
  name: "Jerry",
  age: 20,
};

interface Doge {
  breed: string;
  bark(): string;
}

interface ServiceDog extends Doge {
  job: "drug niffer" | "bomb" | "guide doge";
}

const chewy: ServiceDog = {
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide doge",
};
