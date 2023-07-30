import simpleColorConverter from 'simple-color-converter'
//const simpleColorConverter = require('simple-color-converter')

// calculate the cmyk value from an hexadecimal value
export function fromHexToCmyk(hex) {
    return new simpleColorConverter({
        hex6: hex, 
        to: 'cmyk'
    })
}