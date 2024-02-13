import { useState } from "react";
import Draggable from "react-draggable";

import "./Tangrams.css";

const shapes = [
  "square",
  "triangle1",
  "triangle2",
  "triangle3",
  "triangle4",
  "triangle5",
  "parallelogram"
];

const Tangrams = () => {
  const [deg, setDeg] = useState({
    square: 45,
    triangle1: 45,
    triangle2: 45,
    triangle3: 180,
    triangle4: 45,
    triangle5: 90,
    parallelogram: 45
  });

  const [isDragging, setIsDragging] = useState(false);

  const onDrag = () => {
    setIsDragging(true);
  };
  const onStop = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  };

  const handleClick = shape => () => {
    if (isDragging) return;
    setDeg(prevDeg => {
      return { ...prevDeg, [shape]: (prevDeg[shape] + 45) % 360 };
    });
  };

  return (
    <div className="tangrams">
      {shapes.map(shape => {
        return (
          <Draggable onDrag={onDrag} onStop={onStop}>
            <div className="block" onClick={handleClick(shape)}>
              <div
                id={shape}
                style={
                  shape === "parallelogram"
                    ? { transform: `rotate(${deg[shape]}deg) skew(45deg)` }
                    : { transform: `rotate(${deg[shape]}deg)` }
                }
              ></div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default Tangrams;
