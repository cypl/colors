import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorPrimaryName: "primaire",
    colorPrimary: "",
    primaryLuminance: 0,
    primaryHue: 0,
    primarySaturation: 0,
    primaryLightness: 0,
}

const primarySlice = createSlice({
    name: 'primary',
    initialState,
    reducers: {
        setColorPrimaryName: (state, action) => {
            state.colorPrimaryName = action.payload
        },
        setColorPrimary: (state, action) => {
            state.colorPrimary = action.payload
        },
        setPrimaryLuminance: (state, action) => {
            state.primaryLuminance = action.payload
        },
        setPrimaryHue: (state, action) => {
            state.primaryHue = action.payload
        },
        setPrimarySaturation: (state, action) => {
            state.primarySaturation = action.payload
        },
        setPrimaryLightness: (state, action) => {
            state.primaryLightness = action.payload
        },
    },
})

export const {
    setColorPrimaryName,
    setColorPrimary,
    setPrimaryLuminance,
    setPrimaryHue,
    setPrimarySaturation,
    setPrimaryLightness,
} = primarySlice.actions

export default primarySlice.reducer
