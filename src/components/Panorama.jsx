import { styled } from "styled-components"
import { useSelector } from 'react-redux'
import { colorsUI, sizesUI } from "../utils/UI"
import PanoramaCard from "./PanoramaCard"
import ColorStarter from "./ColorStarter"

const PanoramaContainer = styled.div`
  //background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkest}` : `${colorsUI.lightest}`};
  padding:0px 0px 25px 0px;
  height:calc(100vh - 116px);
  & .content_large{
    height:100%;
    overflow: hidden;
    display:grid;
    grid-template-columns: calc(37% - (${sizesUI.gapGrid} * 2 / 3)) calc(37% - (${sizesUI.gapGrid} * 2 / 3)) calc(26% - (${sizesUI.gapGrid} * 2 / 3));
    gap:${sizesUI.gapGrid};
  }
`
const PanoramaWrapper = styled.div`
    height:100%;
    position:relative;
    display:grid;
    grid-template-columns: 1fr;
    gap:${sizesUI.gapGrid};
    & .card{
        position:relative;
        width:100%;
        border-radius: ${sizesUI.radius};
    }
    &.color_group_main{
        grid-template-rows: calc(28% - (${sizesUI.gapGrid} * 2 / 3)) calc(44% - (${sizesUI.gapGrid} * 2 / 3)) calc(28% - (${sizesUI.gapGrid} * 2 / 3));
    }
    &.color_group_light__selector{
        grid-template-rows: calc(28% - (${sizesUI.gapGrid} * 2 / 3)) calc(28% - (${sizesUI.gapGrid} * 2 / 3)) calc(44% - (${sizesUI.gapGrid} * 2 / 3));
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
                        <PanoramaWrapper className="color_group_main">
                            <PanoramaCard color={colorPrimary1} name={colorPrimary1Name} luminance={primary1Luminance} classname={"card"}/>
                            <PanoramaCard color={colorPrimary} name={colorPrimaryName} luminance={primaryLuminance} classname={"card"}/>
                            <PanoramaCard color={colorPrimary2} name={colorPrimary2Name} luminance={primary2Luminance} classname={"card"}/>
                        </PanoramaWrapper>
                        <PanoramaWrapper className="color_group_main">
                            <PanoramaCard color={colorSecondary1} name={colorSecondary1Name} luminance={secondary1Luminance} classname={"card"}/>
                            <PanoramaCard color={colorSecondary} name={colorSecondaryName} luminance={secondaryLuminance} classname={"card"}/>
                            <PanoramaCard color={colorSecondary2} name={colorSecondary2Name} luminance={secondary2Luminance} classname={"card"}/>
                        </PanoramaWrapper>
                        <PanoramaWrapper className="color_group_light__selector">
                            <PanoramaCard color={colorLight} name={colorLightName} luminance={lightLuminance} classname={"card"}/>
                            <PanoramaCard color={colorLight2} name={colorLight2Name} luminance={light2Luminance} classname={"card"}/>
                            <ColorStarter/>
                        </PanoramaWrapper>
                    </div>
                </PanoramaContainer>
            }
        </>
    )
}

export default Panorama