import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"
import { getRoundedValue } from "../utils/mathRound"
import { fromHslToHex } from "../utils/hslToHex"
import { Slider } from '@mantine/core'
import PropTypes from 'prop-types'

function ColorPicker({color, setColor, expectedLuminance}) {

    // states for color settings
    const [starterLuminance, setStarterLuminance] = useState(fromHexToLuminanceRatio(color)) 
    const [starterHue, setStarterHue] = useState(fromHexToHsl(color)[0]) 
    const [starterSaturation, setStarterSaturation] = useState(fromHexToHsl(color)[1]) 
    const [starterLightness, setStarterLightness] = useState(fromHexToHsl(color)[2])

    // states for sliders components
    const [valueSliderHue, setValueSliderHue] = useState(getRoundedValue(((starterHue / 360) * 100),1))
    const [valueSliderSaturation, setValueSliderSaturation] = useState(starterSaturation)

    const adjustColorStarter = () => {
        setStarterHue(Math.round((valueSliderHue / 100) * 360))
        setStarterSaturation(valueSliderSaturation)
        setColor(fromHslToHex(starterHue, starterSaturation, starterLightness))
        setStarterLuminance(fromHexToLuminanceRatio(color))
        const updateColorStarter = () => {
            const newColorStarter = fromHslToHex(starterHue, starterSaturation, starterLightness)
            const newLuminance = starterLuminance
            if (Math.abs(newLuminance - expectedLuminance) > 4) {
                let newLightness = starterLightness
                if (newLuminance > expectedLuminance) {
                    newLightness -= 1
                } else {
                    newLightness += 1
                }
                setStarterLightness(newLightness)
                requestAnimationFrame(updateColorStarter)
            } else {
                setColor(newColorStarter)
                setStarterLuminance(newLuminance)
            }
        }
        updateColorStarter()
    }

    // when sliders move, there is a new value for colorStarter
    useEffect(()=> {
        adjustColorStarter()
    }, [color, valueSliderHue, valueSliderSaturation])

    console.log(color)
    console.log(valueSliderHue)
    console.log(valueSliderSaturation)
    
  return (
    <>
      <ColorStarter style={{backgroundColor:color}}>
        <ColorValue><span>{color}</span></ColorValue> 
        <ColorLuminance><span>{starterLuminance}</span></ColorLuminance> 
        <SliderWrapper>
            <Slider style={{margin:"10px 0"}} value={valueSliderHue} onChange={setValueSliderHue} label={(value) => `${getRoundedValue(((value / 100) * 360),1)}°`} step={0.1}/>
            <Slider style={{margin:"10px 0"}} value={valueSliderSaturation} onChange={setValueSliderSaturation} label={(value) => `${value}%`} min={10} max={100}/>
        </SliderWrapper>
      </ColorStarter>
    </>
  )
}

export default ColorPicker

ColorPicker.propTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func,
    expectedLuminance: PropTypes.number,
    }

const ColorValue = styled.p`
    font-size:11px;
    line-height:1;
    color:#fff;
    position:absolute;
    top:15px;
    left:10px;
    & span{
        padding:5px 12px;
        background-color:rgba(0,0,0,0.6);
        border-radius:15px;
    }
`
const ColorLuminance = styled.p`
    font-size:11px;
    line-height:1;
    color:#fff;
    position:absolute;
    top:15px;
    right:10px;
    & span{
        padding:5px 12px;
        background-color:rgba(0,0,0,0.6);
        border-radius:15px;
    }
`
const ColorStarter = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    transition:0.1s background-color ease-in-out;
`
const SliderWrapper = styled.div`
    padding:5px 10px;
    background-color:rgba(0,0,0,0.6);
    position:absolute;
    width:calc(100% - 20px);
    left:10px;
    bottom:10px;
    border-radius:4px;
`

