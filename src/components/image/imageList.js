import React from 'react';

const ImageList = ({images}) => {
    const preparedImageList = images.map(image=>{
        return(
            <img alt={image.id} src={image.urls.small} />
        )
    })
    return(
        <div>
            {preparedImageList}
        </div>
    )
}

export default ImageList;