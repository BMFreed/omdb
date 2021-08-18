import { useState, useEffect, useRef } from "react";
import { Redirect, useLocation } from "react-router-dom";

import FlyoutMenu from "./FlyoutMenu/FlyoutMenu.js";

const Header = (props) => {
    const [typedValue, setTypedValue] = useState("");
    const [openFlyout, setOpenFlyout] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const searchRef = useRef(null);

    //This is a click away listener. It will be called when the user clicks away from the menu or the button.
    useEffect(() => {
        let handler = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setOpenFlyout(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [openFlyout]);

    //Here we are clearing out the input value when entering the homepage.
    useEffect(() => {
        if (location.pathname === "/home") {
            searchRef.current.value = "";
        }
    }, [location]);

    const handleInput = (event) => {
        const value = event.target.value;
        setTypedValue(value);
    };

    const HandleSearch = (event) => {
        event.preventDefault();
        props.setSearchValue(typedValue);
        localStorage.setItem("searchQuery", typedValue);
    };

    return (
        <header className="header">
            <div className="header__logo header-margin" onClick={() => props.setSearchValue("")}>
                <span className="header__title">OMDb</span>
            </div>
            <div className="search header-margin">
                <button
                    className="search__flyout_menu button search_padding"
                    onClick={() => setOpenFlyout(!openFlyout)}
                    ref={buttonRef}
                >
                    All
                </button>
                <FlyoutMenu
                    open={openFlyout}
                    setOpen={setOpenFlyout}
                    setType={props.setType}
                    reference={menuRef}
                />
                <form onSubmit={HandleSearch} className="search__form">
                    <input
                        ref={searchRef}
                        type="search"
                        placeholder="search, example: Spider-Man"
                        onChange={handleInput}
                        className="search__text search_padding"
                    />
                    <button className="search__action button search_padding" type="submit">
                        <img src={process.env.PUBLIC_URL + "/img/Header/search.png"} alt="" />
                    </button>
                </form>
            </div>
            {props.searchValue !== "" ? <Redirect to="/search" /> : <Redirect to="/home" />}
        </header>
    );
};

export default Header;
