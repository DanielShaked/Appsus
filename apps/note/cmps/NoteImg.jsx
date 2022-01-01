

export function NoteImg({dataProps}) {
    const { note } = dataProps;
    return (
        <section className="note-img">
            <img className="note-img" src={note.info.url} alt="" />

        </section>
    )

}