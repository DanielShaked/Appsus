import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'


export const noteService = {
    query

}

const STORAGE_KEY = 'notesDB';
let gNotes;



function query() {
    const notes = _loadNotesFromStorage()
    console.log('notes from service:', notes);

    // if (!filterBy) return Promise.resolve(cars)
    // const filteredCars = _getFilteredCars(cars, filterBy)
    return Promise.resolve(notes)

}


createNotes()

function createNotes() {
    gNotes = _loadNotesFromStorage();
    if (!gNotes || !gNotes.length) {

        gNotes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
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
                    backgroundColor: "#00d"
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
                }
            }
        ];

    }
    console.log('test');
    _saveNotesToStorage(gNotes)
}






// Locals Functions
function _saveNotesToStorage(data) {
    storageService.saveToStorage(STORAGE_KEY, data)
}


function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}