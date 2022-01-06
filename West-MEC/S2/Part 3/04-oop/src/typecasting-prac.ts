//* type casting
//several different ways of doing typecasting

const Qinput = document.querySelector("input")!;
const Qinput1 = document.querySelector("#input") as HTMLInputElement;
const Qinput2 = <HTMLInputElement> document.querySelector("#input");
const Qinput3: HTMLInputElement = document.querySelector("#input")!;

Qinput3.value;
