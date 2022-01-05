let something: unknown;
something = "test";

const mult2 = (n1: number) => {
  console.log(n1 * 2);
};

if (typeof something === "number") {
  mult2(something);
}

type Combinable = number | string;
type Conversion = "as-num" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  convert: Conversion
): Combinable => {
  if (convert === "as-num") {
    return +input1 + +input2;
  } else {
    return "" + input1 + input2;
  }
};

type Item = [string, number, number];
enum Title {
  "NEW",
  "EXPERIENCED",
  "VET",
}

let Hero: {
  health: number;
  name: string;
  stats: {
    strength: number;
    dexterity: number;
    intelligence: number;
  };
  inventory: Item[];
  title: Title;
};

enum Brand {
  "ATX",
  "MINI-ATX",
}
enum Speed {
  "2300Mhz",
  "2666Mhz",
  "2800Mhz",
}
type Wire = [string, string, number];

let computer: {
  case: {
    size: Brand;
    brand: string;
  };
  memory: {
    size: number;
    brand: string;
  };
  peripherals: string[];
  speed: Speed;
  wires: Wire[];
};
