import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    }, "setUserInfo");
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          name="name"
          type="text"
          className="form__input form__input_type_name"
          id="profile-input-name"
          placeholder={currentUser !== {} ? currentUser.name : "Введите имя"}
          minLength="2"
          maxLength="40"
          required
          onChange={e => setName(e.target.value)}
        />
        <span className="form__input-error profile-input-name-error"></span>
      </label>
      <label className="form__field">
        <input
          name="about"
          type="text"
          className="form__input form__input_type_profession"
          id="profile-input-profession"
          placeholder={currentUser !== {} ? currentUser.about : "Коротко осебе"}
          minLength="2"
          maxLength="200"
          required
          onChange={e => setDescription(e.target.value)}
        />
        <span className="form__input-error profile-input-profession-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
