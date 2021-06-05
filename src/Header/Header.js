import React from 'react';
import search_icon from './img/search.png'

import FlyoutMenu from './FlyoutMenu/FlyoutMenu'

const Header = (props) => {

  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    props.setTypedValue(value);
  }

  const handleClick = () => {
    props.setSearchValue(props.typedValue);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
    props.setSearchValue(props.typedValue);
    }
  }

  const handleFlyout = () => {
    props.setOpenFlyout(!props.openFlyout);
  }

  console.log(props.openFlyout);

  return (
      <header className="header">
        <div className="header__logo header_margin">
          <span className="header__title">OMDb</span>
        </div>
        <div className="search header_margin">
          <button 
          className="search__flyout_menu button search_padding"
          onClick={handleFlyout}>All</button>
          {!props.openFlyout ? <FlyoutMenu/>: null}
          <input
            type="search" 
            placeholder="Search" 
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