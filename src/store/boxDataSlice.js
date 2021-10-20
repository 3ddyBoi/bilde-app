import { createSlice } from '@reduxjs/toolkit';

const boxDataSlice = createSlice({
    name: 'boxDataSlice',
    initialState: ['box1', 'box2', 'box3', 'box4', 'box5'],
    reducers: {
        set: (state, { payload }) => {
            return payload;
        },
    },
});

export const { actions } = boxDataSlice;

export default boxDataSlice;
