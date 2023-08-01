import { styled } from "styled-components"
import ColorCard from "./ColorCard"
import { useSelector } from 'react-redux'

const ColorCardsWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  & .color-cards-col{
    width:calc(33.33% - 20px);
  }
`

function ColorCards(){
    
    // Primary1
    const colorPrimary1Name = useSelector((state) => state.primary1.colorPrimary1Name)
    const colorPrimary1 = useSelector((state) => state.primary1.colorPrimary1)
    const primary1Hue = useSelector((state) => state.primary1.primary1Hue)
    const primary1Luminance = useSelector((state) => state.primary1.primary1Luminance)
    const primary1Saturation = useSelector((state) => state.primary1.primary1Saturation)
    const primary1Lightness = useSelector((state) => state.primary1.primary1Lightness)
    
    // Primary
    const colorPrimaryName = useSelector((state) => state.primary.colorPrimaryName)
    const colorPrimary = useSelector((state) => state.primary.colorPrimary)
    const primaryHue = useSelector((state) => state.primary.primaryHue)
    const primaryLuminance = useSelector((state) => state.primary.primaryLuminance)
    const primarySaturation = useSelector((state) => state.primary.primarySaturation)
    const primaryLightness = useSelector((state) => state.primary.primaryLightness)
    
    // Primary2
    const colorPrimary2Name = useSelector((state) => state.primary2.colorPrimary2Name)
    const colorPrimary2 = useSelector((state) => state.primary2.colorPrimary2)
    const primary2Hue = useSelector((state) => state.primary2.primary2Hue)
    const primary2Luminance = useSelector((state) => state.primary2.primary2Luminance)
    const primary2Saturation = useSelector((state) => state.primary2.primary2Saturation)
    const primary2Lightness = useSelector((state) => state.primary2.primary2Lightness)

    // Secondary1
    const colorSecondary1Name = useSelector((state) => state.secondary1.colorSecondary1Name)
    const colorSecondary1 = useSelector((state) => state.secondary1.colorSecondary1)
    const secondary1Hue = useSelector((state) => state.secondary1.secondary1Hue)
    const secondary1Luminance = useSelector((state) => state.secondary1.secondary1Luminance)
    const secondary1Saturation = useSelector((state) => state.secondary1.secondary1Saturation)
    const secondary1Lightness = useSelector((state) => state.secondary1.secondary1Lightness)

    // Secondary
    const colorSecondaryName = useSelector((state) => state.secondary.colorSecondaryName)
    const colorSecondary = useSelector((state) => state.secondary.colorSecondary)
    const secondaryHue = useSelector((state) => state.secondary.secondaryHue)
    const secondaryLuminance = useSelector((state) => state.secondary.secondaryLuminance)
    const secondarySaturation = useSelector((state) => state.secondary.secondarySaturation)
    const secondaryLightness = useSelector((state) => state.secondary.secondaryLightness)

    // Secondary2
    const colorSecondary2Name = useSelector((state) => state.secondary2.colorSecondary2Name)
    const colorSecondary2 = useSelector((state) => state.secondary2.colorSecondary2)
    const secondary2Hue = useSelector((state) => state.secondary2.secondary2Hue)
    const secondary2Luminance = useSelector((state) => state.secondary2.secondary2Luminance)
    const secondary2Saturation = useSelector((state) => state.secondary2.secondary2Saturation)
    const secondary2Lightness = useSelector((state) => state.secondary2.secondary2Lightness)

    // Light
    const colorLightName = useSelector((state) => state.light.colorLightName)
    const colorLight = useSelector((state) => state.light.colorLight)
    const lightHue = useSelector((state) => state.light.lightHue)
    const lightLuminance = useSelector((state) => state.light.lightLuminance)
    const lightSaturation = useSelector((state) => state.light.lightSaturation)
    const lightLightness = useSelector((state) => state.light.lightLightness)

    // Light2
    const colorLight2Name = useSelector((state) => state.light2.colorLight2Name)
    const colorLight2 = useSelector((state) => state.light2.colorLight2)
    const light2Hue = useSelector((state) => state.light2.light2Hue)
    const light2Luminance = useSelector((state) => state.light2.light2Luminance)
    const light2Saturation = useSelector((state) => state.light2.light2Saturation)
    const light2Lightness = useSelector((state) => state.light2.light2Lightness)

    return(
        <ColorCardsWrapper className="content_large">
            <div className="color-cards-col">
                {colorPrimary1.length > 0 &&
                <ColorCard name={colorPrimary1Name} color={colorPrimary1} luminance={primary1Luminance} hue={primary1Hue} saturation={primary1Saturation} lightness={primary1Lightness}/>
                }
                {colorPrimary.length > 0 &&
                <ColorCard name={colorPrimaryName} color={colorPrimary} luminance={primaryLuminance} hue={primaryHue} saturation={primarySaturation} lightness={primaryLightness}/>
                }
                {colorPrimary2.length > 0 &&
                <ColorCard name={colorPrimary2Name} color={colorPrimary2} luminance={primary2Luminance} hue={primary2Hue} saturation={primary2Saturation} lightness={primary2Lightness}/>
                }
            </div>
            <div className="color-cards-col">
                {colorSecondary1.length > 0 &&
                <ColorCard name={colorSecondary1Name} color={colorSecondary1} luminance={secondary1Luminance} hue={secondary1Hue} saturation={secondary1Saturation} lightness={secondary1Lightness}/>
                }
                {colorSecondary.length > 0 &&
                <ColorCard name={colorSecondaryName} color={colorSecondary} luminance={secondaryLuminance} hue={secondaryHue} saturation={secondarySaturation} lightness={secondaryLightness}/>
                }
                {colorSecondary2.length > 0 &&
                <ColorCard name={colorSecondary2Name} color={colorSecondary2} luminance={secondary2Luminance} hue={secondary2Hue} saturation={secondary2Saturation} lightness={secondary2Lightness}/>
                }
            </div>
            <div className="color-cards-col">
                {colorLight.length > 0 &&
                <ColorCard name={colorLightName} color={colorLight} luminance={lightLuminance} hue={lightHue} saturation={lightSaturation} lightness={lightLightness}/>
                }
                {colorLight2.length > 0 &&
                <ColorCard name={colorLight2Name} color={colorLight2} luminance={light2Luminance} hue={light2Hue} saturation={light2Saturation} lightness={light2Lightness}/>
                }
            </div>
        </ColorCardsWrapper>
    )
}

export default ColorCards