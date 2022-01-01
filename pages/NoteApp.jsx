import { AddNote } from "../apps/note/cmps/AddNote.jsx"
import { NoteHeader } from "../apps/note/cmps/NoteHeader.jsx"
import { NoteList } from "../apps/Note/cmps/NoteList.jsx"
import { SearchNote } from "../apps/note/cmps/SearchNote.jsx"
import { noteService } from "../apps/Note/services/note.service.js"


export class NoteApp extends React.Component {

    state = {
        pinnedNotes: null,
        unPinnedNotes: null,
        filterChar: null,
    }


    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query(this.state.filterChar).then(({ pinnedNotes, unPinnedNotes }) => {
            this.setState({pinnedNotes, unPinnedNotes})
        })
    }


    updateNoteContent = (noteId, noteType, txt) => {
        noteService.updateNoteContent(noteId, noteType, txt)
            .then(this.loadNotes());
        
    }
    
    addNote = (value, type) => {
        noteService.createNote(value, type)
            .then(this.loadNotes());            
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.loadNotes());
    }

    updateTodoContent = (todoId,noteId,value) => {
        noteService.updateTodoContent(todoId,noteId, value)
            .then(this.loadNotes());
    }

    toggleDoneTodo = (todoId, noteId) => {
        noteService.toggleDone(todoId, noteId)
            .then(this.loadNotes());
    }

    addTodo = (value, noteId) => {        
        noteService.addTodo(value, noteId)
            .then(this.loadNotes());
    }

    removeTodo = (todoId, noteId) => {
        noteService.removeTodo(todoId, noteId)
            .then(this.loadNotes());
    }

    
    changeBgColor = (color, noteId) => {
        noteService.changeNoteBgColor(color, noteId)
            .then(this.loadNotes());
    
    }

    onTogglePinedNote = (noteId,isPinned) => {
        noteService.togglePinnedNote(noteId, isPinned)
            .then(this.loadNotes());
    }

    onSetFilter = (value) => {
        console.log('value-fronNoteApp:', value);
        
        this.setState({filterChar:value}, this.loadNotes)
    }

    render() {
        const { pinnedNotes,unPinnedNotes } = this.state;
        
        if (!pinnedNotes  || !unPinnedNotes) return <h1>no notes</h1>
        return (
            <section className="note-app ">
                <NoteHeader onSetFilter={this.onSetFilter}/>
                {/* <SearchNote/> */}
                <div className="main-layout">
                <AddNote addNote={this.addNote} />
                <span className="sub-title">pinned notes:</span>
                    <NoteList
                    updateTodoContent={this.updateTodoContent}
                    removeTodo={this.removeTodo}
                    addTodo={this.addTodo}
                    toggleDoneTodo={this.toggleDoneTodo}
                    updateNoteContent={this.updateNoteContent}
                    onTogglePinedNote={this.onTogglePinedNote}
                    removeNote={this.removeNote}
                    changeBgColor={this.changeBgColor}
                    notes={pinnedNotes} />
                
                <span className="sub-title">other notes:</span>
                    <NoteList
                    updateTodoContent={this.updateTodoContent}
                    removeTodo={this.removeTodo}
                    addTodo={this.addTodo}
                    toggleDoneTodo={this.toggleDoneTodo}
                    updateNoteContent={this.updateNoteContent}
                    onTogglePinedNote={this.onTogglePinedNote}
                    removeNote={this.removeNote}
                    changeBgColor={this.changeBgColor}
                    notes={unPinnedNotes} />

                </div>
            </section>
        )
    }


}