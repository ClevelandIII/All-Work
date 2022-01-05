let num: number = 5;
const user: string = "Tom";

const add = (n1: number, n2: number): string => {
  console.log(n1 + n2);
  return `the sum is ${n1 + n2}`;
};

const addAndHandle = (
  n1: number,
  n2: number,
  cb: (something: string) => void
): void => {
  const result = n1 + n2;
  cb(`${result}`);
};

// parameters are number number and callback function, so we have 5, 69 and a callback function
// addAndHandle(5, 69, (result) => {
//   console.log(result);
// });

const addTogether = (
  s1: string,
  s2: string,
  cb: (something: string) => void
): void => {
  const result = s1 + s2;
  cb(`${result}`);
};

// addTogether("this", "that", (result) => {
//   console.log(result);
// });

//accepts several parameters, as many as one wants
const severalParameters = (
  // arr1: [], me being upset that he said no arrays and then the solution involved arrays
  cb: (result: string) => void,
  ...strings: string[]
) => {
  const result = strings.join(' ')
  cb(result)
}

const stringNumBool = (
  s1: string,
  n2: number,
  b3: boolean,
  cb: (something: any) => void
): void => {
  if(b3 === true){
    const s2 = Number(s1)
    const result = s2 + n2
    //you could also just do return +s1 + n2 to make s1 into a a num, but this works
    cb(result)
  }else {
    const result = s1 + n2
    cb(`${result}`)
  }
};

stringNumBool("1", 1, true, (result) => {
  console.log(result);
});