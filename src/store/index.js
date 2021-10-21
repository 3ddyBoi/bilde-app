import { configureStore } from '@reduxjs/toolkit';
import imgDataSlice, { actions as imgDataActions } from './imgDataSlice';
// import boxDataSlice, { actions as boxDataActions } from './boxDataSlice';

const store = configureStore({
    reducer: {
        imgDataSlice: imgDataSlice.reducer,
    },
});

export default store;

export { imgDataActions };
// export { boxDataActions };
