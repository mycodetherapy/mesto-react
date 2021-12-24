function ImagePopup(props) {
  
const card = Boolean(JSON.stringify(props.card) ==='{}');

    return(
        <div className={`popup popup_type_image ${!card && "popup_opened"}`}>
        <figure
          className="popup__container popup__container-for-image"
          tabIndex="0"
        >
          <button className="popup__close" type="button" onClick={props.onClose}></button>
          <img
            className="popup__element-image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="popup__image-caption">{props.card.name}</figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup