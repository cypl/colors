import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorLight2Name: "clair2",
    colorLight2: "",
    light2Luminance: 0,
    light2Hue: 0,
    light2Saturation: 0,
    light2Lightness: 0,
}

const light2Slice = createSlice({
    name: 'light2',
    initialState,
    reducers: {
        setColorLight2Name: (state, action) => {
            state.colorLight2Name = action.payload
        },
        setColorLight2: (state, action) => {
            state.colorLight2 = action.payload
        },
        setLight2Luminance: (state, action) => {
            state.light2Luminance = action.payload
        },
        setLight2Hue: (state, action) => {
            state.light2Hue = action.payload
        },
        setLight2Saturation: (state, action) => {
            state.light2Saturation = action.payload
        },
        setLight2Lightness: (state, action) => {
            state.light2Lightness = action.payload
        },
    },
})

export const {
    setColorLight2Name,
    setColorLight2,
    setLight2Luminance,
    setLight2Hue,
    setLight2Saturation,
    setLight2Lightness,
} = light2Slice.actions

export default light2Slice.reducer
