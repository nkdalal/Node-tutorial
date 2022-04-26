const os = require('os')

const usr = os.userInfo()

console.log(usr);

const systemInfo = {
    osname: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

}

console.log(systemInfo);