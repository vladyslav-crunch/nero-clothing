import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Barlow Condensed';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 40px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


a {
  text-decoration: none;
  color: black;
}

*{
  box-sizing: border-box;
}

::-webkit-scrollbar{
  height: 4px;
  width: 6px;
  background: gray;
}
::-webkit-scrollbar-thumb:vertical{
  background: #302f2f;
  border-radius: 10px;
}
`;
