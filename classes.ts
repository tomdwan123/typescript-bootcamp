class Player1 {
  first: string;
  last: string;
  score: number = 0;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

const taylor = new Player1("Taylor", "Swift");
