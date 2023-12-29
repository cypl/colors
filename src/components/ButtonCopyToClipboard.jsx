import { styled } from "styled-components"
import { colorsUI, sizesUI } from "../utils/UI"
import PropTypes from 'prop-types'

function ButtonCopyToClipboard({object, type, setIsCopied, isCopied, text}){
    const copyToClipboard = (obj, type, setter) => {
        let stringToCopy
        if(type === "sass"){
            stringToCopy = Object.entries(obj).map(([key, value]) => {
                return `$${key}: ${value};`;
            }).join('\n')
        } else {
            stringToCopy = `const colors = {\n` + 
                Object.entries(obj).map(([key, value]) => {
                    return `  ${key}: "${value}",`;
                }).join('\n') +
            `\n}`
        }
        navigator.clipboard.writeText(stringToCopy)
            .then(() => {
                setter(true)
                setTimeout(() => {
                    setter(false)
                  }, "1000")
            })
            .catch(err => {
                console.error("Erreur lors de la copie : ", err)
            })
    }
    return(
        <BtnCopy onClick={() => copyToClipboard(object, type, setIsCopied)} className={isCopied && "is-copied"}>
            {!isCopied ?
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            :
                <svg className="is-copied" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>                                
            }
            {text && text}
        </BtnCopy>
    )

}

export default ButtonCopyToClipboard

ButtonCopyToClipboard.propTypes = {
    object: PropTypes.object,
    type: PropTypes.string,
    setIsCopied: PropTypes.func,
    isCopied: PropTypes.bool,
    text: PropTypes.string,
}

const BtnCopy = styled.button`
    position:absolute;
    right:0.5rem;
    top:0.5rem;
    border:1px solid rgba(255,255,255,0.07);
    background-color:transparent;
    color:#fff;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    cursor:pointer;
    padding:0.35rem 0.45rem;
    line-height:1;
    font-size:${sizesUI.text};
    border-radius:${sizesUI.radius};
    transition:0.1s background-color ease-in-out, 0.1s border-color ease-in-out;
    &:hover{
        border:1px solid rgba(255,255,255,0.07);
        background-color:rgba(255,255,255,0.07);
        transition:0.1s background-color ease-in-out, 0.1s border-color ease-in-out;
    }
    &.is-copied{
        border:1px solid ${colorsUI.valid};
        background-color:${colorsUI.validAlpha};
    }
    & svg{
        color:${colorsUI.darkTextBtn};
        height:${sizesUI.text};
        margin-right:0.2rem;
        vertical-align: -0.1rem;
        &.is-copied{
            color:${colorsUI.valid};
        }
    }
`