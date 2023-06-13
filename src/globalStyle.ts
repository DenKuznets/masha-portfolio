import { createGlobalStyle } from "styled-components";
import cssResets from "./cssResets";
import screen from "./breakpoints";

const laptopMultiplyer = 0.7;
const mobileMultiplyer = 0.5;

const GlobalStyle = createGlobalStyle`
${cssResets};


body {
    font-family: 'Montserrat', sans-serif;
}

section, header {
    padding: 0 15px;
}

h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 6rem;
    line-height: 1.21;
    letter-spacing: 0.005em;    
    @media only screen and (max-width: ${screen.laptop}) {
        font-size: calc(6rem * ${laptopMultiplyer});
    }
    @media only screen and (max-width: ${screen.mobileL}) {
        font-size: calc(6rem * ${mobileMultiplyer});        
    }
}

h2{
    
}

p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.21;
    letter-spacing: 0.02em;
    /* @media only screen and (max-width: ${screen.laptop}) {
        font-size: calc(1.5rem * ${laptopMultiplyer});
    } */
    /* @media only screen and (max-width: ${screen.laptop}) {
        font-size: calc(1.5rem * ${mobileMultiplyer});
    } */
}

.bg1 {
    /* padding-top: 71px; */
    background-image: url(/images/hero-mask.svg),
        url(/images/hero-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 1000px;
    background-position: center;
    @media only screen and (max-width: 1395px) {
        /* padding-top: 10px; */
    }
}
`;

export default GlobalStyle;
