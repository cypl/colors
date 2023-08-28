import { styled } from "styled-components"
import { colorsUI } from "../utils/colorsUI"
import { useSelector } from 'react-redux'

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
    }
`

const content = {
    text: 
        ["Nanosite ColorPickers permet de générer une gamme de couleur à partir d'une couleur de départ. Cette gamme peut ensuite être utilisée pour créer un webdesign, ou bien être exportée sous la forme d'un objet javascript ou d'une liste de variables SASS pour être utilisée directement par un développeur.",
        "Les couleurs sont générées en vérifiant leurs niveaux de luminosité, ce qui permet de s'assurer du contraste qu'elles ont les unes par rapport aux autres et valider certains critères d'accessibilité de l'interface que vous créez."]
}

function ModalAbout(){
    
    const colorTheme = useSelector(state => state.colorTheme)
    const contentText = content.text
    
    return (
        <ModalContent $colorTheme={colorTheme}>
            {contentText.map((p) => (
                <p key={p}>{p}</p>
            ))}
        </ModalContent>
    )
}


export default ModalAbout