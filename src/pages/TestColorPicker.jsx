import { useState } from "react"
import ColorPicker from "../components/ColorPicker"
import { styled } from "styled-components"

function TestColorPicker(){
    const [colorTest, setColorTest] = useState("#00c35e")
    return (
        <>
            <Wrap>
                <ColorPicker color={colorTest} setColor={setColorTest} expectedLuminance={140}/>
            </Wrap>
        </>
    )
}

export default TestColorPicker

const Wrap = styled.div`
    position:relative;
    height:400px;
    width:400px;
`