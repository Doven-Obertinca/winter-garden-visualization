import { useRef } from "react";
import { ResizableBox } from "react-resizable";
import { DraggableCore } from "react-draggable";
import PropTypes from "prop-types";
import "./ResizableImage.css";

const ResizableAndDraggableImage = ({
  image,
  onResize,
  onDrag,
  onDelete,
  isHousePhoto,
}) => {
  const imageRef = useRef();

  const handleResize = (event, { size }) => {
    if (onResize) {
      onResize(event, { size });
    }
  };

  const handleDrag = (event, { deltaX, deltaY }) => {
    if (onDrag) {
      onDrag(event, { deltaX, deltaY });
    }
  };

  return (
    <DraggableCore onDrag={handleDrag}>
      <ResizableBox
        width={isHousePhoto ? 400 : 200} // Set width based on whether it's a house photo or door photo
        height={200}
        onResize={handleResize}
        handle={<i style={{ cursor: "grab" }}>Resize Here</i>}
        draggableOpts={{ grid: [1, 1] }} // Add this line to enable dragging with precision
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            ref={imageRef}
            src={URL.createObjectURL(image)}
            alt="Resizer"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <button
            onClick={onDelete}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              cursor: "pointer",
            }}>
            Delete
          </button>
        </div>
      </ResizableBox>
    </DraggableCore>
  );
};

ResizableAndDraggableImage.propTypes = {
  image: PropTypes.object.isRequired,
  onResize: PropTypes.func,
  onDrag: PropTypes.func,
  onDelete: PropTypes.func,
  isHousePhoto: PropTypes.bool.isRequired,
};

export default ResizableAndDraggableImage;
