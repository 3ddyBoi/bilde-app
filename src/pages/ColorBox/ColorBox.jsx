import React from 'react';
import getRandomColor from '../../utils/getRandomColor';
import './colorBox.css';

const ColorBox = ({
    text,
    onSendColor,
    onAddClick,
    color = '#fff',
    index,
    onColorChange,
}) => {
    const changeColor = () => {
        const newColor = getRandomColor();
        onColorChange(newColor, index);
    };
    return (
        <div
            onClick={changeColor}
            onDoubleClick={() => onSendColor(color)}
            className='box'
            style={{ backgroundColor: color }}
        >
            <p className='unselectable'>{text}</p>
            <button
                className='unselectable'
                tabIndex={1}
                onClick={(event) => {
                    event.stopPropagation();
                    onAddClick();
                }}
            >
                Ny fargeboks
            </button>
        </div>
    );
};

export default ColorBox;
