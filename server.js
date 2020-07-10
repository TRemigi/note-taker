const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const{ notes } = require('./db/db.json');
const { addNote, serverDeleteNote } = require('./lib/notes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    
    addNote(newNote, notes);
    res.json(newNote)
});

app.delete('/api/notes/:id', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});