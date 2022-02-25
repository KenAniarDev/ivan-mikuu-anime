import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme.scrollBar} transparent;
        -webkit-tap-highlight-color: transparent;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.scrollBar}
        border-radius: 20px;
        border: transparent;

    }

    ul,
    ol {
        list-style: none;
    }

    html {
        font-size: 62.5%;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: "Nunito", sans-serif;
        font-size: 1.6rem;
        background-color: ${(props) => props.theme.body};
        position: relative;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    input:focus {
        outline: none;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export default globalStyle;
