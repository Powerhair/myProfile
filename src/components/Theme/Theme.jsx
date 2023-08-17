import "./Theme.scss";
import themeImg from "../../images/theme__icon.svg";

function Theme({ handleChangeTheme, isTheme }) {
  return (
    <div
      className={`theme__oval ${isTheme ? "" : "theme__oval-dark"}`}
      onClick={handleChangeTheme}
    >
      <img
        className={`theme__img ${isTheme ? "" : "theme__img-dark"}`}
        src={themeImg}
        alt=""
      />
    </div>
  );
}

export default Theme;
