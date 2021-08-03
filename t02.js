const fs = require('fs');
fs.readFile('./t03.js',(err,data) =>{
    if (err) throw err;
    console.log(data);
});