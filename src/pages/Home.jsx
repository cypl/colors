import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { fromHexToLuminanceRatio } from "../utils/luminanceRatio"
import { fromHexToHsl } from "../utils/hexToHsl"
import { DefineColor } from "../utils/defineColor"
import ColorCard from "../components/ColorCard"
import { colorsUI } from "../utils/colorsUI"
import Header from "../components/Header"
import ColorCards from "../components/ColorCards"
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

  // Starter
  const [colorStarter, setColorStarter] = useState("#517060")
  const [starterLuminance, setStarterLuminance] = useState(fromHexToLuminanceRatio(colorStarter))
  const [starterHue, setStarterHue] = useState(fromHexToHsl(colorStarter)[0])
  const [starterSaturation, setStarterSaturation] = useState(fromHexToHsl(colorStarter)[1])
  const [starterLightness, setStarterLightness] = useState(fromHexToHsl(colorStarter)[2])
  
  // Primary1
  const colorPrimary1 = useSelector((state) => state.primary1.colorPrimary1)
  //const colorPrimary1Name = useSelector((state) => state.primary1.colorPrimary1Name)
  //const primary1Luminance = useSelector((state) => state.primary1.primary1Luminance)
  
  // Primary
  const colorPrimary = useSelector((state) => state.primary.colorPrimary)
  //const colorPrimaryName = useSelector((state) => state.primary.colorPrimaryName)
  //const primaryLuminance = useSelector((state) => state.primary.primaryLuminance)
  
  // Primary2
  const colorPrimary2 = useSelector((state) => state.primary2.colorPrimary2)
  //const colorPrimary2Name = useSelector((state) => state.primary2.colorPrimary2Name)
  //const primary2Luminance = useSelector((state) => state.primary2.primary2Luminance)

  // Secondary1
  const colorSecondary1 = useSelector((state) => state.secondary1.colorSecondary1)
  //const colorSecondary1Name = useSelector((state) => state.secondary1.colorSecondary1Name)
  //const secondary1Luminance = useSelector((state) => state.secondary1.secondary1Luminance)

  // Secondary
  const colorSecondary = useSelector((state) => state.secondary.colorSecondary)
  //const colorSecondaryName = useSelector((state) => state.secondary.colorSecondaryName)
  //const secondaryLuminance = useSelector((state) => state.secondary.secondaryLuminance)

  // Secondary2
  const colorSecondary2 = useSelector((state) => state.secondary2.colorSecondary2)
  //const colorSecondary2Name = useSelector((state) => state.secondary2.colorSecondary2Name)
  //const secondary2Luminance = useSelector((state) => state.secondary2.secondary2Luminance)

  // Light
  const colorLight = useSelector((state) => state.light.colorLight)
  //const colorLightName = useSelector((state) => state.light.colorLightName)
  //const lightLuminance = useSelector((state) => state.light.lightLuminance)

  // Light2
  const colorLight2 = useSelector((state) => state.light2.colorLight2)
  //const colorLight2Name = useSelector((state) => state.light2.colorLight2Name)
  //const light2Luminance = useSelector((state) => state.light2.light2Luminance)
  

  // by default, style is "corporate"
  const [style, setStyle] = useState("corporate")

  useEffect(()=> {
    function handleClickStyle(styleSlug){
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
      handleClickStyle(style)
  }, [style])

  return (
    <>
      <Header/>

      <StyleSelector $colorTheme={colorTheme}>
        <SelectorWrapper className="content_large">
          <Selector $colorTheme={colorTheme}>
            <span className={style === "corporate" ? "active" : undefined} onClick={() => setStyle("corporate")}>Corporate</span>
            <span className={style === "spicy" ? "active" : undefined} onClick={() => setStyle("spicy")}>Spicy</span>
            <span className={style === "old-fashioned" ? "active" : undefined} onClick={() => setStyle("old-fashioned")}>Old fashioned</span>
          </Selector>
        </SelectorWrapper>
      </StyleSelector>

      {colorPrimary1 && colorPrimary && colorPrimary2 && colorSecondary1 && colorSecondary && colorSecondary2 && colorLight && colorLight2 &&
        <Panorama $colorTheme={colorTheme}>
            <div className="content_large">
              <PanoramaWrapper>
                <div className="third" style={{ backgroundColor: colorPrimary1 }}></div>
                <div className="third" style={{ backgroundColor: colorPrimary }}></div>
                <div className="third" style={{ backgroundColor: colorPrimary2 }}></div>
              </PanoramaWrapper>
              <PanoramaWrapper>
                <div className="third" style={{ backgroundColor: colorSecondary1 }}></div>
                <div className="third" style={{ backgroundColor: colorSecondary }}></div>
                <div className="third" style={{ backgroundColor: colorSecondary2 }}></div>
              </PanoramaWrapper>
              <PanoramaWrapper>
                <div className="half" style={{ backgroundColor: colorLight }}></div>
                <div className="half" style={{ backgroundColor: colorLight2 }}></div>
              </PanoramaWrapper>
            </div>
        </Panorama>
      }

    <ColorCards/>

    </>
  )
}

export default Home

const Panorama = styled.div`
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
  padding:15px 0px 30px 0px;
`
const PanoramaWrapper = styled.div`
  height:200px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  & .third{
    width:33.33%;
  }
  & .half{
    width:50%;
  }
`
const StyleSelector = styled.div`
  font-size:12px;
  line-height:1;
  color:#fff;
  padding:15px 0px 0px 0px;
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
`
const SelectorWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`
const Selector = styled.span`
  display: inline-block;
  border-radius:4px;
  overflow:hidden;
  border:1px solid ${props => props.$colorTheme === "Night" ? `${colorsUI.darkless}` : `${colorsUI.lightless}`};
  & span{
    display:inline-block;
    padding:10px 12px;
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