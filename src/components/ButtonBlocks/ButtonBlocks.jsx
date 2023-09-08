import "./ButtonBlocks.scss";
import { resumeLink, diplomaLink } from "../../data/data";
import { buttonText } from "../../data/text";
import resume from "../../data/resume.pdf";

function ButtonBlocks({
  handleShowTrue,
  handleShowFalse,
  handleShowAboutMe,
  isShow,
  isTheme,
  isLanguage,
}) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="button__main-container">
      <div className="button__container-download">
        <button
          onClick={handleDownload}
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
        >
          {isLanguage ? buttonText.resumeRu : buttonText.resumeEn}
        </button>
        <a
          href={diplomaLink}
          target="_blank"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
          rel="noreferrer"
        >
          {isLanguage ? buttonText.diplomRu : buttonText.diplomEn}
        </a>
      </div>
      <div className="button__container-download">
        <button
          onClick={handleShowAboutMe}
          type="button"
          className={`button-download ${isTheme ? "" : "button-download-dark"}`}
        >
          {isLanguage ? buttonText.aboutRu : buttonText.aboutEn}
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
          {isLanguage ? buttonText.portfoliRu : buttonText.portfoliEn}
        </button>
        <button
          onClick={handleShowFalse}
          type="button"
          className={` button ${isTheme ? "button" : "button__dark"} ${
            isShow ? "" : isTheme ? "button__active" : "button__active-dark"
          } `}
          data-theme={isTheme.toString()}
        >
          {isLanguage ? buttonText.skillsRu : buttonText.skillsEn}
        </button>
      </div>
    </div>
  );
}

export default ButtonBlocks;
