// import { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import ResizableAndDraggableImage from './ResizableAndDraggableImage';

// const DesignCreator = () => {
//   const [housePhoto, setHousePhoto] = useState(null);
//   const [doorPhotos, setDoorPhotos] = useState([]);
//   const [designPreview, setDesignPreview] = useState(false);

//   const onDropHouse = useCallback((acceptedFiles) => {
//     setHousePhoto(acceptedFiles[0]);
//   }, []);

//   const onDropDoor = useCallback((acceptedFiles) => {
//     setDoorPhotos((prevPhotos) => [...prevPhotos, ...acceptedFiles]);
//   }, []);

//   const { getRootProps: getHouseRootProps, getInputProps: getHouseInputProps } = useDropzone({
//     onDrop: onDropHouse,
//     accept: 'image/*',
//     multiple: false,
//   });

//   const { getRootProps: getDoorRootProps, getInputProps: getDoorInputProps } = useDropzone({
//     onDrop: onDropDoor,
//     accept: 'image/*',
//     multiple: true,
//   });

//   const handleResize = (index, event, { size }) => {
//     // Handle resize logic
//     console.log(`Resized image at index ${index}:`, size);
//   };

//   const handleDrag = (index, event, { deltaX, deltaY }) => {
//     // Handle drag logic
//     console.log(`Dragged image at index ${index}:`, deltaX, deltaY);
//   };

//   const handleImageDelete = (index) => {
//     const newDoorPhotos = [...doorPhotos];
//     newDoorPhotos.splice(index, 1);
//     setDoorPhotos(newDoorPhotos);
//   };

//   const handleDoorImageDelete = (index) => {
//     const newDoorPhotos = [...doorPhotos];
//     newDoorPhotos.splice(index, 1);
//     setDoorPhotos(newDoorPhotos);
//   };

//   const handleDesignPreview = () => {
//     setDesignPreview(!designPreview);
//   };

//   return (
//     <div>
//       <div>
//         <p>House Photo</p>
//         <div {...getHouseRootProps()} style={dropzoneStyle}>
//           <input {...getHouseInputProps()} />
//           {housePhoto ? (
//             <ResizableAndDraggableImage
//               key={0} // or use a unique identifier
//               image={housePhoto}
//               onResize={(event, { size }) => handleResize(0, event, { size })}
//               onDrag={(event, { deltaX, deltaY }) => handleDrag(0, event, { deltaX, deltaY })}
//               onDelete={() => handleImageDelete(0)}
//               isHousePhoto={true}
//             />
//           ) : (
//             // eslint-disable-next-line react/no-unescaped-entities
//             <p>Drag 'n' drop a house photo here, or click to select a file</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <p>Door Photos</p>
//         <div {...getDoorRootProps()} style={dropzoneStyle}>
//           <input {...getDoorInputProps()} />
//           {doorPhotos.length > 0 ? (
//             <div style={photoListStyle}>
//               {doorPhotos.map((photo, index) => (
//                 <ResizableAndDraggableImage
//                   key={index}
//                   image={photo}
//                   onResize={(event, { size }) => handleResize(index, event, { size })}
//                   onDrag={(event, { deltaX, deltaY }) => handleDrag(index, event, { deltaX, deltaY })}
//                   onDelete={() => handleDoorImageDelete(index)}
//                   isHousePhoto={false}
//                 />
//               ))}
//             </div>
//           ) : (
//             // eslint-disable-next-line react/no-unescaped-entities
//             <p>Drag 'n' drop door photos here, or click to select files</p>
//           )}
//         </div>
//       </div>
//       <button onClick={handleDesignPreview}>Toggle Design Preview</button>
//       {designPreview && (
//         <div>
//           <p>Design Preview</p>
//           <div style={designPreviewStyle}>
//             <ResizableAndDraggableImage
//               image={housePhoto}
//               onResize={(event, { size }) => handleResize(0, event, { size })}
//               onDrag={(event, { deltaX, deltaY }) => handleDrag(0, event, { deltaX, deltaY })}
//             />
//             {doorPhotos.map((door, index) => (
//               <ResizableAndDraggableImage
//                 key={index}
//                 image={door}
//                 onResize={(event, { size }) => handleResize(index, event, { size })}
//                 onDrag={(event, { deltaX, deltaY }) => handleDrag(index, event, { deltaX, deltaY })}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Styles
// const dropzoneStyle = {
//   border: '2px dashed #cccccc',
//   borderRadius: '4px',
//   padding: '20px',
//   textAlign: 'center',
//   cursor: 'pointer',
// };

// const photoListStyle = {
//   marginTop: '20px',
//   display: 'flex',
//   flexWrap: 'wrap',
// };

// const designPreviewStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
// };

// export default DesignCreator;
