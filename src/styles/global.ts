import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #6933ff;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #FFFFFF;
        --green: #33CC95;
        --title: #363f5f;
    }


    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    /* 16px é o padrão -> 1 rem */
    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; /* browser deixa as fontes mais nítidas */
    }

    border-style, input, textarea, button, p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6, strong, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }

    .React-Modal-Overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .React-Modal{
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.4rem;
    }

    .close-modal {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        :hover{
            filter: brightness(0.8);
        }
    }
`;
