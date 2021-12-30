
export function NoteVideo({dataProps}) {
    
    const { note } = dataProps;
    console.log('note.info.urlId:', note.info.urlId);
    
    return (
        <section className="note-video">
            <iframe width="270px" height="220px"
                src={`//www.youtube.com/embed/${ note.info.urlId}`} frameBorder="0"
                allow="autoplay"></iframe>
           
        </section>
    )

}