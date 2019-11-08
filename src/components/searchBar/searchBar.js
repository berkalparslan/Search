import React, {Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props) {
        
        super(props);
        this.state={
            searchWord: ''
        }

        this.textChanged = this.textChanged.bind(this);
        this.searchImage = this.searchImage.bind(this);
    }

    textChanged(event) {
        this.setState({
            searchWord: event.target.value
        })
    }
    
    searchImage(){
        this.props.onSearchImage(this.state.searchWord);
    }
    render() {
        return(
            <div className='search-bar-container ui input'>
                <input type='text' 
                       placeholder='Ara..' 
                       value = {this.state.searchWord}
                       onChange={ this.textChanged }
                       onKeyPress={(e)=>{
                           if(e.key === 'Enter'){
                               this.searchImage();
                           }
                       }} />
                <button className='ui icon button'
                        onClick={this.searchImage} >
                <i className='search icon'></i>
                </button>
            </div>
        )
    }
}

export default SearchBar;