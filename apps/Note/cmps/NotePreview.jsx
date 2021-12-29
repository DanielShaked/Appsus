
import { NoteEditor } from "./NoteEditor.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";
import { NoteTxt } from "./NoteTxt.jsx";
import { NoteVideo } from "./NoteVideo.jsx";



export function NotePreview({ note, removeNote, onChangeBgColor }) {

    const dataProps = {
        removeNote,
        onChangeBgColor,
    }

    function getCmpByType(type) {
        switch (type) {
            case 'note-txt':
                return <NoteTxt dataProps={{ ...dataProps }} note={note} />
            case 'note-todos':
                return <NoteTodos dataProps={{ ...dataProps }} note={note}/>
            case 'note-img':
                return <NoteImg dataProps={{ ...dataProps }} note={note} />
            case 'note-video':
                return <NoteVideo dataProps={{...dataProps}} note={note}/>
        }
    }


    function onRemoveNote() {
        removeNote(note.id);
        // TODO: busService user-msg
    }
    const { backgroundColor } = note.style;
    return (
        <section style={{ backgroundColor }} className="note-preview">
            {getCmpByType(note.type)}
            {/* <div></div>
            <i className="fas fa-thumbtack"></i>
            <div className="note-content">
            {note.info.txt}
            </div>
            
            <NoteEditor
                onRemoveNote={onRemoveNote}
                onChangeBgColor={onChangeBgColor}
                note={note} /> */}
        </section>
    )
}