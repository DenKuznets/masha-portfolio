import HeaderStyled from "./styled/HeaderStyled";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { RedButton } from "../ui/Buttons";
import NavList from "./NavList";
import Logo from "./Logo";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    useEffect(() => {
        if (menuActive) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [menuActive]);

    return (
        <HeaderStyled>
            <Logo/>
            <NavList className={menuActive ? "nav__menu--open" : ""} />
            <RedButton>Download CV</RedButton>
            <IconContext.Provider
                value={{
                    size: "2.5em",
                    className: `burger ${menuActive ? "burger--open" : ""}`,
                    color: "red",
                }}
            >
                <div
                    onClick={() => {
                        setMenuActive(!menuActive);
                    }}
                >
                    <RxHamburgerMenu />
                </div>
            </IconContext.Provider>
        </HeaderStyled>
    );
};

export default Header;
