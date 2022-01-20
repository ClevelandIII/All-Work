//* type casting
//several different ways of doing typecasting

// const input = document.querySelector("input")!;
// const input1 = document.querySelector("#input") as HTMLInputElement;
// const input2 = <HTMLInputElement>document.querySelector("#input");
// const input3: HTMLInputElement = document.querySelector("#input")!;

// input3.value;

//same thing as each other, diff ways to do it
let users: string[] = [];
let names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve: any, reject: any) => {
  setTimeout(() => {
    resolve("DONE");
  }, 2000);
  reject("FAILED");
});

promise.then((data) => console.log(data.split(" "))); //Done
promise.catch((data) => console.log(data)); //FAILED

//* Generics

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObjs = merge({ name: "Jimmy" }, { age: 30 });
console.log(mergedObjs); //name Jimmy, age 30
console.log(mergedObjs.name);

interface HasLength {
  length: number;
}

function countAndDescribe<T extends HasLength>(value: T): [T, string] {
  let descText = "no values";
  if (value.length === 1) {
    descText = "got one value";
  } else if (value.length > 1) {
    descText = `got ${value.length} values`;
  }
  return [value, descText];
}

console.log("cooking");
console.log([1234, "testing"]);

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
): string {
  return `Value ${obj[key]}`;
}

extractAndConvert({ name: "Jimmy" }, "name"); //Jimmy

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    else this.data.splice(this.data.indexOf(item), 1);
  }
}

const textStorage = new DataStorage<string>();
const numStorage = new DataStorage<number>();

numStorage.addItem(44);
textStorage.addItem("44");
