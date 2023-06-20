import styled from "styled-components";
import NavList from "./NavList";
import Logo from "./Logo";

const FooterStyled = styled.footer`
    padding-top: 66px;
    padding-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.palePink};
    .socials {
        display: flex;
        column-gap: 80px;
        row-gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
        a {
            width: 48px;
            height: 48px;
            display: block;
            &:hover {
                transform: scale(1.1);
            }
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }
        }
    }

    .logo {
        margin-bottom: 52px;
    }

    nav {
        margin-bottom: 65px;
        ul {
            flex-wrap: wrap;
            a {
                &:hover {
                    color: ${({ theme }) => theme.colors.smoothRed};
                }
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
        link: "Twitter.com",
        img: "Twitter.svg",
    },
    {
        link: "Instagram.com",
        img: "Instagram.svg",
    },
    {
        link: "LinkedIn.com",
        img: "LinkedIn.svg",
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
