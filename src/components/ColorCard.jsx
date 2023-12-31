import { styled } from "styled-components"
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { colorsUI } from "../utils/UI"
import { fromHexToRgb } from "../utils/hexToRgb"

function ColorCard({name, color, luminance, hue, saturation, lightness}){

    const colorTheme = useSelector(state => state.colorTheme)

    const[colorRGB, setColorRGB] = useState(fromHexToRgb(color))

    useEffect(() => {
      setColorRGB(fromHexToRgb(color))
    }, [color])

    return(
        <ColorText $colorTheme={colorTheme}>
          <div className="color-extract" style={{ backgroundColor: color }}></div>
          <ColorName $colorTheme={colorTheme}>
            <p className="color-name">{name}: <span className="colored-value">{color}</span></p>
            <LuminanceFlag $colorTheme={colorTheme}>
              <svg viewBox="0 0 15 15" className="icon-luminance" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
              <span className="colored-value">{color.length > 0 && luminance}</span>
            </LuminanceFlag>
          </ColorName>
          <Translations $colorTheme={colorTheme}>
            <p>RGB: <span className="colored-value">rgb({colorRGB[0]}, {colorRGB[1]}, {colorRGB[2]})</span></p>
            <p>HSL: <span className="colored-value">hsl({hue}°, {saturation}%, {lightness}%)</span></p>
          </Translations>
        </ColorText>
    )
}

export default ColorCard

ColorCard.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    luminance: PropTypes.number,
    hue: PropTypes.number,
    saturation: PropTypes.number,
    lightness: PropTypes.number,
}
  

const ColorText = styled.div`
  border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
  padding:12px 15px 12px 155px;
  border-radius:5px;
  margin:30px 0;
  position:relative;
  overflow:hidden;
  & .color-extract{
    width: 140px;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  & .colored-value{
    color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
  }
  `
const ColorName = styled.div`
  display:flex;
  justify-content:space-between;
  & .color-name{ 
    margin:0;
    font-size:13px;
    font-weight:700;
    color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
  }
`
const LuminanceFlag = styled.span`
  font-size:11px;
  line-height:1;
  padding:5px 10px;
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
  border-radius:12px;
  & svg{
    height:10px;
    margin-right:3px;
    vertical-align:-1px;
    & path{
      fill:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
      fill-opacity:${props => props.$colorTheme === "Night" ? `0.7` : `0.4`};
    }
  }
`
const Translations = styled.div`
  margin-top:12px;
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
  padding:10px 10px 10px 15px;
  border-radius:4px;
  & p{
    color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
    font-size:13px;
  }
`