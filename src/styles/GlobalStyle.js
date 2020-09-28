import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Semi Coder';
        src: url('/src/assets/fonts/Semi-Coder-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Light';
        src: url('/src/assets/fonts/Moon2.0-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Regular';
        src: url('/src/assets/fonts/Moon2.0-Regular.otf');
    }

    @font-face {
        font-family: 'Moon Bold';
        src: url('/src/assets/fonts/Moon2.0-Regular.otf');
    }

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        background-color: #DCEDFF;
        color: #000000;
        font-family: 'Moon Regular', arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: .1rem !important;
    }

    .MuiTypography-root, .MuiTableCell-root, .MuiInputBase-root, .MuiMenuItem-root, input::placeholder {
        font-family: 'Moon Regular', arial, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: .1rem !important;
    }

    button {
        letter-spacing: .1rem !important;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;