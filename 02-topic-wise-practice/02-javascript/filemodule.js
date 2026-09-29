const fs = require('fs');

fs.writeFileSync('student.txt', 'Name: Aruna\nBranch: AI & ML');

const data = fs.readFileSync('student.txt', 'utf8');

console.log(data);