import React, {Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            searchWord: ''
        }

        this.textChanged = this.textChanged.bind(this);
    }

    textChanged(event) {
        this.setState({
            searchWord: event.target.value
        })
    }
    
    render() {
        return(
            <div className='search-bar-container ui input'>
                <input type='text' 
                       placeholder='Search...' 
                       value = {this.state.searchWord}
                       onChange={ this.textChanged } />
            </div>
        )
    }
}

export default SearchBar;