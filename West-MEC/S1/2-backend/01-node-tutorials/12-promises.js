// const { readFile, writeFile, read } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.md")
//   .then((data) => {
//     const first = data;
//   })
//   .then(
//     getText("./content/second.md")
//       .then((data) => {
//         const second = data;
//       })
//       .catch((err) => console.log(err))
//   )
//   .catch((err) => console.log(err));

//```````````````````````````````````````````````````````````````````````````````````````````````````

const { readFile, writeFile, read } = require("fs").promises;
// const util = require("util");

// const readFileProm = util.promisify(readFile);
// const writeFileProm = util.promisify(writeFile);
//if you do it this way you need readFileProm and writeFileProm

const start = async () => {
  try {
    const first = await readFile("./content/first.md", 'utf-8');
    const second = await readFile("./content/second.md", 'utf-8');
    await writeFile(
      "./content/promise-result-1.md",
      `this was promisified : \n${first} \n${second} \n\n`,
      { flag: "w" }
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start()