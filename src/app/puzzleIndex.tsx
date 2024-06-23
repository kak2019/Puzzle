// PuzzleIndex.js
import React, {useEffect, useState} from 'react';
import './App.css';
import Magnifier from '../components/Magnifier';
import { textToMorseCode, morseCodeToText } from "@/components/Mos";

const PuzzleIndex = () => {
    // 安全检查以确保函数存在
    const morseCode = textToMorseCode("Puzzle");
    const [displayText, setDisplayText] = useState("");
    const [key, setKey] = useState(0);

    return (
        <>
        <Magnifier>
            {/* 应用动态“呼吸”样式 */}
            <p  className="combined-text-animation">{morseCode}</p>
        </Magnifier>
    {"解码" + morseCodeToText(morseCode)}
        </>
    );
}

export default PuzzleIndex;
