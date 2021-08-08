const fs = require('fs');

const getNotes = function() {
    return "Your notes...";
};
const addNote = function(title,body) {
    const notes = loadNotes();
    console.log(notes);

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
    addNote: addNote
};