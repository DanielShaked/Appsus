
import {NoteEditor} from "./NoteEditor.jsx";

export function NotePreview({ note, removeNote, onChangeBgColor }) {
    console.log('notes-props from NotePreview:', note);

    function onRemoveNote() {
        removeNote(note.id);
        // TODO: busService user-msg
    }
    const { backgroundColor } = note.style;
    return (
        <section style={{ backgroundColor }} className="note-preview">
            <div></div>
            note : {note.info.txt}
            
            <NoteEditor
                onRemoveNote={onRemoveNote}
                onChangeBgColor={onChangeBgColor}
                note={note} />
        </section>
    )
}