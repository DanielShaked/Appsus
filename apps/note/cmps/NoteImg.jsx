

export function NoteImg({dataProps, note}) {
    console.log('dataProps:', dataProps);
    console.log('note:', note);
    console.log('note:', note.info.url);
    

    return (
        <section className="note-img">
            note Img!!!
            <img src={note.info.url} alt="" />

        </section>
    )

}