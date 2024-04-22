type Cat = { meow: () => void };
type Dog = { bark: () => void };

const talk = (creature: Cat | Dog) => {
  if ("meow" in creature) {
    console.log(creature.meow());
  } else {
    console.log(creature.bark());
  }
};

const kitty: Cat = { meow: () => "MEOWWW" };
talk(kitty);
