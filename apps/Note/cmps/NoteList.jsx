
import { NotePreview } from "./NotePreview.jsx"

                    
export function NoteList({ notes,updateTodoContent, removeNote,addTodo,toggleDoneTodo,removeTodo, changeBgColor, updateNoteContent, onTogglePinedNote }) {
   
    
    if (!notes.length) return <h1>There are no notes to show</h1>
    return (
        <section className="note-list">
            {notes.map(note =>
                <NotePreview
                updateTodoContent={updateTodoContent}
                removeTodo={removeTodo}
                addTodo={addTodo}
                toggleDoneTodo={toggleDoneTodo}
                onTogglePinedNote={onTogglePinedNote}
                updateNoteContent = {updateNoteContent}
                changeBgColor={changeBgColor}
                removeNote={removeNote}
                key={note.id}
                note={note} />)}
        </section>
    )
}