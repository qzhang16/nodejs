const fs = require('fs');
const data = JSON.parse(fs.readFileSync('t2.json').toString());
data.name = 'Qiang';
data.age = 45;
fs.writeFileSync('t2.json',JSON.stringify(data));