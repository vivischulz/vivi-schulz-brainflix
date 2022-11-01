import "./component.scss";

const Component =()=>{
    return (
      <>
        <div className="avatar"></div>
        <button className="btn">Demo </button>
        <div className="logo">BrainFlix</div>
        <svg className="icon">
          <use href="../../assets/images/icons/search" title="search"></use>
        </svg>
        <div className="icon icon--search"></div>
        <div className="icon icon--views"></div>
        <div className="icon icon--likes"></div>
        <div className="icon icon--upload"></div>

        <section className="input">
          {/*---search group---*/}
          <div className="input__search">
            <div className="input__search-group">
              <span className="input__search-icon"></span>
              <input
                type="text"
                className="input__search-name"
                placeholder="Search"
                name="search"
              />
            </div>
            <div className="input__avatar1"></div>
          </div>

          {/*---button group---*/}
          <button className="input__btn">
            <span className="input__btn-icon"></span>
            <span className="input__btn-name">Upload</span>
          </button>
          <div className="input__avatar2"></div>
        </section>
      </>
    );
}
export default Component;