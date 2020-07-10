const path = require('path');
const fs = require('fs');

function createId(note) {
    return note.title.replace(/\s+/g, '');
};

function addNote(newNote, array) {
    console.log(newNote, array);
    newNote.id = createId(newNote);
    array.push(newNote);
    console.log(array);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: array }, null, 2)
    );
    return newNote;
}

function serverDeleteNote(newNote, array) {
    console.log(newNote, array);
    newNote.id = createId(newNote);
    array.push(newNote);
    console.log(array);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: array }, null, 2)
    );
    return newNote;
}

module.exports = { addNote, serverDeleteNote }