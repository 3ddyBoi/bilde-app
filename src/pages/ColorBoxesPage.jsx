import React, { useEffect, useState } from 'react';
import getRandomColor from '../utils/getRandomColor';
import ColorBox from './ColorBox/ColorBox';
import { cloneDeep } from 'lodash';
import './colorBoxesPage.css';

const defaultBoxData = [{ name: 'box1', color: getRandomColor() }];

const ColorBoxesPage = () => {
    const [backgroundColor, setBackgroundColor] = useState('#eeeeee');

    const [boxData, setBoxData] = useState([]);

    function addNewBox() {
        setBoxData((prevData) => {
            return [
                ...prevData,
                { name: `box${boxData.length + 1}`, color: getRandomColor() },
            ];
        });
    }

    useEffect(() => {
        const boxDataRes =
            JSON.parse(localStorage.getItem('boxData')) || defaultBoxData;
        setBoxData(boxDataRes);
    }, []);

    useEffect(() => {
        localStorage.setItem('boxData', JSON.stringify(boxData));
    }, [boxData]);

    function handleColorChange(newColor, boxIndex) {
        setBoxData((prevBoxData) => {
            const stateCpy = cloneDeep(prevBoxData);
            stateCpy[boxIndex].color = newColor;
            return [...stateCpy];
        });
    }

    function reverseColorBoxes() {
        setBoxData((prevBoxData) => {
            return [...prevBoxData].reverse();
        });
    }

    function hex2rgb(hex) {
        var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            hex
        );
        if (!validHEXInput) {
            return false;
        }
        var output = {
            r: parseInt(validHEXInput[1], 16),
            g: parseInt(validHEXInput[2], 16),
            b: parseInt(validHEXInput[3], 16),
        };
        return output;
    }

    function luminance({ r, g, b }) {
        var a = [r, g, b].map(function (v) {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function sortColorByLightness() {
        const stateCpy = cloneDeep(boxData);
        for (let index = 0; index < stateCpy.length; index++) {
            for (let index2 = index + 1; index2 < stateCpy.length; index2++) {
                if (
                    luminance(hex2rgb(stateCpy[index].color)) >
                    luminance(hex2rgb(stateCpy[index2].color))
                ) {
                    const a = stateCpy[index];
                    const b = stateCpy[index2];
                    stateCpy[index] = b;
                    stateCpy[index2] = a;
                }
            }
        }
        setBoxData(stateCpy);
    }

    const ColorBoxes = boxData.map((box, index) => (
        <ColorBox
            onSendColor={setBackgroundColor}
            onAddClick={addNewBox}
            color={box.color}
            key={index}
            index={index}
            text={box.name}
            onColorChange={handleColorChange}
        />
    ));
    function deleteImgData() {
        localStorage.removeItem('boxData');
    }

    return (
        <div>
            <button onClick={() => sortColorByLightness()}>Sort color</button>
            <button onClick={deleteImgData}>Delete local storage :)</button>
            <button onClick={() => reverseColorBoxes()}>Reverse</button>
            <div
                className='container'
                style={{ backgroundColor: backgroundColor }}
            >
                {ColorBoxes}
            </div>
        </div>
    );
};

export default ColorBoxesPage;
