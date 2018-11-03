//Create our image list component
//Import React
import React from 'react';
import ImageDetail from './image_detail'; //dont use .js here
//Create our component
const ImageList = () => {
  return (
    <ul>
     <ImageDetail />
     </ul>
  );
};

//Export our component
export default ImageList;
