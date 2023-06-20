import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import { useState, useEffect } from "react";

const MainPageStyled = styled.div`
    .header {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: all 0.5s ease;

        &--fixed {
            position: fixed;
            width: 100%;
            background-color: black;
            max-width: 100%;
            min-width: 100%;
            top: 0;
            padding: 10px 15px;
        }
    }

    #hero{
        margin-bottom: 67px;
    }
    #about{
        margin-bottom: 50px;
    }
    #services, #projects{
        margin-bottom: 143px;
    }
`;

const MainPage = () => {
    const [headerFixed, setHeaderFixed] = useState(window.scrollY > 200);

    const setHeader = () => {
        if (window.scrollY > 200 && !headerFixed) {
            setHeaderFixed(true);
        }
        if (window.scrollY <= 200 && headerFixed) {
            setHeaderFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", setHeader);

        return () => {
            window.removeEventListener("scroll", setHeader);
        };
    });

    return (
        <MainPageStyled>
            <Header
                className={headerFixed ? "header header--fixed" : "header"}
            />
            <main>
                {/* <Hero /> */}
                {/* <About /> */}
                {/* <Services /> */}
                {/* <Projects /> */}
                <Testimonials />
            </main>
            <Footer />
        </MainPageStyled>
    );
};

export default MainPage;
