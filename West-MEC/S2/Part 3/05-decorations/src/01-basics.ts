//! This breaks because this doesnt have enough arguments
// function Logger() {
//   console.log("testing");
// }

//* Class deco, takes one argument.
//* which is target. THis is the constructor for the class
// function Logger(target: any) {
//   console.log("CLASS DECO");
//   console.log(target);
// }

//? Deco factory
function Logger(toLog: string) {
  console.log("Class Deco -" + toLog);

  return function (target: any) {
    console.log("CLASS DECO");
    console.log(target);
  };
}

@Logger("Person")
@WithTemplate("<h1> Person Template </h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating Person");
  }
}

const max = new Person();

console.log(max);

//? Deco Template
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  //! If we want to ignore a param, we can replace it with an underscore
  return function (constructor: any) {
    const hookE1 = document.getElementById(hookId);
    const p = new constructor();
    if (hookE1) {
      hookE1.innerHTML = template;
      hookE1.querySelector("h1")!.textContent = p.name;
    }
  };
}
