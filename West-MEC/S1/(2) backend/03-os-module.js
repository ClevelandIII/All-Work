const os = require('os')

// console.log(os);

const user = os.userInfo()

// console.log(user);

// console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
}

// console.log(currentOS)

console.log(4473/60)
