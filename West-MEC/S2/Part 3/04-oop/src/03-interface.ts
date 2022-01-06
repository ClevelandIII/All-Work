//if you are creating an interface for a function the proper convention is to write Fn

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

const add2: AddFn = (n1, n2) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {
  greet(phrase:)
}