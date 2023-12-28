import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorPrimary1Name: "primaire1",
    colorPrimary1: "",
    primary1Luminance: 0,
    primary1Hue: 0,
    primary1Saturation: 0,
    primary1Lightness: 0,
}

const primary1Slice = createSlice({
    name: 'primary1',
    initialState,
    reducers: {
        setColorPrimary1Name: (state, action) => {
            state.colorPrimary1Name = action.payload
        },
        setColorPrimary1: (state, action) => {
            state.colorPrimary1 = action.payload
        },
        setPrimary1Luminance: (state, action) => {
            state.primary1Luminance = action.payload
        },
        setPrimary1Hue: (state, action) => {
            state.primary1Hue = action.payload
        },
        setPrimary1Saturation: (state, action) => {
            state.primary1Saturation = action.payload
        },
        setPrimary1Lightness: (state, action) => {
            state.primary1Lightness = action.payload
        },
    },
})

export const {
    setColorPrimary1Name,
    setColorPrimary1,
    setPrimary1Luminance,
    setPrimary1Hue,
    setPrimary1Saturation,
    setPrimary1Lightness,
} = primary1Slice.actions

export default primary1Slice.reducer
