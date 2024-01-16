import { useState } from "react";
import ResizableAndDraggableImage from "./ResizableAndDraggableImage";
// import DesignCreator from './DesignCreator';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      setImages([...images, selectedImage]);
      setSelectedImage(null);
    }
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleResize = (index, event, { size }) => {
    // Handle resize logic
    console.log(`Resized image at index ${index}:`, size);
  };

  const handleDrag = (index, event, { deltaX, deltaY }) => {
    // Handle drag logic
    console.log(`Dragged image at index ${index}:`, deltaX, deltaY);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload</button>

      {images.map((image, index) => (
        <ResizableAndDraggableImage
          key={index}
          index={index}
          image={image}
          onResize={(event, { size }) => handleResize(index, event, { size })}
          onDrag={(event, { deltaX, deltaY }) =>
            handleDrag(index, event, { deltaX, deltaY })
          }
          onDelete={() => handleImageDelete(index)}
          isHousePhoto={true}
        />
      ))}
      {/* <DesignCreator /> */}
    </div>
  );
};

export default App;
