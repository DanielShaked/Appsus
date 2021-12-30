import { AddNote } from "../apps/note/cmps/AddNote.jsx"
import { NoteList } from "../apps/Note/cmps/NoteList.jsx"
import { SearchNote } from "../apps/note/cmps/SearchNote.jsx"
import { noteService } from "../apps/Note/services/note.service.js"


export class NoteApp extends React.Component {

    state = {
        notes: null,
        pinnedNotes: null,

    }
    
    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query().then((notes) => {
            this.setState({notes})
        })
    }


    updateNoteContent = (noteId, noteType, txt) => {
        noteService.updateNoteContent(noteId, noteType, txt)
            .then(this.loadNotes())
        
    }
    
    addNote = (value, type) => {
        noteService.createNote(value, type)
            .then(this.loadNotes())               
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.loadNotes())
    }


    
    changeBgColor = (color, noteId) => {
         noteService.changeNoteBgColor(color, noteId)
            .then(this.loadNotes())
    
    }

    render() {
        const { notes } = this.state;
        
        if (!notes) return <h1>no notes</h1>
        return (
            <section className="note-app">
                <AddNote addNote={this.addNote} />
                <SearchNote/>
                <NoteList
                    updateNoteContent={this.updateNoteContent}
                    removeNote={this.removeNote}
                    changeBgColor={this.changeBgColor}
                    notes={notes} />
            </section>
        )
    }


}