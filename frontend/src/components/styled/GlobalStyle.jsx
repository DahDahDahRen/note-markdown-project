import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        font-size: 16px;
    }

    body{
        font-family: "Inter", serif;
        background-color: #1E2022;
        color: #F0F5F9;
        height: 100vh;

        line-height: 125%;
    }

    ul, ol{
        list-style: none;
    }

    input, button{
        font-family: inherit;
    }
        
`;
