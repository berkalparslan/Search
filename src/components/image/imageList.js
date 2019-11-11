import React from 'react';
import './imageList.css'

const ImageList = ({images}) => {
    const preparedImageList = images.map(image=>{
        return(
            <img alt={image.id} key={image.id}  src={image.urls.small} />
        )
    })
    return(

        <div className='image-list-container'>
            <images>{preparedImageList}</images>
        </div>
    )
}

export default ImageList;