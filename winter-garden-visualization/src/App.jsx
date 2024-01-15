import { useState } from 'react';
import ResizableAndDraggableImage from './ResizableAndDraggableImage';

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

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload</button>

      {images.map((image, index) => (
        <ResizableAndDraggableImage
          key={index}
          image={image}
          onResize={(event, { size }) => {
            // Handle resize logic
            console.log('Resized:', size);
          }}
          onDrag={(event, { deltaX, deltaY }) => {
            // Handle drag logic
            console.log('Dragged:', deltaX, deltaY);
          }}
          onDelete={() => handleImageDelete(index)}
        />
      ))}
    </div>
  );
};

export default App;
