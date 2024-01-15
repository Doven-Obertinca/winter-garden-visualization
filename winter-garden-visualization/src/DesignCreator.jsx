import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ResizableAndDraggableImage from './ResizableAndDraggableImage';

const DesignCreator = () => {
  const [housePhoto, setHousePhoto] = useState(null);
  const [doorPhotos, setDoorPhotos] = useState([]);
  const [designPreview, setDesignPreview] = useState(false);

  const onDropHouse = useCallback((acceptedFiles) => {
    setHousePhoto(acceptedFiles[0]);
  }, []);

  const onDropDoor = useCallback((acceptedFiles) => {
    setDoorPhotos((prevPhotos) => [...prevPhotos, ...acceptedFiles]);
  }, []);

  const { getRootProps: getHouseRootProps, getInputProps: getHouseInputProps } = useDropzone({
    onDrop: onDropHouse,
    accept: 'image/*',
    multiple: false,
  });

  const { getRootProps: getDoorRootProps, getInputProps: getDoorInputProps } = useDropzone({
    onDrop: onDropDoor,
    accept: 'image/*',
    multiple: true,
  });

  const handleResize = () => {
    // Handle resize logic
    console.log('Resized!');
  };

  const handleDrag = () => {
    // Handle drag logic
    console.log('Dragged!');
  };

  const handleDesignPreview = () => {
    setDesignPreview(!designPreview);
  };

  return (
    <div>
      <div>
        <p>House Photo</p>
        <div {...getHouseRootProps()} style={dropzoneStyle}>
          <input {...getHouseInputProps()} />
          {housePhoto ? (
            <ResizableAndDraggableImage image={housePhoto} onResize={handleResize} onDrag={handleDrag} />
          ) : (
            // eslint-disable-next-line react/no-unescaped-entities
            <p>Drag 'n' drop a house photo here, or click to select a file</p>
          )}
        </div>
      </div>
      <div>
        <p>Door Photos</p>
        <div {...getDoorRootProps()} style={dropzoneStyle}>
          <input {...getDoorInputProps()} />
          {doorPhotos.length > 0 ? (
            <div style={photoListStyle}>
              {doorPhotos.map((photo, index) => (
                <ResizableAndDraggableImage key={index} image={photo} onResize={handleResize} onDrag={handleDrag} />
              ))}
            </div>
          ) : (
            // eslint-disable-next-line react/no-unescaped-entities
            <p>Drag 'n' drop door photos here, or click to select files</p>
          )}
        </div>
      </div>
      <button onClick={handleDesignPreview}>Toggle Design Preview</button>
      {designPreview && (
        <div>
          <p>Design Preview</p>
          <div style={designPreviewStyle}>
            <ResizableAndDraggableImage image={housePhoto} onResize={handleResize} onDrag={handleDrag} />
            {doorPhotos.map((door, index) => (
              <ResizableAndDraggableImage key={index} image={door} onResize={handleResize} onDrag={handleDrag} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const photoListStyle = {
  marginTop: '20px',
  display: 'flex',
  flexWrap: 'wrap',
};

const designPreviewStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

export default DesignCreator;
