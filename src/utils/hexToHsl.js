import Convert from "@alchemyalcove/rgb-to-hsl"
import { getRoundedValue } from "./mathRound"
import { fromHexToRgb } from "./hexToRgb"

// calculate the hsl value from an hexadecimal value
export function fromHexToHsl(hex) {
    const colorRGB = fromHexToRgb(hex)
    const colorHSL = Convert(colorRGB)
    const H = getRoundedValue(colorHSL[0], 1)
    const S = getRoundedValue(colorHSL[1], 1)
    const L = getRoundedValue(colorHSL[2], 1)
    return [H, S, L]
}