import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState(null);
    const [link, setLink] = React.useState(null);

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.onAddPlace({name, link});
    }

    return(
        <PopupWithForm
            name="creat-element"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleAddPlaceSubmit}
          >
            <label className="form__field">
              <input
                name="name"
                type="text"
                className="form__input form__input_type_place"
                placeholder="Название"
                id="input-place"
                minLength="2"
                maxLength="30"
                required
                onChange={e => setName(e.target.value)}
              />
              <span className="form__input-error input-place-error"></span>
            </label>
            <label className="form__field">
              <input
                name="link"
                type="url"
                className="form__input form__input_type_place-link"
                placeholder="Ссылка на картинку"
                id="input-place-link"
                required
                onChange={e => setLink(e.target.value)}
              />
              <span className="form__input-error input-place-link-error"></span>
            </label>
          </PopupWithForm>
    )
}

export default AddPlacePopup;