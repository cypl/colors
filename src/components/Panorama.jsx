import { styled } from "styled-components"
import { useSelector } from 'react-redux'
import { colorsUI } from "../utils/colorsUI"
import PanoramaCard from "./PanoramaCard"

const PanoramaContainer = styled.div`
  background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
  padding:15px 0px 30px 0px;
`
const PanoramaWrapper = styled.div`
  height:200px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  & .third{
    position:relative;
    width:33.33%;
  }
  & .half{
    position:relative;
    width:50%;
  }
`

function Panorama(){

    const colorTheme = useSelector(state => state.colorTheme)

    // Primary1
    const colorPrimary1 = useSelector((state) => state.primary1.colorPrimary1)
    const colorPrimary1Name = useSelector((state) => state.primary1.colorPrimary1Name)
    const primary1Luminance = useSelector((state) => state.primary1.primary1Luminance)

    // Primary
    const colorPrimary = useSelector((state) => state.primary.colorPrimary)
    const colorPrimaryName = useSelector((state) => state.primary.colorPrimaryName)
    const primaryLuminance = useSelector((state) => state.primary.primaryLuminance)

    // Primary2
    const colorPrimary2 = useSelector((state) => state.primary2.colorPrimary2)
    const colorPrimary2Name = useSelector((state) => state.primary2.colorPrimary2Name)
    const primary2Luminance = useSelector((state) => state.primary2.primary2Luminance)

    // Secondary1
    const colorSecondary1 = useSelector((state) => state.secondary1.colorSecondary1)
    const colorSecondary1Name = useSelector((state) => state.secondary1.colorSecondary1Name)
    const secondary1Luminance = useSelector((state) => state.secondary1.secondary1Luminance)

    // Secondary
    const colorSecondary = useSelector((state) => state.secondary.colorSecondary)
    const colorSecondaryName = useSelector((state) => state.secondary.colorSecondaryName)
    const secondaryLuminance = useSelector((state) => state.secondary.secondaryLuminance)

    // Secondary2
    const colorSecondary2 = useSelector((state) => state.secondary2.colorSecondary2)
    const colorSecondary2Name = useSelector((state) => state.secondary2.colorSecondary2Name)
    const secondary2Luminance = useSelector((state) => state.secondary2.secondary2Luminance)

    // Light
    const colorLight = useSelector((state) => state.light.colorLight)
    const colorLightName = useSelector((state) => state.light.colorLightName)
    const lightLuminance = useSelector((state) => state.light.lightLuminance)

    // Light2
    const colorLight2 = useSelector((state) => state.light2.colorLight2)
    const colorLight2Name = useSelector((state) => state.light2.colorLight2Name)
    const light2Luminance = useSelector((state) => state.light2.light2Luminance)

    return(
        <>
            {colorPrimary1 && colorPrimary && colorPrimary2 && colorSecondary1 && colorSecondary && colorSecondary2 && colorLight && colorLight2 &&
                <PanoramaContainer $colorTheme={colorTheme}>
                    <div className="content_large">
                        <PanoramaWrapper>
                            <PanoramaCard color={colorPrimary1} name={colorPrimary1Name} luminance={primary1Luminance} classname={"third"}/>
                            <PanoramaCard color={colorPrimary} name={colorPrimaryName} luminance={primaryLuminance} classname={"third"}/>
                            <PanoramaCard color={colorPrimary2} name={colorPrimary2Name} luminance={primary2Luminance} classname={"third"}/>
                        </PanoramaWrapper>
                        <PanoramaWrapper>
                            <PanoramaCard color={colorSecondary1} name={colorSecondary1Name} luminance={secondary1Luminance} classname={"third"}/>
                            <PanoramaCard color={colorSecondary} name={colorSecondaryName} luminance={secondaryLuminance} classname={"third"}/>
                            <PanoramaCard color={colorSecondary2} name={colorSecondary2Name} luminance={secondary2Luminance} classname={"third"}/>
                        </PanoramaWrapper>
                        <PanoramaWrapper>
                            <PanoramaCard color={colorLight} name={colorLightName} luminance={lightLuminance} classname={"half"}/>
                            <PanoramaCard color={colorLight2} name={colorLight2Name} luminance={light2Luminance} classname={"half"}/>
                        </PanoramaWrapper>
                    </div>
                </PanoramaContainer>
            }
        </>
    )
}

export default Panorama