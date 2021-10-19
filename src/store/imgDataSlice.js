import { createSlice } from '@reduxjs/toolkit';

const imgDataSlice = createSlice({
    name: 'imageDataSlice',
    initialState: [{ id: 5 }, { id: 10 }, { id: 15 }],
    reducers: {
        set: (state, { payload }) => {
            return payload;
        },
    },
});

export const { actions } = imgDataSlice;

export default imgDataSlice;
