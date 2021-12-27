import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {
  const userData = React.useContext(CurrentUserContext);
  const isOwn = Boolean(props.card.owner._id === userData._id);
  const elementDeleteClassName = `element__delete ${
    isOwn ? "element__delete_visible" : "element__delete_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === userData._id);

  const elementLikeClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick () {
    props.onCardDelete(props.card);
  }

  return (
    <li className="element">
      <button className={elementDeleteClassName} onClick={handleDeleteClick}></button>
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.link}
          alt={props.name}
          onClick={handleClick}
        />
      </div>
      <h2 className="element__title">{props.name}</h2>
      <div className="element__like-container">
        <button
          className={elementLikeClassName}
          type="submit"
          onClick={handleLikeClick}
        ></button>
        <div className="element__like-counter">{props.likes.length}</div>
      </div>
    </li>
  );
}

export default Card;
