const fs = require("fs");
fs.writeFileSync("hello.txt","hello Node.js");
console.log("file created")
//read
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
//rename
fs.renameSync("hello.txt", "welcome.txt");
console.log("File renamed");