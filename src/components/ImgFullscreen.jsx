import React from 'react';
import './imgFullscreen.css';

const ImgFullscreen = ({ item = { id: -1, index: -1 }, onClick, onDelete }) => {
    const { id, index } = item;
    return (
        <div className='img-fullscreen'>
            <img
                src={`https://picsum.photos/id/${id}/1920/1080`}
                alt='random'
                onClick={() => onClick(false)}
            />
            <button onClick={() => onDelete(index)}>slett</button>
        </div>
    );
};

export default ImgFullscreen;
