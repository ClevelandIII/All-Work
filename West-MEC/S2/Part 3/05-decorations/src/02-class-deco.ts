//! Property Deco - this gets 2 arguments, one get the target which is the constructer and the name of the property
function PropLog(target: any, propName: string | Symbol) {
  console.log("PROPERTY DECO");
  console.log(target);
  console.log(propName);
}
//! Acessory Deco - this gets the target which is the constructer, the name of the accessory and the description of the accessory
function AccLog(
  target: any,
  accName: string | Symbol,
  desc: PropertyDescriptor
) {
  console.log("ACESSOR DECO");
  console.log(target);
  console.log(accName);
  console.log(desc);
}
//! Method Deco - gets the same three arguments as the acessory deco, instead gets name of method, desc of method
function MetLog(
  target: any,
  metName: string | Symbol,
  desc: PropertyDescriptor
) {
  console.log("ACESSOR DECO");
  console.log(target);
  console.log(metName);
  console.log(desc);
}
//! Parameter Deco - this gets the target which is the constructer, the name of the parameter and the position of the parameter

function ParaLog(target: any, paraName: string | Symbol, position: number) {
  console.log("ACESSOR DECO");
  console.log(target);
  console.log(paraName);
  console.log(position);
}

// used for putting a place on the decos
class Product {
  @PropLog
  title: string;
  private _price: number;

  @AccLog
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("please enter a valid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MetLog
  getPriceWithTax(@ParaLog tax: number = 0.1) {
    return this._price * (1 + tax);
  }
}
