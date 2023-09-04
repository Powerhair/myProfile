import "./Theme.scss";
import themeImg from "../../images/theme__icon.svg";

function Theme({
  handleChangeTheme,
  isTheme,
  handleChangeLanguageEn,
  handleChangeLanguageRu,
}) {
  return (
    <div className={`theme__oval ${isTheme ? "" : "theme__oval-dark"}`}>
      <img
        className={`theme__img ${isTheme ? "" : "theme__img-dark"}`}
        src={themeImg}
        alt=""
        onClick={handleChangeTheme}
      />
      <div className="theme__container">
        <p
          className={`theme__language ${isTheme ? "" : "theme__language-dark"}`}
          onClick={handleChangeLanguageEn}
        >
          RU
        </p>
        <p
          className={`theme__language ${isTheme ? "" : "theme__language-dark"}`}
          onClick={handleChangeLanguageRu}
        >
          EN
        </p>
      </div>
    </div>
  );
}

export default Theme;
