import { ColorPicker } from "./ColorPicker.jsx";


export class NoteEditor extends React.Component {
    state = {
        isColorPickerOpen: false,
    }

    
    onRemoveNote = () => {
        this.props.removeNote(this.props.note.id);
        // TODO: busService user-msg
    }
    
    
    onToggleColorPicker = (isOpen) => {
        this.setState({isColorPickerOpen: isOpen})
    }
    
    render() {
        const { note, removeNote, changeBgColor} = this.props;
        const { isColorPickerOpen } = this.state;
        console.log('isColorPickerOpen:', isColorPickerOpen);
        
        return(
            <section className="note-editor">
                <i onClick={() => this.onToggleColorPicker(true)} className="fas fa-palette"></i>
                {(isColorPickerOpen)
                    && <ColorPicker
                        changeBgColor={changeBgColor}
                        onToggleColorPicker={this.onToggleColorPicker}
                        id={note.id} />}
                <i onClick={this.onRemoveNote} className="far fa-trash-alt"></i>
            </section>
        )
    }

}
