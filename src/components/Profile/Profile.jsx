import "./Profile.scss";
import profile from "../../images/profile.png";
import { useState } from "react";

function Profile({ isTheme }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      .writeText("gohre94@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Не удалось скопировать адрес электронной почты", error);
      });
  };
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
            <a href="https://t.me/stupidhair" target="_blank" rel="noreferrer">
              <div
                className={`contact-icon telegram ${
                  isTheme ? "telegram-light" : ""
                }`}
              ></div>
            </a>

            <div
              onClick={copyEmail}
              className={`contact-icon mail ${isTheme ? "mail-light" : ""}`}
            >
              <p
                className={`copy__text ${
                  isCopied ? "fade-in-out" : "text-hidden"
                }`}
              >
                {" "}
                Адрес скопирован!
              </p>
            </div>

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
