
import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes, removeNote, changeBgColor }) {
    
    if (!notes.length) return <h1>There are no notes to show</h1>
    return (
        <section className="note-list">
            {notes.map(note =>
                <NotePreview
                    changeBgColor={changeBgColor}
                    removeNote={removeNote}
                    key={note.id}
                    note={note} />)}
        </section>
    )
}