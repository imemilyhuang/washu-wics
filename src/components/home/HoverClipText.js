import React, { useState } from 'react'

const HoverClipText = ({baseColor, accentColor, text}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [circleX, setCircleX] = useState(50); // Initial circle center X (50% for center)
  const [circleY, setCircleY] = useState(50); // Initial circle center Y (50% for center)

  const handleMouseMove = (event) => {
    const element = event.currentTarget; // Get the element being hovered
    const boundingRect = element.getBoundingClientRect();
    const relativeX = (event.clientX - boundingRect.left) / boundingRect.width;
    const relativeY = (event.clientY - boundingRect.top) / boundingRect.height;

    setCircleX(relativeX * 100); // Update circle center X as a percentage
    setCircleY(relativeY * 100); // Update circle center Y as a percentage
  };

  return (
    <div className='text-container'>
      <h1 className="overlay-text" style={{color: baseColor}}>{text}</h1>
      <h1
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          clipPath: isHovered && `circle(50px at ${circleX}% ${circleY}%)`,
          opacity: !isHovered && 0, zIndex: 1, color: accentColor
        }}
      >
        {text}
      </h1>
    </div>
  )
}

export default HoverClipText