import { useState, useEffect } from "react"
import { styled } from "styled-components"
import { fromHexToLuminanceRatio } from "./utils/luminanceRatio"
import { fromHexToHsl } from "./utils/hexToHsl"
import { defineColor } from "./utils/defineColor"
import ColorCard from "./components/ColorCard"

function App() {
  const [colorStarter, setColorStarter] = useState("#cb007d")
  const [starterLuminance, setStarterLuminance] = useState(fromHexToLuminanceRatio(colorStarter))
  const [starterHue, seStarterHue] = useState(fromHexToHsl(colorStarter)[0])
  const [starterSaturation, setStarterSaturation] = useState(fromHexToHsl(colorStarter)[1])
  const [starterLightness, setStarterLightness] = useState(fromHexToHsl(colorStarter)[2])

  const [style, setStyle] = useState("corporate")
  //console.log(style)
  useEffect(()=> {
    //handleClick()
    handleClickStyle(style)
  }, [style])



  const [colorPrimary1, setColorPrimary1] = useState("")
  const [primary1Luminance, setPrimary1Luminance] = useState()
  const [primary1Hue, setPrimary1Hue] = useState()
  const [primary1Saturation, setPrimary1Saturation] = useState()
  const [primary1Lightness, setPrimary1Lightness] = useState()

  const [colorPrimary, setColorPrimary] = useState("")
  const [primaryLuminance, setPrimaryLuminance] = useState()
  const [primaryHue, setPrimaryHue] = useState()
  const [primarySaturation, setPrimarySaturation] = useState()
  const [primaryLightness, setPrimaryLightness] = useState()

  const [colorPrimary2, setColorPrimary2] = useState("")
  const [primary2Luminance, setPrimary2Luminance] = useState()
  const [primary2Hue, setPrimary2Hue] = useState()
  const [primary2Saturation, setPrimary2Saturation] = useState()
  const [primary2Lightness, setPrimary2Lightness] = useState()

  const [colorSecondary1, setColorSecondary1] = useState("")
  const [secondary1Luminance, setSecondary1Luminance] = useState()
  const [secondary1Hue, setSecondary1Hue] = useState()
  const [secondary1Saturation, setSecondary1Saturation] = useState()
  const [secondary1Lightness, setSecondary1Lightness] = useState()

  const [colorSecondary, setColorSecondary] = useState("")
  const [secondaryLuminance, setSecondaryLuminance] = useState()
  const [secondaryHue, setSecondaryHue] = useState()
  const [secondarySaturation, setSecondarySaturation] = useState()
  const [secondaryLightness, setSecondaryLightness] = useState()

  const [colorSecondary2, setColorSecondary2] = useState("")
  const [secondary2Luminance, setSecondary2Luminance] = useState()
  const [secondary2Hue, setSecondary2Hue] = useState()
  const [secondary2Saturation, setSecondary2Saturation] = useState()
  const [secondary2Lightness, setSecondary2Lightness] = useState()

  const [colorClair, setColorClair] = useState("")
  const [clairLuminance, setClairLuminance] = useState()
  const [clairHue, setClairHue] = useState()
  const [clairSaturation, setClairSaturation] = useState()
  const [clairLightness, setClairLightness] = useState()

  const [colorClair2, setColorClair2] = useState("")
  const [clair2Luminance, setClair2Luminance] = useState()
  const [clair2Hue, setClair2Hue] = useState()
  const [clair2Saturation, setClair2Saturation] = useState()
  const [clair2Lightness, setClair2Lightness] = useState()


  // function handleClick(){
  //   defineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1)
  //   defineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary)
  //   defineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2)
  //   defineColor(starterHue, starterSaturation, starterLightness, 120, 50, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1)
  //   defineColor(starterHue, starterSaturation, starterLightness, 120, 25, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary)
  //   defineColor(starterHue, starterSaturation, starterLightness, 120, 10, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2)
  //   defineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 850, setClairLuminance, setClairHue, setClairSaturation, setClairLightness, setColorClair)
  //   defineColor(starterHue, starterSaturation, starterLightness, 120, 10, 0, 650, setClair2Luminance, setClair2Hue, setClair2Saturation, setClair2Lightness, setColorClair2)
  // }

  function handleClickStyle(styleSlug){
    if(styleSlug === "corporate"){
      defineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 70, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2)
      defineColor(starterHue, starterSaturation, starterLightness, 120, 50, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1)
      defineColor(starterHue, starterSaturation, starterLightness, 120, 25, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary)
      defineColor(starterHue, starterSaturation, starterLightness, 120, 10, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 850, setClairLuminance, setClairHue, setClairSaturation, setClairLightness, setColorClair)
      defineColor(starterHue, starterSaturation, starterLightness, 120, 10, 0, 650, setClair2Luminance, setClair2Hue, setClair2Saturation, setClair2Lightness, setColorClair2)
    }
    if(styleSlug === "spicy"){
      defineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 100, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 100, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 50, 0, 850, setClairLuminance, setClairHue, setClairSaturation, setClairLightness, setColorClair)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 650, setClair2Luminance, setClair2Hue, setClair2Saturation, setClair2Lightness, setColorClair2)
    }
    if(styleSlug === "old-fashioned"){
      defineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 400, setPrimary1Luminance, setPrimary1Hue, setPrimary1Saturation, setPrimary1Lightness, setColorPrimary1)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 30, 0, 140, setPrimaryLuminance, setPrimaryHue, setPrimarySaturation, setPrimaryLightness, setColorPrimary)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 40, 0, 14, setPrimary2Luminance, setPrimary2Hue, setPrimary2Saturation, setPrimary2Lightness, setColorPrimary2)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 400, setSecondary1Luminance, setSecondary1Hue, setSecondary1Saturation, setSecondary1Lightness, setColorSecondary1)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 30, 0, 140, setSecondaryLuminance, setSecondaryHue, setSecondarySaturation, setSecondaryLightness, setColorSecondary)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 40, 0, 14, setSecondary2Luminance, setSecondary2Hue, setSecondary2Saturation, setSecondary2Lightness, setColorSecondary2)
      defineColor(starterHue, starterSaturation, starterLightness, 0, 20, 0, 850, setClairLuminance, setClairHue, setClairSaturation, setClairLightness, setColorClair)
      defineColor(starterHue, starterSaturation, starterLightness, 60, 20, 0, 650, setClair2Luminance, setClair2Hue, setClair2Saturation, setClair2Lightness, setColorClair2)
    }
    
  }


  return (
    <>
      <ColorText>
        <div className="color-extract" style={{ backgroundColor: colorStarter }}></div>
        <p>
          <span className="color-looks" style={{ backgroundColor: colorStarter }}></span>
          starter: <span className="colored-value">{colorStarter}</span>
        </p>
        <p>Luminance ratio: <span className="colored-value">{starterLuminance}</span></p>
        <p>HSL value: <span className="colored-value">hsl({starterHue}°, {starterSaturation}%, {starterLightness}%)</span></p>
      </ColorText>

      {/* <Button onClick={() => handleClick()}>Define colors</Button> */}
      
      <StyleSelector className="content_large">
        <span>Your style: </span>
        <StyleSelectorWrapper>
          <span className={style === "corporate" ? "active" : undefined} onClick={() => setStyle("corporate")}>Corporate</span>
          <span className={style === "spicy" ? "active" : undefined} onClick={() => setStyle("spicy")}>Spicy</span>
          <span className={style === "old-fashioned" ? "active" : undefined} onClick={() => setStyle("old-fashioned")}>Old fashioned</span>
        </StyleSelectorWrapper>
      </StyleSelector>

      {colorPrimary1 && colorPrimary && colorPrimary2 &&
      colorSecondary1 && colorSecondary && colorSecondary2 &&
        <Panorama className="content_large">
          <PanoramaWrapper>
            <div style={{ backgroundColor: colorPrimary1 }}></div>
            <div style={{ backgroundColor: colorPrimary }}></div>
            <div style={{ backgroundColor: colorPrimary2 }}></div>
          </PanoramaWrapper>
          <PanoramaWrapper>
            <div style={{ backgroundColor: colorSecondary1 }}></div>
            <div style={{ backgroundColor: colorSecondary }}></div>
            <div style={{ backgroundColor: colorSecondary2 }}></div>
          </PanoramaWrapper>
          <PanoramaWrapper>
            <div style={{ backgroundColor: colorClair }}></div>
            <div style={{ backgroundColor: colorClair2 }}></div>
          </PanoramaWrapper>
        </Panorama>
      }

    <ColorCards className="content_width">
      <div className="color-cards-col">
        {colorPrimary1.length > 0 &&
          <ColorCard name={"primary1"} color={colorPrimary1} luminance={primary1Luminance} hue={primary1Hue} saturation={primary1Saturation} lightness={primary1Lightness}/>
        }
        {colorPrimary.length > 0 &&
          <ColorCard name={"primary"} color={colorPrimary} luminance={primaryLuminance} hue={primaryHue} saturation={primarySaturation} lightness={primaryLightness}/>
        }
        {colorPrimary2.length > 0 &&
          <ColorCard name={"primary2"} color={colorPrimary2} luminance={primary2Luminance} hue={primary2Hue} saturation={primary2Saturation} lightness={primary2Lightness}/>
        }
        {colorClair.length > 0 &&
          <ColorCard name={"clair"} color={colorClair} luminance={clairLuminance} hue={clairHue} saturation={clairSaturation} lightness={clairLightness}/>
        }
      </div>
      <div className="color-cards-col">
        {colorSecondary1.length > 0 &&
          <ColorCard name={"secondary1"} color={colorSecondary1} luminance={secondary1Luminance} hue={secondary1Hue} saturation={secondary1Saturation} lightness={secondary1Lightness}/>
        }
        {colorSecondary.length > 0 &&
          <ColorCard name={"secondary"} color={colorSecondary} luminance={secondaryLuminance} hue={secondaryHue} saturation={secondarySaturation} lightness={secondaryLightness}/>
        }
        {colorSecondary2.length > 0 &&
          <ColorCard name={"secondary2"} color={colorSecondary2} luminance={secondary2Luminance} hue={secondary2Hue} saturation={secondary2Saturation} lightness={secondary2Lightness}/>
        }
        {colorClair2.length > 0 &&
          <ColorCard name={"clair2"} color={colorClair2} luminance={clair2Luminance} hue={clair2Hue} saturation={clair2Saturation} lightness={clair2Lightness}/>
        }
      </div>
    </ColorCards>

    </>
  )
}

