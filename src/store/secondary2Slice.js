import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorSecondary2Name: "secondaire2",
    colorSecondary2: "",
    secondary2Luminance: 0,
    secondary2Hue: 0,
    secondary2Saturation: 0,
    secondary2Lightness: 0,
}

const secondary2Slice = createSlice({
    name: 'secondary2',
    initialState,
    reducers: {
        setColorSecondary2Name: (state, action) => {
            state.colorSecondary2Name = action.payload
        },
        setColorSecondary2: (state, action) => {
            state.colorSecondary2 = action.payload
        },
        setSecondary2Luminance: (state, action) => {
            state.secondary2Luminance = action.payload
        },
        setSecondary2Hue: (state, action) => {
            state.secondary2Hue = action.payload
        },
        setSecondary2Saturation: (state, action) => {
            state.secondary2Saturation = action.payload
        },
        setSecondary2Lightness: (state, action) => {
            state.secondary2Lightness = action.payload
        },
    },
})

export const {
    setColorSecondary2Name,
    setColorSecondary2,
    setSecondary2Luminance,
    setSecondary2Hue,
    setSecondary2Saturation,
    setSecondary2Lightness,
} = secondary2Slice.actions

export default secondary2Slice.reducer
