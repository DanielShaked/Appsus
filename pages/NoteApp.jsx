import { AddNote } from "../apps/note/cmps/AddNote.jsx"
import { NoteList } from "../apps/Note/cmps/NoteList.jsx"
import { noteService } from "../apps/Note/services/note.service.js"


export class NoteApp extends React.Component {

    state = {
        notes: null,
        pinnedNotes: null,

    }
    
    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        noteService.query().then((notes) => {
            this.setState({notes})
        })
    }

    addNote = (value, type) => {
        noteService.createNote(value, type)
            .then(this.loadNotes())               
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.loadNotes())
        
    }


    
     onChangeBgColor = (color, noteId) => {
         noteService.changeNoteBgColor(color, noteId)
            .then(this.loadNotes())
    
    }

    render() {
        const { notes } = this.state;
        console.log('notes from NoteApp render:', notes);
        
        if (!notes) return <h1>no notes</h1>
        return (
            <section className="note-app">
                <h1>Note app!</h1>
                <AddNote addNote={this.addNote}/>
                <NoteList removeNote={this.removeNote}
                    onChangeBgColor={this.onChangeBgColor}
                    notes={notes} />
            </section>
        )
    }


}