export class SearchNote extends React.Component{

    state = {
        value: '',
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));            
    }
    render() {
        const { value } = this.state;
        
        return (
            <div className="search-container">
                <form>
                    <input
                        type="search"
                        id="search-note"
                        name="value"
                        value={value}
                        onChange={this.handleChange} />
                    <label htmlFor="search-note"><i className="fas fa-search"></i></label>
                </form>
            </div>
        )
    }

}