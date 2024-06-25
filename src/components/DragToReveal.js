import React, { useState, useRef, useEffect } from 'react';

const DragToReveal = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);
  const startY = useRef(0);
  const contentRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    startY.current = event.clientY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentY = event.clientY;
    const deltaY = startY.current - currentY;

    if (deltaY > 100) { // 如果向上拖动超过100像素
      setShowNewContent(true);
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        textAlign: 'center',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      ref={contentRef}
    >
      <p>See the result</p>
      {showNewContent && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
          <p>人!</p>
        </div>
      )}
    </div>
  );
};

export default DragToReveal;
