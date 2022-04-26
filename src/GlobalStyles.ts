import { createGlobalStyle } from "styled-components";
import circles from "./assets/circles.svg";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Noto Sans', sans-serif;

  background: no-repeat top left url(${circles}) rgba(234, 242, 242, 1);
  background-size: 160px 190px;
}

input, select{
  border: none;

  &:focus{
    outline: none;
  }
}

button {
  font-family: inherit;

  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
