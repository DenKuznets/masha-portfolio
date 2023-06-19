import styled from "styled-components";

const navText = ["Home", "About us", "Services", "Projects", "Testimonials"];

const list = navText.map((item, index) => (
    <li key={index}>
        <a href="">{item}</a>
    </li>
));

const NavListStyled = styled.nav`
    display: flex;
    align-items: center;
    ul {
        gap: 35px;
        transition: all 0.4s;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 29px;
        }
    }
`;

const NavList = ({ className }: { className?: string }) => {
    return (
        <NavListStyled>
            <ul className={className}>{list}</ul>
        </NavListStyled>
    );
};

export default NavList;
