import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Card, CardActions, CardMedia } from '@mui/material';

function App() {
    const [data, setData] = useState([{ id: 5 }, { id: 10 }, { id: 15 }]);
    function addNewImage() {
        setData((prevData) => [...prevData, { id: 20 }]);
    }
    const removeImage = (index) => () => {
        const dataCopy = [...data];
        dataCopy.splice(index, 1);
        setData(dataCopy);
    };

    return (
        <div>
            {data.map((item, index) => (
                <Card key={item.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        height='140'
                        component='img'
                        image={`https://picsum.photos/id/${item.id}/1920/1080`}
                    />
                    <CardActions>
                        <Button size='small' onClick={addNewImage}>
                            Add image
                        </Button>
                        <Button size='small' onClick={removeImage(index)}>
                            Remove image
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default App;

// array starter med 3 tillfeldige nummer, onclick på lag skal lage nytt nummer, legg nummer i array,
// lagre array på local storage i browser med en gang du åpner siden, lagre ny versjon av array ved endringer på array.
