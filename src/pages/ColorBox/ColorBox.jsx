import React, { useState } from 'react';
import './colorBox.css';

const ColorBox = ({ text, onSendColor, onAddClick }) => {
    const [randomColor, setRandomColor] = useState(getRandomColor);

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (
        <div
            onClick={() => setRandomColor(getRandomColor)}
            className='box'
            style={{ backgroundColor: randomColor }}
        >
            <p className='unselectable'>{text}</p>
            <button onClick={() => onSendColor(randomColor)}>Velg farge</button>
            <button onClick={() => onAddClick()}>Ny fargeboks</button>
        </div>
    );
};

export default ColorBox;
