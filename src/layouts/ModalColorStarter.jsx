import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { ColorPicker } from '@mantine/core'
import { colorsUI, sizesUI } from "../utils/UI"
import { useDispatch, useSelector } from 'react-redux'
import { setColorStarter, setColorStarterLuminance, setColorStarterHue, setColorStarterSaturation, setColorStarterLightness } from "../store/colorStarterSlice"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"

const FormHexInput = styled.form`
    display:flex;
    font-size:${sizesUI.text};
    &.bottom-margin{
        padding-bottom:0.4rem;
    }
    & label{
        padding: 0.1rem 0.4rem 0.1rem 0rem;
        color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
    }
    & .input_wrapper{
        position:relative;
        &::after{
            content: "";
            position: absolute;
            width: calc(100% + 0px);
            height: calc(100% - 2px);
            top: -4px;
            left: -4px;
            border:4px solid ${colorsUI.alert};
            opacity: 0;
            border-radius: 0.45rem;
            transition:0.15s opacity ease-in-out;
            z-index:0;
        }
        & svg{
            position:absolute;
            height:0.85rem;
            width:0.85rem;
            left:0.22rem;
            top:0.2rem;
            color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkTextBtn}` : `${colorsUI.lightTextBtn}`};
            transition:0.15s color ease-in-out;
        }
        & input{
            position:relative;
            z-index:1;
            border: 0;
            border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
            background-color: transparent;
            color: ${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
            width: 5.3rem;
            padding: 0.1rem 0.1rem 0.1rem 1.5rem;
            border-radius:0.2rem;
            line-height: 1;
            transition:0.15s border-color ease-in-out;
            &:focus{
                outline:none;
            }
        }
        &.not-valid{
            & input{
                border:1px solid ${colorsUI.alert};
                transition:0.15s border-color ease-in-out;
            }
            &::after{
                opacity: 0.3;
                transition:0.15s opacity ease-in-out;
            }
            & svg{
                color:${colorsUI.alert};
                transition:0.15s color ease-in-out;
            }
        }
    } 
`
const ColorPickerWrapper = styled.div`
    padding:15px;
    background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.lightest}`};
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
    
    useEffect(() => {
        dispatch(setColorStarter(value))
        dispatch(setColorStarterLuminance(fromHexToLuminanceRatio(value)))
        dispatch(setColorStarterHue(fromHexToHsl(value)[0]))
        dispatch(setColorStarterSaturation(fromHexToHsl(value)[1]))
        dispatch(setColorStarterLightness(fromHexToHsl(value)[2]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const [hexInputValue, setHexInputValue] = useState(colorStarter)
    const [validHexInput, setValidHexInput] = useState(true)
    
    useEffect(() => {
        setHexInputValue(value.toUpperCase())
    }, [value])
   
    const changeColorInput = (event) => {
        let newValue = event.target.value.toUpperCase()
        setHexInputValue(newValue)
        const hexPattern = /^#[0-9A-Fa-f]{6}$/
        if (hexPattern.test(newValue)){
            setValue(newValue)
            setValidHexInput(true)
        } else {
            setValidHexInput(false)
        }
    }

    return(
        <>
            <ColorPickerWrapper $colorTheme={colorTheme}>
                <FormHexInput className="bottom-margin" $colorTheme={colorTheme}>
                    <label>Hex</label>
                    <span className={validHexInput ? "valid input_wrapper" : "not-valid input_wrapper"}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        <input value={hexInputValue} onChange={changeColorInput}/>
                    </span>
                </FormHexInput>
                <ColorPicker format="hex" size="md" value={value} defaultValue={colorStarter} onChange={(newValue) => setValue(newValue)}/>
            </ColorPickerWrapper>
        </>
    )
}

export default ModalColorStarter