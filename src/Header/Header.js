import './Header.sass';

function Header() {
    return (
        <header className="header">
        <div className="header__logo">
          <span className="header__title">OMDb</span>
        </div>
        <div className="search">
          <div className="search__flyout_menu"></div>
          <form className="search__form"></form>
          <form className="search__action"></form>
        </div>
      </header>
    );
}

export default Header;