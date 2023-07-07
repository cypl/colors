import { fromHexToRgb } from "./hexToRgb"
// import { getRoundedValue } from "./mathRound"

// calculate the luminance of a color, from R, G, B values of a color
function relativeLuminanceW3C(R8bit, G8bit, B8bit) {
    var RsRGB = R8bit / 255
    var GsRGB = G8bit / 255
    var BsRGB = B8bit / 255
    var R =
      RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)
    var G =
      GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)
    var B =
      BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4)
    // For the sRGB colorspace, the relative luminance of a color is defined as:
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B
    return L
}
  
// calculate the luminance of a color from an hexadecimal value
// return a value from 0 (black) to 1000 (white)
export function fromHexToLuminanceRatio(hexValue){
    const R = fromHexToRgb(hexValue)[0]
    const G = fromHexToRgb(hexValue)[1]
    const B = fromHexToRgb(hexValue)[2]
    const luminance = relativeLuminanceW3C(R,G,B)
    return Math.round(luminance * 1000)
    //return getRoundedValue(luminance * 100, 2)
}