// const name01 = require('./utils.js');
//const name = 'Qiang';
// console.log(name01(1,2));
// const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
yargs.version('1.1.0');
//console.log(notes());
// console.log(validator.isEmail('abcra.rockwell.com'));
//console.log(chalk.blue.bold.inverse('success !'));
//console.log(process.argv[2]);
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('Adding a note !');
// } else if (command === 'remove') {
//     console.log('removing a note !');
// }
// console.log(process.argv);
//console.log(yargs.argv);

//add
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            decribe: 'title the new note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'content of the new note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Title: ',argv.title);
        // console.log('Body: ',argv.body);
        notes.addNote(argv.title,argv.body);
    }
});

//remove
yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    handler: function () {
        console.log('Removing the note !');
    }
});

//list
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function () {
        console.log('Listing the notes !');
    }
});

//read
yargs.command({
    command: 'read',
    describe: 'reading the note',
    handler: function () {
        console.log('reading the note !');
    }
});

yargs.parse();

// console.log(yargs.argv);
