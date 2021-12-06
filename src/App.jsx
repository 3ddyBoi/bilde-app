import React from 'react';
import './App.css';
import ColorBoxesPage from './pages/ColorBoxesPage';
// import ImagesPage from './pages/ImagesPage';

function App() {
    return (
        <div>
            <ColorBoxesPage />
            <h1>test</h1>
        </div>
    );
}

export default App;

// [{ id: 5 }, { id: 10 }, { id: 15 }];

// array starter med 3 tillfeldige nummer, onclick på lag skal lage nytt nummer, legg nummer i array,
// lagre array på local storage i browser med en gang du åpner siden, lagre ny versjon av array ved endringer på array.
