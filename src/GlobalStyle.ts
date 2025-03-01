import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  color-scheme: light dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3083B6;
    color: white;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 3.2em; 
}
`;
