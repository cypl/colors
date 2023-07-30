import { fromHexToLuminanceRatio } from "./luminanceRatio"
import { fromHexToHsl } from "./hexToHsl"
import { fromHslToHex } from "./hslToHex"

/**
 * 
 * @param {String} baseHue 
 * @param {String} baseSaturation 
 * @param {String} baseLightness 
 * @param {Number} hueVariation // set the variation oft the hue from baseHue (could a positive or negative number)
 * @param {Number} saturationVariation // set the exact saturation you want, from 0 to 100
 * @param {Number} lightnessVariation 
 * @param {Number} expectedLuminance 
 * @param {Function} setColorLuminance 
 * @param {Function} setColorHue 
 * @param {Function} setColorSaturation 
 * @param {Function} setColorLightness 
 * @param {Function} setColor 
 */
export function DefineColor(
    baseHue, baseSaturation, baseLightness, 
    hueVariation, saturationVariation, lightnessVariation, 
    expectedLuminance, 
    setColorLuminance,
    setColorHue, setColorSaturation, setColorLightness, setColor, dispatch
    ){
    
    const newHue = (baseHue + hueVariation) % 360
    const newSaturation = saturationVariation
    let newLightness = Math.min(baseLightness + lightnessVariation, 100)
    let newColorLuminance = 0

    while (Math.abs(newColorLuminance - expectedLuminance) > 2) { // 2 is the acceptable difference between real luminance and expected luminance 
      if (newColorLuminance > expectedLuminance) {
        newLightness -= 0.01
      } else {
        newLightness += 0.01
      }
      newColorLuminance = fromHexToLuminanceRatio(fromHslToHex(newHue, newSaturation, newLightness))
    }

    const newColor = fromHslToHex(newHue, newSaturation, newLightness)

    dispatch(setColorLuminance(fromHexToLuminanceRatio(newColor)))
    dispatch(setColorHue(fromHexToHsl(newColor)[0]))
    dispatch(setColorSaturation(fromHexToHsl(newColor)[1]))
    dispatch(setColorLightness(fromHexToHsl(newColor)[2]))
    dispatch(setColor(newColor))
}