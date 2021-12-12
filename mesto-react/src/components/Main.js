import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  api.getUserInfo().then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  });

  React.useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="аватар"
        />
        <div
          className="profile__hidden-avatar"
          onClick={props.onEditAvatar}
        ></div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
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
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
