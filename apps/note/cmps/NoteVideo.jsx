
export function NoteVideo({dataProps}) {
    
    const { note } = dataProps;
    
    return (
        <section className="note-video" contentEditable>
            <iframe width="270px" height="220px"
                src={`//www.youtube.com/embed/${note.info.urlId}`} frameBorder="0"
                allow="autoplay"></iframe>
           
        </section>
    )

}