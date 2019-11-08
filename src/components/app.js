import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import axios from 'axios';
import './app.css';
import ImageList from './image/imageList';

class App extends Component {

    state= { 

        images: []
    }
    onSearchImage = async (searchWord) => {        
        const url = 'https://api.unsplash.com/search/photos';
        const result = await axios.get(url, {
            params:{
                
                query: searchWord,
            },
            headers: {

                Authorization: 'Client-ID 74367e18b626e1ca22d4ee20c1cfa2dd8b3958d15852ef2175d28b23b1e843f1'
            }
        })
        console.log(result.data.results);
        this.setState({
            images: result.data.results
        })
    }

    render(){
        return ( 

        <div className='app-container'>
            <SearchBar onSearchImage ={this.onSearchImage} />
            <ImageList images= {this.state.images} />
        </div>
    )
}
};

export default App;