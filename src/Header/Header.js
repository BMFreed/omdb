import React, { useState } from 'react';
import search_icon from './img/search.png'

const Header = (props) => {
  const [typedValue, setTypedValue] = useState('');
  const [openFlyout, setOpenFlyout] = useState(false);

  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setTypedValue(value);
  }

  const handleClick = () => {
    props.setSearchValue(typedValue);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
    props.setSearchValue(typedValue);
    }
  }

  const handleFlyout = () => {
    setOpenFlyout(!openFlyout);
  }

  const HandleFilter = (event) => {
    props.setType(event.target.innerText);
}

const HandleFilterAll = (event) => {
  props.setType("");
}

  return (
      <header className="header">
        <div className="header__logo header_margin">
          <span className="header__title">OMDb</span>
        </div>
        <div className="search header_margin">
          <button 
          className="search__flyout_menu button search_padding"
          onClick={handleFlyout}>All</button>
          <ul className="flyout_menu" style={{ display: openFlyout ? "block" : "none" }}>
                <li className="flyout_menu__item" value="" onClick={HandleFilterAll}>all</li>
                <li className="flyout_menu__item" value="movie" onClick={HandleFilter}>movie</li>
                <li className="flyout_menu__item" value="series" onClick={HandleFilter}>series</li>
                <li className="flyout_menu__item" value="game" onClick={HandleFilter}>game</li>
            </ul>
          <input
            type="search" 
            placeholder="search, example: Spider-Man" 
            value={props.value} 
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            className="search__text search_padding"
          />
          <button onClick={handleClick} className="search__action button search_padding" type="submit">
              <img src={search_icon} alt="" />
          </button>
        </div>
    </header>
  );
}

export default Header;