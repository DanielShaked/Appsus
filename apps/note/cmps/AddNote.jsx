
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
   
    onSetType = (type) => {        
        this.setState({  type });            
    }

    onAddNote = () => {
        const { value, type } = this.state;
        if (!value || !type) return;
        this.props.addNote(value, type);
        this.resetInput();
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.onAddNote();
    }
    
    resetInput = () => {
        this.setState({value: ''})
    }
    
   
    render() {
        const buttonsIcons = [<i onClick={() => this.onSetType('note-video')} className="fab fa-youtube"></i>,
            <i onClick={() => this.onSetType('note-img')} className="far fa-images"></i>,
            <i onClick={() => this.onSetType('note-todos')}  className="far fa-list-alt"></i>]
        const buttons = buttonsIcons.map((icon, idx) => <button
            className="button-type" key={idx} >{icon}</button>)        
        const { value } = this.state;
        
        return (
            <section className="add-note">
                <div className="add-input">
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="value"
                            value={value}
                            placeholder="Enter new note here..."
                            onChange={this.handleChange}
                            onBlur={this.onAddNote}/>
                            {buttons}
                        </form>                    
                </div>
            </section>
        )
    }


}