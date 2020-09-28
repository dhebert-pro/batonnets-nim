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

    body, button {
        margin: 0;
        background-color: #DCEDFF;
        color: #000000;
        font-family: 'Moon Regular', arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: .1rem;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;