function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 
      
    return(
        <li className="element">
          <button className="element__delete"></button>
          <div className="element__image-container">
            <img className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
          </div>
          <h2 className="element__title">{props.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="submit"></button>
            <div className="element__like-counter">{props.likes.length}</div>
          </div>
        </li>
    )
}

export default Card;