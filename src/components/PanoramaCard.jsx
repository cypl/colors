import { useState } from "react"
import { useSelector } from 'react-redux'
import { styled } from "styled-components"
import { colorsUI } from "../utils/UI"
import PropTypes from 'prop-types'

const ColorFlag = styled.p`
    position:absolute;
    left:10px;
    top:10px;
    background-color:${props => props.$colorTheme === "Night" ? `rgba(0,0,0,0.5)` : `rgba(255,255,255,0.85)`};
    color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
    padding:5px 10px 6px 10px;
    font-size:10.5px;
    line-height:1;
    border-radius:12px;
    opacity:0;
    transform:translateY(15px);
    transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
    & span{
        color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
    }
    &.visible{
        opacity:1;
        transform:translateY(0px);
        transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
    }
`
const ColorLuminance = styled.p`
    position:absolute;
    right:10px;
    top:10px;
    background-color:${props => props.$colorTheme === "Night" ? `rgba(0,0,0,0.5)` : `rgba(255,255,255,0.85)`};
    padding:5px 10px 6px 10px;
    font-size:10.5px;
    line-height:1;
    border-radius:12px;
    opacity:0;
    transform:translateY(15px);
    transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
    & svg{
        display:inline-block;
        margin-right:3px;
        height:10px;
        vertical-align:-1px;
        & path{
            fill:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
            fill-opacity:${props => props.$colorTheme === "Night" ? `0.7` : `0.4`};
        }
    }
    & span{
        color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
    }
    &.visible{
        opacity:1;
        transform:translateY(0px);
        transition:0.1s opacity ease-in-out, 0.1s transform ease-in-out;
    }
`

function PanoramaCard({ name, color, luminance, classname }){
    const colorTheme = useSelector(state => state.colorTheme)
    const [isHover, setIsHover] = useState(false)
    return (
        <div className={classname} style={{ backgroundColor: color }} onMouseEnter={() => setIsHover(true)}  onMouseLeave={() => setIsHover(false)}>
            <ColorFlag className={isHover && "visible"} $colorTheme={colorTheme}>{name}: <span>{color}</span></ColorFlag>
            <ColorLuminance className={isHover && "visible"} $colorTheme={colorTheme}>
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <span>{luminance}</span>
            </ColorLuminance>
        </div>
    )
}

export default PanoramaCard

PanoramaCard.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    luminance: PropTypes.number,
    classname: PropTypes.string,
}