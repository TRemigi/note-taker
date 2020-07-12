const path = require('path');
const fs = require('fs');

// create id for new notes
function createId(note) {
    return note.title.replace(/\s+/g, '');
};

// add new note to database
function addNote(newNote, array) {
    newNote.id = createId(newNote);
    array.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: array }, null, 2)
    );
    return newNote;
}

// check id of note then send to be deleted
function idChecker(noteId, array) {
    array.forEach((note, index) => {
        if (note.id === noteId) {
            serverDeleteNote(index, array);
        }
    })
}

// delete note from database
function serverDeleteNote(index, array) {
    array.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: array }, null, 2)
    );
    return array;
}

module.exports = { addNote, serverDeleteNote, idChecker }