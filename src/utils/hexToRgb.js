// convert a hexadecimal value to an RGB array
export function fromHexToRgb(h) {
    return [
      ('0x' + h[1] + h[2]) | 0,
      ('0x' + h[3] + h[4]) | 0,
      ('0x' + h[5] + h[6]) | 0,
    ]
}