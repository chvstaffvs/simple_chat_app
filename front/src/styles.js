import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;

    }
    *, input{
        font-family: 'Roboto', sans-serif;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 16px;
        display: flex;
        height: 100vh;
        width: 100vw;
        overflow: scroll;
        align-items: center;
        justify-content: center;  
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .form, body section{
        background-color: ${({ darkMode }) => (darkMode ? "#222" : "#fff")};
        color: ${({ darkMode }) => (!darkMode ? "#222" : "#fff")};
    }

    .form button{
        background-color: ${({ darkMode }) => (!darkMode ? "#222" : "#fff")};
        color: ${({ darkMode }) => (darkMode ? "#222" : "#fff")};
    }


    .text{
        color: ${({ darkMode }) => (!darkMode ? "#222" : "#fff")};
    }

    .title{
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
`;

export default GlobalStyle;
