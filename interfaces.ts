interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 10, y: 20 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 123,
  sayHi: () => {
    return "Hello";
  },
};

thomas.first = "New Thiomas";
// thomas.id = 124; not allowed change

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Shop",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));
