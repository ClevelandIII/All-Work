interface ValidatorConfig {
  //className must be inside square brackets cause var else it would be taken literally
  [className: string]: {
    [validatableProp: string]: string[];
  };
}

//* registeredValidators {
//*     Course: {
//*         title: ['require', 'positive', ...],
//*         price: ['positive]
//*     }
//* }

const registerValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  //! create a key in the registered for the class
  //   console.log(target);
  //   console.log(propName);
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: ["required"],
  };
}
function PosNumber(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any): boolean {
  const objectValidatorConfig = registerValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of prop) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PosNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
    console.log(registerValidators);
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleE1 = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleE1.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    console.error("invalid input/s");
    return;
  }

  //! this is normally where you would save the object to the database if the obj was successfully validated
  console.log(createdCourse);
});
