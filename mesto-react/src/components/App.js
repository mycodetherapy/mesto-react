import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect, useState } from "react";
import React from 'react';
// import './App.css';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: "", link: ""});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    //document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    //document.querySelector('.popup_type_creat-element').classList.add('popup_opened');
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    //document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: "", link: ""});
  }

  return (
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

        <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="form__field">
            <input
              name="name"
              type="text"
              className="form__input form__input_type_name"
              id="profile-input-name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error profile-input-name-error"></span>
          </label>
          <label className="form__field">
            <input
              name="about"
              type="text"
              className="form__input form__input_type_profession"
              id="profile-input-profession"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error profile-input-profession-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="creat-element" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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

        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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
  );
}

export default App;
