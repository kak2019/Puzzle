import React, { useEffect, useState, useRef } from 'react';
import './Magnifierapp.css';

function Magnifier({ children }) {
    const [position, setPosition] = useState({ x: -150, y: -150 });
    const textRef = useRef(null);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const textRect = textRef.current.getBoundingClientRect();
            const centerX = textRect.left + textRect.width / 2;
            const centerY = textRect.top + textRect.height / 2;
            const distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));

            setPosition({ x, y });
            setShowText(distance < 150); // 假设光圈半径是150px
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="flashlight-container">
            {children}
            <div className="flashlight-circle" style={{
                left: `${position.x - 150}px`,
                top: `${position.y - 150}px`,
            }}></div>
            <div ref={textRef} className={`puzzle-content ${showText ? 'visible' : ''}`} style={{
                left: `${position.x - 150}px`,
                top: `${position.y - 150}px`,
            }}>

            </div>
        </div>
    );
}

export default Magnifier;
