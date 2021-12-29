import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { func } from 'prop-types';


export const noteService = {
    query,
    createNote,
    removeNote,
    changeNoteBgColor

}

const STORAGE_KEY = 'notesDB';




function query() {
    const notes = _loadNotesFromStorage()
    console.log('notes from service:', notes);

    // if (!filterBy) return Promise.resolve(cars)
    // const filteredCars = _getFilteredCars(cars, filterBy)
    return Promise.resolve(notes)

}


createNotes()


function removeNote(noteId) {
    console.log('noteId:', noteId);
    let notes = _loadNotesFromStorage();
    notes = notes.filter(note => note.id !== noteId);
    _saveNotesToStorage(notes);
    return Promise.resolve();

}


function changeNoteBgColor(color, noteId) {
    const notes = _loadNotesFromStorage();
    let noteIdx = notes.findIndex(note => note.id === noteId);
    notes[noteIdx].style.backgroundColor = color;
    _saveNotesToStorage(notes);
    return Promise.resolve()
}

function createNote(txt, type) {
    let notes = _loadNotesFromStorage()
    let note = {
        id: utilService.makeId(),
        type,
        isPinned: true,
        info: {
            txt: txt,
        },
        style: {
            backgroundColor: "#fff475"
        }

    }
    notes.unshift(note);
    _saveNotesToStorage(notes);
    return Promise.resolve()

}

function createNotes() {
    let notes = _loadNotesFromStorage();
    if (!notes || !notes.length) {

        notes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#fff475"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#fff475"
                }

            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: "#fff475"
                }

            }
        ];

    }
    console.log('test');
    _saveNotesToStorage(notes)
}






// Locals Functions
function _saveNotesToStorage(data) {
    storageService.saveToStorage(STORAGE_KEY, data)
}


function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}