import { ColorPicker } from "./ColorPicker.jsx";


export class NoteEditor extends React.Component {
    state = {
        isColorPickerOpen: false,
    }


     onRemoveNote = ()  => {
        removeNote(this.props.note.id);
        // TODO: busService user-msg
    }


    onToggleColorPicker = (isOpen) => {
        this.setState({isColorPickerOpen: isOpen})
    }

    render() {
        const { note, onRemoveNote, onChangeBgColor} = this.props;
        const { isColorPickerOpen } = this.state;
        return(
            <section className="note-editor">
                <i onClick={() => this.onToggleColorPicker(true)} className="fas fa-palette"></i>
                {(isColorPickerOpen)
                    && <ColorPicker
                        onChangeBgColor={onChangeBgColor}
                        onToggleColorPicker={this.onToggleColorPicker}
                        id={note.id} />}
                <i onClick={onRemoveNote} className="far fa-trash-alt"></i>
            </section>
        )
    }

}
