import { useState, useEffect, useRef } from "react";

import FlyoutMenu from "./FlyoutMenu/FlyoutMenu.js";

const Header = (props) => {
    const [typedValue, setTypedValue] = useState("");
    const [openFlyout, setOpenFlyout] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);


    //This is a click away listener. It will be called when the user clicks away from the menu or the button.
    useEffect(() => {
        let handler = (event) => {
            if (
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

    const handleInput = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setTypedValue(value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            props.setSearchValue(typedValue);
        }
    };

    return (
        <header className="header">
            <div className="header__logo header_margin">
                <span className="header__title">OMDb</span>
            </div>
            <div className="search header_margin">
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
                <input
                    type="search"
                    placeholder="search, example: Spider-Man"
                    value={props.value}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    className="search__text search_padding"
                />
                <button
                    onClick={() => props.setSearchValue(typedValue)}
                    className="search__action button search_padding"
                    type="submit"
                >
                    <img src={process.env.PUBLIC_URL + "/img/Header/search.png"} alt="" />
                </button>
            </div>
        </header>
    );
};

export default Header;
