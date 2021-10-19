import { configureStore } from '@reduxjs/toolkit';
import imgDataSlice, { actions as imgDataActions } from './imgDataSlice';

const store = configureStore({
    reducer: {
        imgDataSlice: imgDataSlice.reducer,
    },
});

export default store;

export { imgDataActions };