export default App

const Panorama = styled.div`
  margin-top:30px;
`
const PanoramaWrapper = styled.div`
  height:120px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  & div{
    width:33.33%;
  }
`
const ColorCards = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  & .color-cards-col{
    width:calc(50% - 15px);
  }
`
const ColorText = styled.div`
  border:1px solid #555;
  padding:12px 15px 12px 115px;
  border-radius:4px;
  width:350px;
  margin:30px 0;
  position:relative;
  overflow:hidden;
  & .color-extract{
    width: 100px;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  & p{
    margin:0;
  }
  & .color-looks{
    height:18px;
    width:18px;
    border-radius:100%;
    display:inline-block;
    vertical-align:-3px;
    margin-right:5px;
  }
  & .colored-value{
    color:#e2bd7d;
  }
`
const Button = styled.button`
  background-color:#999;
  font-size:12px;
  color:#242424;
  line-height:1;
  padding:8px 12px;
  border-radius:4px;
  border:none;
  cursor:pointer;
`
const StyleSelector = styled.p`
  font-size:12px;
  line-height:1;
  color:#fff;
`
const StyleSelectorWrapper = styled.span`
  display: inline-block;
  border-radius:4px;
  overflow:hidden;
  border:1px solid rgba(120,120,120,0.2);
  & span{
    display:inline-block;
    padding:10px 12px;
    cursor:pointer;
    &:hover{
      background-color: rgba(120,120,120,0.1);
      transition:0.1s background-color ease-in-out;
    }
    &.active{
      background-color: rgba(120,120,120,0.1);
      transition:0.1s background-color ease-in-out;
    }
  }
`
