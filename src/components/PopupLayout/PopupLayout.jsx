import "./PopupLayout.scss";
import { useEffect, useState, useRef } from "react";
import { popupPreview } from "../../data/text";

function PopupLayout({
  handleChangeLanguageEn,
  handleChangeLanguageRu,
  isLanguage,
}) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(handleChangeLanguageEn);

  const overlayRef = useRef();

  function handleClosePopup() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const closeOnEsc = (event) => {
      if (event.keyCode === 27 || event.key === "Enter") {
        handleClosePopup();
      }
    };

    const closeOnClickOutside = (event) => {
      if (event.target === overlayRef.current) {
        handleClosePopup();
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
    <div ref={overlayRef} className={`popup ${isOpen ? "popup-opened" : ""}`}>
      <div className="popup__window">
        <div className="popup__container">
          <h4 className="popup__title">
            {isLanguage ? popupPreview.titleRu : popupPreview.titleEn}
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
          {isLanguage ? popupPreview.descriptionRu : popupPreview.descriptionEn}
        </p>
        <button
          type="button"
          className="popup__button-about"
          onClick={handleClosePopup}
        >
          {isLanguage ? popupPreview.buttonRu : popupPreview.buttonEn}
        </button>
      </div>
    </div>
  );
}

export default PopupLayout;
