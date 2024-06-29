import "sanitize.css";
import { createGlobalStyle } from "styled-components";

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }
`;
