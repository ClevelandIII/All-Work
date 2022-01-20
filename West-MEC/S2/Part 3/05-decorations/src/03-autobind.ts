function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
  console.log(desc);
  const originalMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return newMethod;
}

class Printer {
  message = "It's working";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
console.log(p);
p.showMessage();// uses this.message, "this" refers to the p: Printer class

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage.bind(p));
// click has a copy of showMessage => "this" refers to the event click
