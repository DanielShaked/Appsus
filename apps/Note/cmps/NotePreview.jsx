
import { NoteEditor } from "./NoteEditor.jsx";
import { NoteImg } from "./NoteImg.jsx";
import { NoteTodos } from "./NoteTodos.jsx";
import { NoteTxt } from "./NoteTxt.jsx";
import { NoteVideo } from "./NoteVideo.jsx";



export function NotePreview({ note, removeNote, changeBgColor }) {

    const dataProps = {
        removeNote,
        changeBgColor,
        note
    }

    function getCmpByType(type) {
        switch (type) {
            case 'note-txt':
                return <NoteTxt dataProps={{ ...dataProps }}  />
            case 'note-todos':
                return <NoteTodos dataProps={{ ...dataProps }}/>
            case 'note-img':
                return <NoteImg dataProps={{ ...dataProps }}  />
            case 'note-video':
                return <NoteVideo dataProps={{...dataProps}} />
        }
    }


    function onRemoveNote() {
        removeNote(note.id);
        // TODO: busService user-msg
    }
    const { backgroundColor } = note.style;
    return (
        <section style={{ backgroundColor }} className="note-preview">
            <i className="fas fa-thumbtack"></i>
            {getCmpByType(note.type)}
            <NoteEditor
                removeNote={removeNote}
                changeBgColor={changeBgColor}
                note={note} /> 
        </section>
    )
}

