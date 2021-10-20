import React, { useState } from 'react';
import ColorBox from './ColorBox/ColorBox';
import './colorBoxesPage.css';

const ColorBoxesPage = () => {
    const [backgroundColor, setBackgroundColor] = useState('#eeeeee');
    // const defaultBoxData = ['box1', 'box2', 'box3', 'box4', 'box5'];

    const [boxData, setBoxData] = useState([
        'box1',
        'box2',
        'box3',
        'box4',
        'box5',
    ]);

    function addNewBox() {
        setBoxData((prevData) => [...prevData, `box${boxData.length + 1}`]);
    }

    useEffect(() => {
        const boxDataRes = JSON.parse(localStorage.getItem('boxData'));
    }, []);

    const ColorBoxes = boxData.map((arrayItem, index) => (
        <ColorBox
            onSendColor={setBackgroundColor}
            onAddClick={addNewBox}
            key={index}
            text={arrayItem}
        />
    ));

    return (
        <div>
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
