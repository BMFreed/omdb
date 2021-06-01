import search_icon from './img/search.png'

function Header() {
    return (
        <header className="header">
        <div className="header__logo header_margin">
          <span className="header__title">OMDb</span>
        </div>
        <div className="search header_margin">
          <button className="search__flyout_menu button search_padding">Всё</button>
          <input type="text" placeholder="Искать" className="search__text search_padding"></input>
          <button className="search__action button search_padding">
              <img src={search_icon} alt="" />
          </button>
        </div>
      </header>
    );
}

export default Header;