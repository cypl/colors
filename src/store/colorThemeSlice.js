import { createSlice } from '@reduxjs/toolkit'

const initialState = "Night"

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload
    },
  },
})

export const { setTheme } = colorThemeSlice.actions

export default colorThemeSlice.reducer
