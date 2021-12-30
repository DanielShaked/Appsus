
export function NoteVideo({dataProps}) {
    
    const { note } = dataProps;
    return (
        <section className="note-video">
            <iframe width="270px" height="220px"
                src={note.info.url} frameBorder="0"
                allow="autoplay"></iframe>
           
        </section>
    )

}