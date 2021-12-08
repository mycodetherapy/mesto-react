
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
// import './App.css';

function App() {
  return (
      
  <body className="common">
    <div className="page">
      
      <Header />

      <Main />
      
      <Footer />
      

      <div className="popup popup_type_edit-profile">
        <div className="popup__container" tabIndex="0">
          <button className="popup__close" type="button"></button>
          <form name="edit_profile" className="form" noValidate>
            <fieldset className="form__input-container">
              <h2 className="form__title">Редактировать профиль</h2>
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
                <span
                  className="form__input-error profile-input-profession-error"
                ></span>
              </label>
            </fieldset>
            <button className="form__button-save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_creat-element">
        <div className="popup__container" tabIndex="0">
          <button className="popup__close" type="button"></button>
          <form name="creat-element" className="form" noValidate>
            <fieldset className="form__input-container">
              <h2 className="form__title">Новое место</h2>
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
            </fieldset>
            <button className="form__button-save" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container" tabIndex="0">
          <button className="popup__close" type="button"></button>
          <form name="edit_avatar" className="form" noValidate>
            <fieldset className="form__input-container">
              <h2 className="form__title">Обновить аватар</h2>
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
            </fieldset>
            <button className="form__button-save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete-element">
        <div className="popup__container" tabIndex="0">
          <button className="popup__close" type="button"></button>
          <form name="delete_profile" className="form" noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__button-save" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <figure
          className="popup__container popup__container-for-image"
          tabIndex="0"
        >
          <button className="popup__close" type="button"></button>
          <img
            className="popup__element-image"
            src="#"
            alt="#"
          />
          <figcaption className="popup__image-caption">Архыз</figcaption>
        </figure>
      </div>
    </div>

    <template className="element-template">
      <li className="element">
        <button className="element__delete"></button>
        <div className="element__image-container">
          <img
            className="element__image"
            src="#"
            alt="#"
          />
        </div>
        <h2 className="element__title"></h2>
        <div className="element__like-container">
          <button className="element__like" type="submit"></button>
          <div className="element__like-counter"></div>
        </div>
      </li>
    </template>
  </body>
  );
}

export default App;
