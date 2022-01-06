//* type casting
//several different ways of doing typecasting

const input = document.querySelector("input")!;
const input1 = document.querySelector("#input") as HTMLInputElement;
const input2 = <HTMLInputElement>document.querySelector("#input");
const input3: HTMLInputElement = document.querySelector("#input")!;

input3.value;

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
