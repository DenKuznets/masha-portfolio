import styled from "styled-components";

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

const NavList = ({
    onClick,
    className,
}: {
    onClick: () => void;
    className?: string;
}) => {
    const navText = [
        "Home",
        "About me",
        "Services",
        "Projects",
        "Testimonials",
    ];

    const list = navText.map((item, index) => {
        const href =
            item === "Home"
                ? "#"
                : `#${item.toLocaleLowerCase().split(" ")[0]}`;
        return (
            <li onClick={onClick} key={index}>
                <a href={href}>{item}</a>
            </li>
        );
    });

    return (
        <NavListStyled>
            <ul className={className}>{list}</ul>
        </NavListStyled>
    );
};

export default NavList;
