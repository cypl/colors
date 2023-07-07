import { fromHexToLuminanceRatio } from "./luminanceRatio"
import { fromHexToHsl } from "./hexToHsl"
import { fromHslToHex } from "./hslToHex"


// baseHue
// baseSaturation
// baseLightness

// hueVariation,
// saturationVariation,
// lightnessVariation,

// expectedLuminance     au lieu de primaryLuminance

// setColorLuminance
// setColorHue
// setColorSaturation
// setColorLightness
// setColor

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
export function defineColor(
    baseHue, baseSaturation, baseLightness, 
    hueVariation, saturationVariation, lightnessVariation, 
    expectedLuminance, 
    setColorLuminance,
    setColorHue, setColorSaturation, setColorLightness, setColor
    ){
    const newHue = (baseHue + hueVariation) % 360
    //const newSaturation = Math.min(baseSaturation + saturationVariation, 100)
    const newSaturation = saturationVariation
    let newLightness = Math.min(baseLightness + lightnessVariation, 100)
    let newColorLuminance = 0

    while (Math.abs(newColorLuminance - expectedLuminance) > 2) { // 5 is the acceptable difference between real luminance and expected luminance 
      if (newColorLuminance > expectedLuminance) {
        newLightness -= 0.01
      } else {
        newLightness += 0.01
      }
      newColorLuminance = fromHexToLuminanceRatio(fromHslToHex(newHue, newSaturation, newLightness))
    }

    const newColor = fromHslToHex(newHue, newSaturation, newLightness)

    setColorLuminance(fromHexToLuminanceRatio(newColor))
    setColorHue(fromHexToHsl(newColor)[0])
    setColorSaturation(fromHexToHsl(newColor)[1])
    setColorLightness(fromHexToHsl(newColor)[2])
    setColor(newColor)
}