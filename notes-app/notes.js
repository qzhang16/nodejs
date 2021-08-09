const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes...";
};
const addNote = function(title,body) {
    const notes = loadNotes();
    //console.log(notes);
    const dupNotes = notes.filter( function(note) {
        return note.title == title;
    });

    if (dupNotes.length == 0 ){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("a new note added !"));
    } else {
        console.log(chalk.red.inverse("duplicate notes title: " + dupNotes[0].title));
    }

    // notes.push({
    //     title: title,
    //     body: body
    // });
    // saveNotes(notes);
};

const removeNote = function(title){
    const notes = loadNotes();
    const filteredNotes = notes.filter(function(note){
        return note.title != title;
    });

    if (filteredNotes.length < notes.length) {
        console.log(chalk.green.inverse(title, " removed !"))
        saveNotes(filteredNotes);
    } else {
        console.log(chalk.red.inverse(title, "not found !"));
    } 
    
};

const saveNotes = function(notes){
    try {
        fs.writeFileSync('notes.json',JSON.stringify(notes));
    } catch (e){
        console.log(e.toString());
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
    removeNote: removeNote
};