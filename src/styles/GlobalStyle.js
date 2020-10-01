import { createGlobalStyle } from 'styled-components';

const fontDirectory = '/src/assets/fonts/';
const moonFont = 'font-family: \'Moon Regular\', arial, sans-serif';
const letterSpacingSmall = 'letter-spacing: .1rem !important';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Semi Coder';
        src: url('${fontDirectory}Semi-Coder-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Light';
        src: url('${fontDirectory}Moon2.0-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Regular';
        src: url('${fontDirectory}Moon2.0-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Bold';
        src: url('${fontDirectory}Moon2.0-Regular.otf');
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        background-color: #DCEDFF;
        color: #000000;
    }

    body, .MuiTypography-root, .MuiTableCell-root, .MuiInputBase-root, .MuiMenuItem-root, input::placeholder {
        ${moonFont} !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ${letterSpacingSmall};
    }

    button {
        ${letterSpacingSmall};
    }

    .close {
        font-family: arial, sans-serif;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;