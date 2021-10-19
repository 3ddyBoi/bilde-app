import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardActions, CardMedia } from '@mui/material';
import ImgFullscreen from './components/ImgFullscreen';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { imgDataActions } from './store';

const defaultImgData = [{ id: 5 }, { id: 10 }, { id: 15 }];

function App() {
    const imgData = useSelector((state) => state.imgDataSlice);
    const dispatch = useDispatch();

    const [openFullscreen, setOpenFullscreen] = useState();
    function addNewImage() {
        dispatch(
            imgDataActions.set((prevData) => [
                ...prevData,
                { id: Math.floor(Math.random() * 1000) },
            ])
        );
    }
    useEffect(() => {
        const imgDataRes =
            JSON.parse(localStorage.getItem('imgData')) || defaultImgData;
        dispatch(imgDataActions.set(imgDataRes));
        console.log(imgDataRes);
    }, [dispatch]);

    const removeImage = (index) => {
        const dataCopy = [...imgData];
        dataCopy.splice(index, 1);
        // console.log(dataCopy);
        dispatch(imgDataActions.set(dataCopy));
    };

    function saveImgData() {
        localStorage.setItem('imgData', JSON.stringify(imgData));
    }

    function deleteImgData() {
        dispatch(imgDataActions.set(defaultImgData));
        localStorage.removeItem('imgData');
    }

    return (
        <div>
            <Button variant='contained' onClick={saveImgData}>
                Lagre
            </Button>
            <Button variant='contained' onClick={deleteImgData}>
                Fjern alle
            </Button>
            {imgData.map((item, index) => (
                <Card key={item.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        className='card-media'
                        onClick={() =>
                            setOpenFullscreen({
                                id: item.id,
                                index,
                            })
                        }
                        height='140'
                        component='img'
                        image={`https://picsum.photos/id/${item.id}/1920/1080`}
                    />
                    <CardActions>
                        <Button size='small' onClick={addNewImage}>
                            Add image
                        </Button>
                        <Button size='small' onClick={() => removeImage(index)}>
                            Remove image
                        </Button>
                    </CardActions>
                </Card>
            ))}
            {openFullscreen && (
                <ImgFullscreen
                    item={openFullscreen}
                    onClick={setOpenFullscreen}
                    onDelete={(index) => {
                        removeImage(index);
                        setOpenFullscreen(false);
                    }}
                />
            )}
        </div>
    );
}

export default App;

// [{ id: 5 }, { id: 10 }, { id: 15 }];

// array starter med 3 tillfeldige nummer, onclick på lag skal lage nytt nummer, legg nummer i array,
// lagre array på local storage i browser med en gang du åpner siden, lagre ny versjon av array ved endringer på array.
