import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorSecondary1Name: "secondary1",
    colorSecondary1: "",
    secondary1Luminance: 0,
    secondary1Hue: 0,
    secondary1Saturation: 0,
    secondary1Lightness: 0,
}

const secondary1Slice = createSlice({
    name: 'secondary1',
    initialState,
    reducers: {
        setColorSecondary1Name: (state, action) => {
            state.colorSecondary1Name = action.payload
        },
        setColorSecondary1: (state, action) => {
            state.colorSecondary1 = action.payload
        },
        setSecondary1Luminance: (state, action) => {
            state.secondary1Luminance = action.payload
        },
        setSecondary1Hue: (state, action) => {
            state.secondary1Hue = action.payload
        },
        setSecondary1Saturation: (state, action) => {
            state.secondary1Saturation = action.payload
        },
        setSecondary1Lightness: (state, action) => {
            state.secondary1Lightness = action.payload
        },
    },
})

export const {
    setColorSecondary1Name,
    setColorSecondary1,
    setSecondary1Luminance,
    setSecondary1Hue,
    setSecondary1Saturation,
    setSecondary1Lightness,
} = secondary1Slice.actions

export default secondary1Slice.reducer
