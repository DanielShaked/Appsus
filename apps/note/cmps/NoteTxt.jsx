import { NoteEditContent } from "./NoteEditContent.jsx"

export class NoteTxt extends React.Component {

    
    state = {
        isEdit:false,
    }
    
    onToggleEdit = (isEdit) => {
        this.setState({ isEdit });
    }
    
    render() {
        const { removeNote, changeBgColor, note } = this.props.dataProps;
        

        return (
            <React.Fragment>
                <div>
                    {(!this.state.isEdit) &&
                        <div onClick={()=>this.onToggleEdit(true)}>
                            {note.info.txt}    
                        </div>}
                    {(this.state.isEdit) && <NoteEditContent
                                            onToggleEdit={this.onToggleEdit}
                                            dataProps={this.props.dataProps} />}

                   
                </div>   
                </React.Fragment>


)
                


    }




}