import './Header.scss'


const Header =  () => {

    return (
      <>
        <section className="header">
        <div className="header__logo">BrainFlix</div>

          {/*---search group---*/}
          <section className="header__search-wrap">
              <div className="header__search">
                <div className="header__search-group">
                  <span className="header__search-icon"></span>
                  <input
                    type="text"
                    className="header__search-name"
                    placeholder="Search"
                    name="search"
                    autoFocus
                  />
                </div>
                <div className="header__avatar1"></div>
              </div>
              {/*---button group---*/}
              <button className="header__btn">
                <span className="header__btn-icon"></span>
                <span className="header__btn-name">Upload</span>
              </button>
              <div className="header__avatar2"></div>
          </section>
        </section>
      </>
    );

}

export default Header;