import "./ButtonBlocks.scss";

function ButtonBlocks({ handleShowTrue, handleShowFalse, isShow, isTheme }) {
  return (
    <div className="button__main-container">
      <div className="button__container-download">
        <button
          type="button"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
        >
          Резюме
        </button>
        <button
          type="button"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
        >
          Диплом
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
