import React from 'react';
import './App.css';
import Magnifier from '../components/Magnifier';
import { textToMorseCode, morseCodeToText }  from "../components/Mos"
function PuzzleIndex (){



    return (
        <Magnifier>

            {textToMorseCode("Puzzle")}

        </Magnifier>
)
}

export default PuzzleIndex;