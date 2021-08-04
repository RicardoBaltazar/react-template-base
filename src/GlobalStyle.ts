import { createGlobalStyle } from 'styled-components';
import { Colors } from 'theme';

const GlobalStyle = createGlobalStyle`
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    user-select: none;
    background-color: ${Colors.light};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
  }
`;

export default GlobalStyle;
