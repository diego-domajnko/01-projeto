import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
  }

  body,
  * {
    font-family: ${({ theme }) => theme.font.family}, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: ${({ theme }) => theme.line};
  }

  body {
    background-color: ${({ theme }) => theme.gray[600]};
  }
`;
