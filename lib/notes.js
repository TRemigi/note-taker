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

function idChecker(noteId, array) {
    array.forEach((note, index) => {
        if (note.id === noteId) {
            console.log(`noteDeleting index: ${index}`);
            serverDeleteNote(index, array);
        }
    })
}

function serverDeleteNote(index, array) {
    console.log(`array before: ${array}`);
    array.splice(index, 1);
    console.log(`array after: ${array}`);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: array }, null, 2)
    );
    return array;
}

module.exports = { addNote, serverDeleteNote, idChecker }