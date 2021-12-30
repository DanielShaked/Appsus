
export class AddNote extends React.Component {

    state = {
        value: '',
        type: 'note-txt',
        placeholder: 'Enter new note here...'
        
    }
    
    componentDidMount() {
      
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }
   
    onSetType = (type) => {        
        this.setState({ type });
        const placeholder = this.changePlaceholder(type)
        this.setState({placeholder})
    }

    changePlaceholder(type) {
        switch (type) {
            case 'note-img':
                return 'Enter image url...'
            case 'note-video':
                return 'Enter video url...'
            }
           
    }

    onAddNote = () => {
        const { value, type } = this.state;
        if (!value || !type) return;
        this.props.addNote(value, type);
        this.resetInput();
        // this.setState({placeholder:'Enter new note here...'})
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
        const { value,placeholder } = this.state;
        
        return (
            <section className="add-note">
                <div className="add-input">
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="value"
                            value={value}
                            placeholder={placeholder}
                            onChange={this.handleChange}
                            onBlur={this.onAddNote}/>
                            {buttons}
                        </form>                    
                </div>
            </section>
        )
    }


}