function identity<T>(item: T): T {
  return item;
}

identity<string>("hello");
identity<boolean>(true);
identity<number>(7);

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([1, 2, 3]);
getRandomElement<string>(["a", "v", "asd"]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

console.log(merge({ name: "colt" }, { pets: ["blue", "red"] }));
//console.log(merge({}, 9));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
  title: string;
  artust: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
