import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const userData = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userData.avatar} alt="аватар" />
        <div
          className="profile__hidden-avatar"
          onClick={props.onEditAvatar}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{userData.name}</h1>
          <button
            className="profile__button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userData.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="добавить_элемент"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__grid-container">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
