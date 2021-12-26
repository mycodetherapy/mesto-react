function PopupWithForm(props) {
  
return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
    <div className="popup__container" tabIndex="0">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <form name={props.name} className="form"  onSubmit={props.onSubmit} noValidate>
        <fieldset className="form__input-container">
          <h2 className="form__title">{props.title}</h2>
          <>{props.children}</>
        </fieldset>
        <button className="form__button-save" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
)
} 

export default PopupWithForm;