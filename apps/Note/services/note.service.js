import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'
import { func } from 'prop-types';


export const noteService = {
    query,
    createNote,
    removeNote,
    changeNoteBgColor,
    updateNoteContent

}

const STORAGE_KEY = 'notesDB';

createNotes()



function query() {
    const notes = _loadNotesFromStorage()

    // if (!filterBy) return Promise.resolve(cars)
    // const filteredCars = _getFilteredCars(cars, filterBy)
    return Promise.resolve(notes)
}




function removeNote(noteId) {
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

function createNote(value, type) {
    let notes = _loadNotesFromStorage()
    const infoKey = getInfoKeyByType(type);
    console.log('infoKey:', infoKey);

    let note = {
        id: utilService.makeId(),
        type,
        isPinned: true,
        info: {
            [infoKey]: (infoKey === 'urlId') ? utilService.getYoutubeId(value) : value,
        },
        style: {
            backgroundColor: "#fff475"
        }

    }
    notes.unshift(note);
    _saveNotesToStorage(notes);
    return Promise.resolve()

}



function updateNoteContent(noteId, noteType, value) {
    const notes = _loadNotesFromStorage()
    const noteIdx = notes.findIndex(note => note.id === noteId);
    switch (noteType) {
        case 'note-txt':
            notes[noteIdx].info.txt = value;
    }
    console.log('notes:', notes);

    _saveNotesToStorage(notes);
    return Promise.resolve(notes[noteIdx])
}

function getInfoKeyByType(type) {
    switch (type) {
        case 'note-img':
            return 'url'
        case 'note-txt':
            return 'txt'
        case 'note-todos':
            return 'todos'
        case 'note-video':
            return 'urlId'
    }
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
                    url: "https://www.coding-academy.org/images/ca-logo-dark@2x.png",
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
    _saveNotesToStorage(notes)
}






// Locals Functions
function _saveNotesToStorage(data) {
    storageService.saveToStorage(STORAGE_KEY, data)
}


function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}