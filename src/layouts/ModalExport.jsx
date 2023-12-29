import { useState, useEffect, useRef } from "react"
import { styled } from "styled-components"
import { colorsUI, sizesUI } from "../utils/UI"
import { useSelector } from 'react-redux'
import ButtonCopyToClipboard from "../components/ButtonCopyToClipboard"

function ModalExport(){
    const colorTheme = useSelector(state => state.colorTheme)
    
    // Primary1
    const colorPrimary1 = useSelector((state) => state.primary1.colorPrimary1)
    const colorPrimary1Name = useSelector((state) => state.primary1.colorPrimary1Name)

    // Primary
    const colorPrimary = useSelector((state) => state.primary.colorPrimary)
    const colorPrimaryName = useSelector((state) => state.primary.colorPrimaryName)

    // Primary2
    const colorPrimary2 = useSelector((state) => state.primary2.colorPrimary2)
    const colorPrimary2Name = useSelector((state) => state.primary2.colorPrimary2Name)

    // Secondary1
    const colorSecondary1 = useSelector((state) => state.secondary1.colorSecondary1)
    const colorSecondary1Name = useSelector((state) => state.secondary1.colorSecondary1Name)

    // Secondary
    const colorSecondary = useSelector((state) => state.secondary.colorSecondary)
    const colorSecondaryName = useSelector((state) => state.secondary.colorSecondaryName)

    // Secondary2
    const colorSecondary2 = useSelector((state) => state.secondary2.colorSecondary2)
    const colorSecondary2Name = useSelector((state) => state.secondary2.colorSecondary2Name)

    // Light
    const colorLight = useSelector((state) => state.light.colorLight)
    const colorLightName = useSelector((state) => state.light.colorLightName)

    // Light2
    const colorLight2 = useSelector((state) => state.light2.colorLight2)
    const colorLight2Name = useSelector((state) => state.light2.colorLight2Name)

    // Ajuster la hauteur de la colonne SASS
    const refFirstCodeContainer = useRef(null);
    const refSecondCodeContainer = useRef(null);
    const [minHeight, setMinHeight] = useState(0)
    useEffect(() => {
        if (refSecondCodeContainer.current) {
            setMinHeight(refSecondCodeContainer.current.offsetHeight)
        }
    }, [])

    const formatObjectAsJs = (obj) => {
        return Object.entries(obj).map(([key, value], index) => (
            <div key={index} style={{ marginLeft: '20px' }}>
                <span className="key">{key}</span>
                <span>: &quot;</span>
                <span className="value">{value}</span>
                <span>&quot;,</span>
            </div>
        ))
    }
    const formatObjectAsSass = (obj) => {
        return Object.entries(obj).map(([key, value]) => (
            <div key={key}>
                <span className="variable">${key}</span>
                <span>: </span>
                <span className="value">{value}</span>
                <span>;</span>
            </div>
        ))
    }
    
    const colorsObject = {
        [colorPrimary1Name]: colorPrimary1,  
        [colorPrimaryName]: colorPrimary,  
        [colorPrimary2Name]: colorPrimary2,  
        [colorSecondary1Name]: colorSecondary1,  
        [colorSecondaryName]: colorSecondary,  
        [colorSecondary2Name]: colorSecondary2,  
        [colorLightName]: colorLight,  
        [colorLight2Name]: colorLight2
    }

    const formattedElementsJavascript = formatObjectAsJs(colorsObject)
    const formattedElementsSass = formatObjectAsSass(colorsObject)

    const [isCopiedSass, setIsCopiedSass] = useState(false)
    const [isCopiedJs, setIsCopiedJs] = useState(false)

    return (
        <ModalContent $colorTheme={colorTheme}>
            <div>
                <h3>Exportez les couleurs</h3>
                <CodeContainerWrapper>

                    <CodeContainerColumn>
                        <p>Variables SASS :</p>
                        <CodeContainer
                            ref={refFirstCodeContainer}
                            style={{ minHeight: `${minHeight}px` }}>
                            <ButtonCopyToClipboard object={colorsObject} type={"sass"} setIsCopied={setIsCopiedSass} isCopied={isCopiedSass} text={"Copier"} />
                            {formattedElementsSass}
                        </CodeContainer>
                    </CodeContainerColumn>
                    
                    <CodeContainerColumn>
                        <p>Objet javascript :</p>
                        <CodeContainer ref={refSecondCodeContainer}>
                            <ButtonCopyToClipboard object={colorsObject} type={"js"} setIsCopied={setIsCopiedJs} isCopied={isCopiedJs} text={"Copier"} />
                            <span>{"const colors = {"}</span>
                            <br />
                            {formattedElementsJavascript}
                            <span>{"}"}</span>
                        </CodeContainer>
                    </CodeContainerColumn>

                </CodeContainerWrapper>

            </div>
        </ModalContent>
    )
}

export default ModalExport

const ModalContent = styled.div`
    padding:50px 30px;
    background-color:${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
    & p{
        color:${props => props.$colorTheme === "Night" ? `${colorsUI.darkText}` : `${colorsUI.lightText}`};
        padding:10px 0;
        &:first-child{
            padding-top:0;
        }
        &:last-child{
            padding-bottom:0;
        }
        &.color-sass{
            padding-top:0;
            padding-bottom:0;
            color:#BFC7FF;
        }
        & .color-round{
            display:inline-block;
            height:0.75rem;
            width:0.75rem;
            border-radius:50%;
            margin-right:0.5rem;
        }
        & .color-name{
            color:${colorsUI.darkTextBtn};
        }
        & .color-value{
            color:${colorsUI.darkColoredValue};
        }
    }
`
const CodeContainerWrapper = styled.div`
    padding-top:1rem;
    display:flex;
    justify-content:space-between;
`
const CodeContainerColumn = styled.div`
    width:calc(50% - 0.75rem);
`
const CodeContainer = styled.pre`
    position:relative;
    background-color:${colorsUI.darkest};
    margin:0;
    font-family:monospace;
    font-size:0.85rem;
    border-radius:${sizesUI.radius};
    padding:1rem;
    & .variable{
        color:#7AAFD3;
    }
    & .key{
        color:#7AAFD3;
    }
    & .value{
        color:${colorsUI.darkColoredValue};
    }
`