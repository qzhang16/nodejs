const fs1 = require("fs");

//fs1.writeFileSync('notes.txt','This file was created by Node.js1 !');
fs1.appendFileSync('notes.txt','my name is Qiang !');

console.log(fs1.readFileSync('notes.txt'));