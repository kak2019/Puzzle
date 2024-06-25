"use client"
import React from 'react';
import Typical from 'react-typical';

const TypingEffect = () => {
    return (
        <Typical
            loop={Infinity}
            wrapper="span"
            steps={[
                '...', 1000,
                '.', 1000,
                '..', 1000,
                '...', 1000,
            ]}
        />
    );
};

export default TypingEffect;
