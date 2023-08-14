import "./ButtonBlocks.scss";
import { resumeLink, diplomaLink } from "../../data/data";
function ButtonBlocks({
  handleShowTrue,
  handleShowFalse,
  handleShowAboutMe,
  isShow,
  isTheme,
}) {
  return (
    <div className="button__main-container">
      <div className="button__container-download">
        <a
          href={resumeLink}
          target="_blank"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
          rel="noreferrer"
        >
          Резюме
        </a>
        <a
          href={diplomaLink}
          target="_blank"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
          rel="noreferrer"
        >
          Диплом
        </a>
      </div>
      <div className="button__container-download">
        <button
          onClick={handleShowAboutMe}
          type="button"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
        >
          Обо мне
        </button>
      </div>
      <div
        className={`button__container ${
          isTheme ? "" : "button__container-dark"
        }`}
      >
        <button
          onClick={handleShowTrue}
          type="button"
          className={` button ${isTheme ? "button__light" : "button__dark"} ${
            isShow ? (isTheme ? "button__active" : "button__active-dark") : ""
          }`}
          data-theme={isTheme.toString()}
        >
          Портфолио
        </button>
        <button
          onClick={handleShowFalse}
          type="button"
          className={` button ${isTheme ? "button" : "button__dark"} ${
            isShow ? "" : isTheme ? "button__active" : "button__active-dark"
          } `}
          data-theme={isTheme.toString()}
        >
          Навыки
        </button>
      </div>
    </div>
  );
}

export default ButtonBlocks;
