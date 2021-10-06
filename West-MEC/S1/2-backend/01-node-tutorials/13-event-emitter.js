const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("request", (name, id) => {
  console.log(`data for ${name} : id ${id}`);
});

customEmitter.on("testing", (name) => {
  console.log(`another function here ${name}`);
});

customEmitter.emit("request", "john", 12345);
