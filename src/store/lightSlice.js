import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorLightName: "clair",
    colorLight: "",
    lightLuminance: 0,
    lightHue: 0,
    lightSaturation: 0,
    lightLightness: 0,
}

const lightSlice = createSlice({
    name: 'light',
    initialState,
    reducers: {
        setColorLightName: (state, action) => {
            state.colorLightName = action.payload
        },
        setColorLight: (state, action) => {
            state.colorLight = action.payload
        },
        setLightLuminance: (state, action) => {
            state.lightLuminance = action.payload
        },
        setLightHue: (state, action) => {
            state.lightHue = action.payload
        },
        setLightSaturation: (state, action) => {
            state.primarySaturation = action.payload
        },
        setLightLightness: (state, action) => {
            state.lightLightness = action.payload
        },
    },
})

export const {
    setColorLightName,
    setColorLight,
    setLightLuminance,
    setLightHue,
    setLightSaturation,
    setLightLightness,
} = lightSlice.actions

export default lightSlice.reducer
