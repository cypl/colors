import Router from "./router/Router"
import { createGlobalStyle } from "styled-components"
import { colorsUI } from "./utils/colorsUI"
import { useSelector } from 'react-redux'

function App() {
  
  const colorTheme = useSelector(state => state.colorTheme)

  return (
    <>
      <GlobalStyle $colorTheme={colorTheme}/>
      <Router/>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.$colorTheme === "Night" ? `${colorsUI.dark}` : `${colorsUI.light}`};
  }
`