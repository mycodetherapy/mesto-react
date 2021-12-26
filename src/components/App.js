import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setcurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setcurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  function handleUpdateUser(oldUserData) {
    api.setUserInfo(oldUserData).then((newUserData) => {
      setcurrentUser(newUserData);
      closeAllPopups();
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body className="common">
        <div className="page">
          <Header />

          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />

          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 

          <PopupWithForm
            name="creat-element"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
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
              />
              <span className="form__input-error input-place-link-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__field">
              <input
                name="avatar"
                type="url"
                className="form__input form__input_type_avatar"
                placeholder="Ссылка на аватар"
                id="profile-input-avatar"
                required
              />
              <span className="form__input-error profile-input-avatar-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm name="delete-element" title="Вы уверены?">
            <button className="form__button-save" type="submit">
              Да
            </button>
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </body>
    </CurrentUserContext.Provider>
  );
}

export default App;
