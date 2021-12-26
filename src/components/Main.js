import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  
  const [cards, setCards] = React.useState([]);

  const userData = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    Promise.all([api.getCards()])
      .then(([cardsData]) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userData._id);
    let methodFetchLike = (isLiked ? "DELETE" : "PUT");

    api.toggleLike(methodFetchLike, card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id && c ));
    })
  }

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
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
