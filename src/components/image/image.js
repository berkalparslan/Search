import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            spanCount:1
        }
    }

    componentDidMount() {
        console.log(this.myRef);
        this.myRef.current.addEventListener('load',()=>{
            const spanCount = this.myRef.current.clientHeight / 5;
            this.setState({
                spanCount
            })
        })
    }
    
    
  render() {
    const {image} = this.props;
    return (
        <img style={{
            gridRowEnd : `span ${this.state.spanCount}`
        }} ref={this.myRef} alt={image.description}  src={image.urls.small} />
    );
  }
}
