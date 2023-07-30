import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"
import { getRoundedValue } from "../utils/mathRound"
import { fromHslToHex } from "../utils/hslToHex"
import { Slider } from '@mantine/core'

function Test() {

  // states for color settings
  const [colorStarter, setColorStarter] = useState("#517060")
  const [starterLuminance, setStarterLuminance] = useState(fromHexToLuminanceRatio(colorStarter)) // = 190
  const [starterHue, setStarterHue] = useState(fromHexToHsl(colorStarter)[0]) // = 149
  const [starterSaturation, setStarterSaturation] = useState(fromHexToHsl(colorStarter)[1]) // = 14.8
  const [starterLightness, setStarterLightness] = useState(fromHexToHsl(colorStarter)[2]) // = 43.7

  const expectedLuminance = 140

  // states for sliders components
  const [valueSliderHue, setValueSliderHue] = useState(getRoundedValue(((starterHue / 360) * 100),1))
  const [valueSliderSaturation, setValueSliderSaturation] = useState(starterSaturation)

    const adjustColorStarter = () => {
        setStarterHue(Math.round((valueSliderHue / 100) * 360))
        setStarterSaturation(valueSliderSaturation)
        setColorStarter(fromHslToHex(starterHue, starterSaturation, starterLightness))
        setStarterLuminance(fromHexToLuminanceRatio(colorStarter))
        const updateColorStarter = () => {
        const newColorStarter = fromHslToHex(starterHue, starterSaturation, starterLightness)
        const newLuminance = starterLuminance // fromHexToLuminanceRatio(newColorStarter)
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
                setColorStarter(newColorStarter)
                setStarterLuminance(newLuminance)
            }
        }
        updateColorStarter()
    }

    // when sliders move, there is a new value for colorStarter
    useEffect(()=> {
        adjustColorStarter()
    }, [colorStarter, valueSliderHue, valueSliderSaturation])

  return (
    <>
      <ColorStarter style={{backgroundColor:colorStarter}}>
        <ColorValue><span>{colorStarter}</span></ColorValue> 
        {/* <p>Luminance is: {starterLuminance} / 1000</p>
        <p>Luminance should be: {expectedLuminance} / 1000</p>
        <p>hsl({starterHue}°,{starterSaturation}%,{starterLightness}%)</p> */}
        <SliderWrapper>
            <Slider style={{margin:"10px 0"}} value={valueSliderHue} onChange={setValueSliderHue} label={(value) => `${getRoundedValue(((value / 100) * 360),1)}°`} step={0.1}/>
            <Slider style={{margin:"10px 0"}} value={valueSliderSaturation} onChange={setValueSliderSaturation} label={(value) => `${value}%`} min={10} max={100}/>
        </SliderWrapper>
      </ColorStarter>
    </>
  )
}

export default Test

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
const ColorStarter = styled.div`
  width:500px;
  height:200px;
  position:relative;
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

