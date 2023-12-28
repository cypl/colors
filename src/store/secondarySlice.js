import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorSecondaryName: "secondaire",
    colorSecondary: "",
    secondaryLuminance: 0,
    secondaryHue: 0,
    secondarySaturation: 0,
    secondaryLightness: 0,
}

const secondarySlice = createSlice({
    name: 'secondary',
    initialState,
    reducers: {
        setColorSecondaryName: (state, action) => {
            state.colorSecondaryName = action.payload
        },
        setColorSecondary: (state, action) => {
            state.colorSecondary = action.payload
        },
        setSecondaryLuminance: (state, action) => {
            state.secondaryLuminance = action.payload
        },
        setSecondaryHue: (state, action) => {
            state.secondaryHue = action.payload
        },
        setSecondarySaturation: (state, action) => {
            state.secondarySaturation = action.payload
        },
        setSecondaryLightness: (state, action) => {
            state.secondaryLightness = action.payload
        },
    },
})

export const {
    setColorSecondaryName,
    setColorSecondary,
    setSecondaryLuminance,
    setSecondaryHue,
    setSecondarySaturation,
    setSecondaryLightness,
} = secondarySlice.actions

export default secondarySlice.reducer
