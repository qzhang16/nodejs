// const name01 = require('./utils.js');
//const name = 'Qiang';
// console.log(name01(1,2));
// const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
//console.log(notes());
// console.log(validator.isEmail('abcra.rockwell.com'));
//console.log(chalk.blue.bold.inverse('success !'));
//console.log(process.argv[2]);
const command = process.argv[2];
if (command === 'add') {
    console.log('Adding a note !');
}
