
export class AddNote extends React.Component {

    state = {
        value: '',
        type: 'note-txt',
        
    }
    
    componentDidMount() {
      
    }

    


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }
   

    onAddNote = () => {
        const { value, type } = this.state;
        if (!value || !type) return;
        this.props.addNote(value, type);
        this.resetInput();
    }
    
    resetInput = () => {
        this.setState({value: '', type:'note-text'})
    }
    
    render() {
        const { value } = this.state;
        console.log('value from addNote:', value);
        
        return (
            <section className="add-note">
                <div className="add-input">
                    <i onClick={this.onAddNote} className="far fa-plus-square"></i>
                    <input
                        type="text"
                        name="value"
                        value={value}
                        placeholder="Enter new note"
                        onChange={this.handleChange}/>
                </div>
            </section>
        )
    }


}