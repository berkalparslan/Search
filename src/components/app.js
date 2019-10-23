import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import './app.css';

class App extends Component {

    onSearchImage(searchWord){
        console.log('App: ' + searchWord)
    }
    
    render(){
        return (
        <div className='app-container'>
            <SearchBar onSearchImage ={this.onSearchImage} />
        </div>
    )
}
};

export default App;