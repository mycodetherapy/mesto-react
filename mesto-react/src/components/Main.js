function Main() {
    return(
        <main className="content">
        <section className="profile">
          <img
            className="profile__avatar"
            src="#"
            alt="аватар"
          />
          <div className="profile__hidden-avatar"></div>
          <div className="profile__info">
            <h1 className="profile__title">Мария</h1>
            <button className="profile__button" type="button"></button>
            <p className="profile__subtitle">Брант</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            aria-label="добавить_элемент"
          ></button>
        </section>

        <section className="elements">
          <ul className="elements__grid-container"></ul>
        </section>
      </main>
    )
}

export default Main;