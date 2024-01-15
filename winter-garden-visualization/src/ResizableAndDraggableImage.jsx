import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ResizableBox } from 'react-resizable';
import { DraggableCore } from 'react-draggable';

const ResizableAndDraggableImage = ({ image, onResize, onDrag, onDelete }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const resizableBoxRef = useRef(null);

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
    onDrag(e, ui);
  };

  const handleResize = (e, { size }) => {
    onResize(e, { size });
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <DraggableCore bounds="parent" onDrag={handleDrag}>
      <ResizableBox
        width={200}
        height={200}
        handle={<span>Resize</span>}
        axis="both"
        onResize={handleResize}
        ref={resizableBoxRef}
        style={{
          position: 'absolute',
          transform: `translate(${position.x}px, ${position.y}px)`,
          border: '1px solid #ddd',
          overflow: 'hidden',
        }}
      >
        <div>
          <img
            src={image && URL.createObjectURL(image)}
            alt="Resizable and Draggable"
            style={{ width: '100%', height: '100%' }}
          />
          <button onClick={handleDelete} style={{ position: 'absolute', top: 0, right: 0 }}>
            Delete
          </button>
        </div>
      </ResizableBox>
    </DraggableCore>
  );
};

ResizableAndDraggableImage.propTypes = {
  image: PropTypes.instanceOf(File),
  onResize: PropTypes.func,
  onDrag: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ResizableAndDraggableImage;
