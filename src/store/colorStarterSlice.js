import { createSlice } from '@reduxjs/toolkit'
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"

const start = "#b74320"

const initialState = {
    color: start,
    luminance: fromHexToLuminanceRatio(start),
    hue: fromHexToHsl(start)[0],
    saturation: fromHexToHsl(start)[1],
    lightness: fromHexToHsl(start)[2],
}

const colorStarterSlice = createSlice({
    name: 'colorStarter',
    initialState,
    reducers: {
        setColorStarter: (state, action) => {
            state.color = action.payload
        },
        setColorStarterLuminance: (state, action) => {
            state.luminance = action.payload
        },
        setColorStarterHue: (state, action) => {
            state.hue = action.payload
        },
        setColorStarterSaturation: (state, action) => {
            state.saturation = action.payload
        },
        setColorStarterLightness: (state, action) => {
            state.lightness = action.payload
        },
    },
})

export const {
    setColorStarter,
    setColorStarterLuminance,
    setColorStarterHue,
    setColorStarterSaturation,
    setColorStarterLightness,
} = colorStarterSlice.actions

export default colorStarterSlice.reducer
