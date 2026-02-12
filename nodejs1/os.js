const { Console } = require("console");
const os = require("os");

console.log("Operating System :", os.platform());
console.log("Architecture :", os.arch());
console.log("Release :", os.release());
console.log("Hostname:", os.hostname());

console.log("Number of CPUs:", os.cpus().length);
console.log("CPU Model:",os.cpus()[0].model);
console.log("CPU Speed:",os.cpus()[0].speed);
console.log("Total Memory:",os.totalmem);
console.log("Free Memory:",os.freemem);

const totalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
const freeGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

console.log("Network Interfaces:",os.networkInterfaces());
console.log("Uptime:",os.uptime()+"seconds");
console.log("Tempory Directory:",os.tmpdir());
console.log(" Home Directory:",os.homedir());
console.log("Environmental Variables:",process.env);

const fs = require("fs");
const tmpFile = os.tmpdir() + "/temp.txt";
fs.writeFileSync(tmpFile,"This is a tempory file.");
console.log("Temporary File Created :",tmpFile);

console.log("Current User :",os.userInfo().username);