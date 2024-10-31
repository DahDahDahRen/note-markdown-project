import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root{
        font-size: 16px;
    }

    body{
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.secondary};
        font-family: "Inter", serif;
    }

    ul,ol{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.color.secondary};
    }

    button, input{
        font-family: inherit;
    }
`;
