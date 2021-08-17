function FlyoutMenu(props) {
    const HandleFilter = (event) => {
        if (event.target.innerText === "all") {
            props.setType(null);
        } else {
            props.setType(event.target.innerText);
        }
    };

    if (!props.open) {
        return null;
    }

    return (
        <ul
            className="flyout-menu"
            ref={props.reference}
        >
            <li className="flyout-menu__item" value="" onClick={HandleFilter}>
                all
            </li>
            <li className="flyout-menu__item" value="movie" onClick={HandleFilter}>
                movie
            </li>
            <li className="flyout-menu__item" value="series" onClick={HandleFilter}>
                series
            </li>
            <li className="flyout-menu__item" value="game" onClick={HandleFilter}>
                game
            </li>
        </ul>
    );
}

export default FlyoutMenu;
