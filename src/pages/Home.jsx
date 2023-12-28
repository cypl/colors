import { useState, useEffect, useContext } from "react"
import { styled } from "styled-components"
import { DefineColor } from "../utils/defineColor"
import { colorsUI, sizesUI } from "../utils/UI"
import Header from "../components/Header"
import Panorama from "../components/Panorama"
import ModalColorStarter from "../layouts/ModalColorStarter"
import { ModalContext } from "react-modal-classic"
import { modalThemeColorPicker } from "../utils/modalThemes"
import { useDispatch, useSelector } from 'react-redux'
import { 
  setColorPrimary1,
  setPrimary1Luminance,
  setPrimary1Hue,
  setPrimary1Saturation,
  setPrimary1Lightness } from "../store/primary1Slice"
import { 
  setColorPrimary,
  setPrimaryLuminance,
  setPrimaryHue,
  setPrimarySaturation,
  setPrimaryLightness } from "../store/primarySlice"
import { 
  setColorPrimary2,
  setPrimary2Luminance,
  setPrimary2Hue,
  setPrimary2Saturation,
  setPrimary2Lightness } from "../store/primary2Slice"
import { 
  setColorSecondary1,
  setSecondary1Luminance,
  setSecondary1Hue,
  setSecondary1Saturation,
  setSecondary1Lightness } from "../store/secondary1Slice"
import { 
  setColorSecondary,
  setSecondaryLuminance,
  setSecondaryHue,
  setSecondarySaturation,
  setSecondaryLightness } from "../store/secondarySlice"
import { 
  setColorSecondary2,
  setSecondary2Luminance,
  setSecondary2Hue,
  setSecondary2Saturation,
  setSecondary2Lightness } from "../store/secondary2Slice"
import { 
  setColorLight,
  setLightLuminance,
  setLightHue,
  setLightSaturation,
  setLightLightness } from "../store/lightSlice"
import { 
  setColorLight2,
  setLight2Luminance,
  setLight2Hue,
  setLight2Saturation,
  setLight2Lightness } from "../store/light2Slice"


function Home() {

  const dispatch = useDispatch()
  const colorTheme = useSelector(state => state.colorTheme)

  const { openModal } = useContext(ModalContext)

  // Starter
  const colorStarter = useSelector(state => state.colorStarter.color)
  const starterHue = useSelector(state => state.colorStarter.hue)
  const starterSaturation = useSelector(state => state.colorStarter.saturation)
  const starterLightness = useSelector(state => state.colorStarter.lightness)

  // by default, style is "corporate"
  const [style, setStyle] = useState("corporate")

  const handleClickStyle = (styleSlug) => {
      if(styleSlug === "corporate"){
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 190, 50, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 190, 25, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 190, 10, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 850, setLightLuminance, setLightHue, setLightSaturation, setLightLightness, setColorLight, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 120, 10, 0, 650, setLight2Luminance, setLight2Hue, setLight2Saturation, setLight2Lightness, setColorLight2, dispatch)
      }
      if(styleSlug === "spicy"){
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 50, 0, 850, setLightLuminance, setLightHue, setLightSaturation, setLightLightness, setColorLight, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 650, setLight2Luminance, setLight2Hue, setLight2Saturation, setLight2Lightness, setColorLight2, dispatch)
      }
      if(styleSlug === "old-fashioned"){
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 40, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 40, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 0, 20, 0, 850, setLightLuminance, setLightHue, setLightSaturation, setLightLightness, setColorLight, dispatch)
        DefineColor(starterHue, starterSaturation, starterLightness, 60, 20, 0, 650, setLight2Luminance, setLight2Hue, setLight2Saturation, setLight2Lightness, setColorLight2, dispatch)
      }
    }

  useEffect(()=> {
    handleClickStyle(style)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [style, colorStarter])

  return (
    <>
      <Header/>
      <StyleSelector $colorTheme={colorTheme}>
        <SelectorWrapper className="content_large">
          <StartHere $colorTheme={colorTheme} onClick={() => openModal(<ModalColorStarter/>, modalThemeColorPicker)}>
            <span className="color_starter_btn">
              <span className="color_starter" style={{backgroundColor:colorStarter}}></span>Couleur de départ
            </span>
          </StartHere>
          <Selector $colorTheme={colorTheme}>
            <span className={style === "corporate" ? "active" : undefined} onClick={() => setStyle("corporate")}>Corporate</span>
            <span className={style === "spicy" ? "active" : undefined} onClick={() => setStyle("spicy")}>Spicy</span>
            <span className={style === "old-fashioned" ? "active" : undefined} onClick={() => setStyle("old-fashioned")}>Old fashioned</span>
          </Selector>
        </SelectorWrapper>
      </StyleSelector>
      <Panorama />
    </>
  )
}

export default Home

const StyleSelector = styled.div`
  font-size:${sizesUI.text};
  line-height:1;
  height:56px;
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
  display:flex;
`
const SelectorWrapper = styled.div`
  display:flex;
  justify-content:space-between;
`
const StartHere = styled.div`
  display: inline-block;
  border-radius:${sizesUI.radius};
  overflow:hidden;
  border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
  & .color_starter_btn{
    position:relative;
    display:inline-block;
    padding:8px 12px 8px 62px;
    cursor:pointer;
    background-color: ${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
    color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
    transition:0.15s background-color ease-in-out, 0.0.5s color ease-in-out;
    & .color_starter{
      position:absolute;
      left: 0.25rem;
      top: 0.25rem;
      width: 3rem;
      height: calc(100% - 0.5rem);
      border-radius: 0.2rem;
      transition:0.4s border-radius ease-in-out, transition:0.4s height ease-in-out, transition:0.4s left ease-in-out, transition:0.4s width ease-in-out;
    }
    &:hover{
      background-color: ${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
      color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
      transition:0.15s background-color ease-in-out, 0.0.5s color ease-in-out;
      & .color_starter{
        left: 0rem;
        top: 0rem;
        width: 3.25rem;
        height: 100%;
        border-radius: 0;
        transition:0.4s border-radius ease-in-out, transition:0.4s height ease-in-out, transition:0.4s left ease-in-out, transition:0.4s width ease-in-out;
      }
    }
  }
  
`
const Selector = styled.span`
  display: inline-block;
  border-radius:${sizesUI.radius};
  overflow:hidden;
  border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
  & span{
    display:inline-block;
    padding:8px 12px;
    cursor:pointer;
    background-color:transparent;
    color: ${props => props.$colorTheme === "Night" ? `${colorsUI.darkTextBtn}` : `${colorsUI.lightTextBtn}`};
    transition:0.1s background-color ease-in-out, 0.0.5s color ease-in-out;
    &:hover{
      background-color: ${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
      color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
      transition:0.1s background-color ease-in-out, 0.0.5s color ease-in-out;
    }
    &.active{
      background-color: ${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
      color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkColoredValue}` : `${colorsUI.lightColoredValue}`};
      transition:0.1s background-color ease-in-out, 0.0.5s color ease-in-out;
    }
  }
`