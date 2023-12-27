import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { ColorPicker } from '@mantine/core'
import { colorsUI } from "../utils/colorsUI"
import { useDispatch, useSelector } from 'react-redux'
import { setColorStarter, setColorStarterLuminance, setColorStarterHue, setColorStarterSaturation, setColorStarterLightness } from "../store/colorStarterSlice"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"

const ColorPickerWrapper = styled.div`
    padding:15px;
    background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
    & .mantine-ColorPicker-wrapper{
        width:100%;
    }
    & .mantine-ColorPicker-saturation{
        height:300px;
    }
`
function ModalColorStarter(){
    
    const colorTheme = useSelector(state => state.colorTheme)
    const colorStarter = useSelector(state => state.colorStarter.color)
    
    const dispatch = useDispatch()
    
    const [value, setValue] = useState(colorStarter)
    
    // console.log(value)
    // console.log(fromHexToHsl(value))

    useEffect(() => {
        dispatch(setColorStarter(value))
        dispatch(setColorStarterLuminance(fromHexToLuminanceRatio(value)))
        dispatch(setColorStarterHue(fromHexToHsl(value)[0]))
        dispatch(setColorStarterSaturation(fromHexToHsl(value)[1]))
        dispatch(setColorStarterLightness(fromHexToHsl(value)[2]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])


    return(
        <>
            <ColorPickerWrapper $colorTheme={colorTheme}>
                <ColorPicker format="hex" size="md" value={value} defaultValue={colorStarter} onChange={(value) => setValue(value)}/>
            </ColorPickerWrapper>
        </>
    )
}

export default ModalColorStarter