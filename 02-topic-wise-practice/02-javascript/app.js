const os = require("os");
const path = require("path");
const fs = require("fs");

// OS Module
console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());

// Path Module
const filePath = path.join(__dirname, "student.txt");

console.log("File Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

// FS Module
fs.writeFileSync(filePath, "Welcome to Node.js");

const data = fs.readFileSync(filePath, "utf8");

console.log("File Content:", data);