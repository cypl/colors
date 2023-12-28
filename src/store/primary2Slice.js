import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorPrimary2Name: "primaire2",
    colorPrimary2: "",
    primary2Luminance: 0,
    primary2Hue: 0,
    primary2Saturation: 0,
    primary2Lightness: 0,
}

const primary2Slice = createSlice({
    name: 'primary2',
    initialState,
    reducers: {
        setColorPrimary2Name: (state, action) => {
            state.colorPrimary2Name = action.payload
        },
        setColorPrimary2: (state, action) => {
            state.colorPrimary2 = action.payload
        },
        setPrimary2Luminance: (state, action) => {
            state.primary2Luminance = action.payload
        },
        setPrimary2Hue: (state, action) => {
            state.primary2Hue = action.payload
        },
        setPrimary2Saturation: (state, action) => {
            state.primary2Saturation = action.payload
        },
        setPrimary2Lightness: (state, action) => {
            state.primary2Lightness = action.payload
        },
    },
})

export const {
    setColorPrimary2Name,
    setColorPrimary2,
    setPrimary2Luminance,
    setPrimary2Hue,
    setPrimary2Saturation,
    setPrimary2Lightness,
} = primary2Slice.actions

export default primary2Slice.reducer
