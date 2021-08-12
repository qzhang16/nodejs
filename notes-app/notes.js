const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes...";
};
const addNote = function(title,body) {
    const notes = loadNotes();
    //console.log(notes);
    //const dupNotes = notes.filter( note => note.title == title);
    const dupNote = notes.find(note => note.title == title);

    debugger;

    //if (dupNotes.length == 0 ){
    if (! dupNote ) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("a new note added !"));
    } else {
        console.log(chalk.red.inverse("duplicate notes title: " + dupNote.title));
    }

    // notes.push({
    //     title: title,
    //     body: body
    // });
    // saveNotes(notes);
};

const removeNote = function(title){
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title != title);

    if (filteredNotes.length < notes.length) {
        console.log(chalk.green.inverse(title, " removed !"))
        saveNotes(filteredNotes);
    } else {
        console.log(chalk.red.inverse(title, "not found !"));
    } 
    
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title));
        console.log(chalk.gray.inverse(note.body));
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const note01 = notes.find(note => note.title == title);
    if (note01) {
        console.log(chalk.green.inverse(note01.title));
        console.log(chalk.gray.inverse(note01.body));
    } else {
        console.log(chalk.red.inverse(title + ' not found !'));
    }
   
};

const saveNotes = function(notes){
    try {
        fs.writeFileSync('notes.json',JSON.stringify(notes1));
    } catch (e){
        console.log(e);
    }

};

const loadNotes = function(){
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString());
        
    }catch (e) {
        return [];
    }
    //const data = JSON.parse(fs.readFileSync('notes.json').toString());
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};