import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #925EBE;
        font-family: 'Raleway', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  * {
    box-sizing: border-box;
  }
    
`
export default GlobalStyle