
export function NotePreview({note}) {
    console.log('notes-props from NotePreview:', note);

    return (
        <section className="note-preview">
           note : {note.info.txt}
        </section>
    )
}