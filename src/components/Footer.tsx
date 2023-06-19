import styled from "styled-components";
import NavList from "./NavList";
import Logo from "./Logo";

const navHide = "1395px";

const FooterStyled = styled.footer`
    margin: 0 auto;
    color: black;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1404px;
    background-color: ${({ theme }) => theme.colors.palePink};    

    nav {
        

        ul {
            
            /* @media (max-width: ${navHide}) {
                position: fixed;
                width: 100%;
                flex-direction: column;
                top: 0;
                left: 0;
                min-height: 0;
                max-height: 0;
                overflow: hidden;
                
                a {
                    opacity: 1;
                }
            } */
            li {
                
                /* @media (max-width: ${navHide}) {
                    margin-right: 0;
                    font-size: 1rem;
                } */
            }
        }
    }
`;

const socialIcons = [
    {
        link: "facebook.com",
        img: "Facebook.svg",
    },
    {
        link: "Instagram.com",
        img: "Instagram.svg",
    },
    {
        link: "LinkedIn.com",
        img: "LinkedIn.svg",
    },
    {
        link: "Twitter.com",
        img: "Twitter.svg",
    },
];

const socialIconsList = socialIcons.map((icon, index) => (
    <li key={index}>
        <a href={`https://${icon.link}`}>
            <img src={`/images/icons/${icon.img}`}></img>
        </a>
    </li>
));

const Footer = () => {
    return (
        <FooterStyled>         
            <Logo />
            <NavList />
            <ul className="socials">{socialIconsList}</ul>
        </FooterStyled>
    );
};

export default Footer;
