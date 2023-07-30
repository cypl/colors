import { configureStore } from "@reduxjs/toolkit"
import colorThemeSlice from "./colorThemeSlice"
import primary1Slice from "./primary1Slice"
import primarySlice from "./primarySlice"
import primary2Slice from "./primary2Slice"
import secondary1Slice from "./secondary1Slice"
import secondarySlice from "./secondarySlice"
import secondary2Slice from "./secondary2Slice"
import lightSlice from "./lightSlice"
import light2Slice from "./light2Slice"

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeSlice,
    primary1: primary1Slice,
    primary: primarySlice,
    primary2: primary2Slice,
    secondary1: secondary1Slice,
    secondary: secondarySlice,
    secondary2: secondary2Slice,
    light: lightSlice,
    light2: light2Slice,
  },
})