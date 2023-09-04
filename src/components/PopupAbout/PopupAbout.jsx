import "../PopupLayout/PopupLayout.scss";
import "../Theme/Theme.scss";
import { useEffect, useRef } from "react";
import { popupAbout } from "../../data/text";

function PopupAbout({
  isOpenAboutMe,
  handleCloseAboutMe,
  handleChangeLanguageRu,
  handleChangeLanguageEn,
  isLanguage,
}) {
  const overlayRef = useRef();

  useEffect(() => {
    const closeOnEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseAboutMe();
      }
    };

    const closeOnClickOutside = (event) => {
      if (event.target === overlayRef.current) {
        handleCloseAboutMe();
      }
    };

    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeOnClickOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
      document.removeEventListener("click", closeOnClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className={`popup ${isOpenAboutMe ? "popup-opened" : ""}`}
      >
        <div className="popup__window popup__about">
          {isOpenAboutMe && (
            <button
              onClick={handleCloseAboutMe}
              type="button"
              className="popup__button-close"
            ></button>
          )}
          <div className="popup__container">
            <h4 className="popup__title">
              {isLanguage ? popupAbout.titleRu : popupAbout.titleEn}
            </h4>
            <div className="theme__container">
              <p className="theme__language" onClick={handleChangeLanguageEn}>
                RU
              </p>
              <p className="theme__language" onClick={handleChangeLanguageRu}>
                EN
              </p>
            </div>
          </div>
          <p className="popup__description">
            {isLanguage ? popupAbout.oneSentenceRu : popupAbout.oneSentenceEn}
            <p className="popup__description-color">
              {isLanguage ? popupAbout.twoSentenceRu : popupAbout.twoSentenceEn}
            </p>
            {isLanguage
              ? popupAbout.threeSentenceRu
              : popupAbout.threeSentenceEn}
          </p>
          <p className="popup__description">
            {isLanguage ? popupAbout.fourSentenceRu : popupAbout.fourSentenceEn}
            <p className="popup__description-color">
              {isLanguage
                ? popupAbout.fiveSentenceRu
                : popupAbout.fiveSentenceEn}
            </p>
            {isLanguage ? popupAbout.sixSentenceRu : popupAbout.sixSentenceEn}
            <p className="popup__description-color">
              {isLanguage
                ? popupAbout.sevenSentenceRu
                : popupAbout.sevenSentenceEn}
            </p>
            {isLanguage
              ? popupAbout.eightSentenceRu
              : popupAbout.eightSentenceEn}
          </p>
          <p className="popup__description">
            {isLanguage ? popupAbout.nineSentenceRu : popupAbout.nineSentenceEn}
            <p className="popup__description-color">
              {isLanguage ? popupAbout.tenSentenceRu : popupAbout.tenSentenceEn}
            </p>
            ,
            {isLanguage
              ? popupAbout.elevenSentenceRu
              : popupAbout.elevenSentenceEn}
          </p>
          <p className="popup__description">
            {isLanguage
              ? popupAbout.twelveSentenceRu
              : popupAbout.twelveSentenceEn}
            <p className="popup__description-color">
              {isLanguage
                ? popupAbout.thirdSentenceRu
                : popupAbout.thirdSentenceEn}
            </p>
            {isLanguage
              ? popupAbout.fourteenSentenceRu
              : popupAbout.fourteenSentenceEn}
          </p>
        </div>
      </div>
    </>
  );
}

export default PopupAbout;
