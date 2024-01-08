import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { ColorPicker } from '@mantine/core'
import { colorsUI, sizesUI } from "../utils/UI"
import { useDispatch, useSelector } from 'react-redux'
import { setColorStarter, setColorStarterLuminance, setColorStarterHue, setColorStarterSaturation, setColorStarterLightness } from "../store/colorStarterSlice"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"

const FormHexInput = styled.form`
    font-size:${sizesUI.text};
    //height:2.4rem;
    margin-bottom:${sizesUI.gapGrid};
    & div{
        display:flex;
        border-radius:${sizesUI.radius};
    }
    & label{
        padding: 0.3rem 0.9rem 0.3rem 0rem;
        color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
        background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.lightest}`};
        position:relative;
        & span{
            position:absolute;
            height:100%;
            right:0;
            top:0;
            width:${sizesUI.radius};
            border-radius: ${sizesUI.radius} 0 0 ${sizesUI.radius};
        }
    }
    & .input_wrapper{
        position:relative;
        padding:0.3rem 0;
        margin-left: -0.1rem;
        & svg{
            position:absolute;
            height:0.85rem;
            width:0.85rem;
            left: 0.3rem;
            top: 0.48rem;
            color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkTextBtn}` : `${colorsUI.lightTextBtn}`};
            transition:0.15s color ease-in-out;
            z-index:2;
        }
        & input{
            position:relative;
            z-index:1;
            border: 0;
            border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
            background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.lightest}`};
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
            & svg{
                color:${colorsUI.alert};
                transition:0.15s color ease-in-out;
            }
        }
    } 
`
const ColorPickerWrapper = styled.div`
    padding:0.9rem;
    background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.lightest}`};
    border-radius:${sizesUI.radius};
    border:1px solid ${colorsUI.darkless};
    & .mantine-ColorPicker-wrapper{
        width:100%;
        position:relative;
        height:calc(100% - 2.2rem);
    }
    & .mantine-ColorPicker-saturation{
        height: calc(100% - 2.7rem);
    }
`
function ColorStarter(){
    
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
                <FormHexInput $colorTheme={colorTheme}>
                    <div style={{ backgroundColor: hexInputValue }}>
                        <label>Couleur de départ<span style={{ backgroundColor: hexInputValue }}></span></label>
                        <span className={validHexInput ? "valid input_wrapper" : "not-valid input_wrapper"}>
                            {validHexInput ?
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                :
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            }
                            <input value={hexInputValue} onChange={changeColorInput}/>
                        </span>
                    </div>
                </FormHexInput>
                <ColorPicker className="color_picker_mantine" format="hex" size="md" value={value} defaultValue={colorStarter} onChange={(newValue) => setValue(newValue)}/>
            </ColorPickerWrapper>
        </>
    )
}

export default ColorStarter