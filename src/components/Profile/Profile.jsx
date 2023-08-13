import "./Profile.scss";
import profile from "../../images/profile.png";

function Profile({ isTheme }) {
  return (
    <div className={`profile ${isTheme ? "" : "profile-dark"}`}>
      <div className="profile__main-container">
        <div className="profile__image-container">
          <img className="profile__image" src={profile} alt="" />
        </div>
        <div className="profile__container">
          <h1 className="profile__name">Pavel Bondarevskii</h1>
          <p className="profile__job">Frontend разработчик</p>
          <div className="profile__contact">
            <a href="https://t.me/@stupidhair" target="_blank" rel="noreferrer">
              <div
                className={`contact-icon telegram ${
                  isTheme ? "telegram-light" : ""
                }`}
              ></div>
            </a>
            <a
              href="https://gohre94@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`contact-icon mail ${isTheme ? "mail-light" : ""}`}
              ></div>
            </a>
            <a
              href="https://instagram.com/pavelbondarevskii"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`contact-icon instagram ${
                  isTheme ? "instagram-light" : ""
                }`}
              ></div>
            </a>
          </div>
        </div>
      </div>
      <div className="profile__text-container">
        <div className="profile__block">
          <p className="profile__block-num">1 год</p>
          <p className="profile__block-description">
            Опыт во Frontend разработке
          </p>
        </div>
        <div className="profile__block">
          <p className="profile__block-num">4</p>
          <p className="profile__block-description">Готовых проекта</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
