import Router from "./router/Router"
import { createGlobalStyle } from "styled-components"
import { colorsUI } from "./utils/colorsUI"

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorsUI.dark};
  }
`