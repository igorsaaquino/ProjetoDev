import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #E3E3E3;
    font-family: Sora, Helvetica, sans-serif;
}
`;

export default GlobalStyle;