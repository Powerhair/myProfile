import "./PopupLayout.scss";
import { useEffect, useState } from "react";

function PopupLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClosePopup() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={`popup ${isOpen ? "popup-opened" : ""}`}>
      <div className="popup__window">
        {/* <button type="button" className="popup__button-close"></button> */}
        <h4 className="popup__title">Привет!</h4>
        <p className="popup__description">
          Эта страница создана, в связи с желанием сменить работу. Здесь ты
          можешь ознакомиться с моими навыками, посмотреть на мои проекты. Нажав
          на кнопку ниже, сможем познакомиться поближе!
        </p>
        <button
          type="button"
          className="popup__button-about"
          onClick={handleClosePopup}
        >
          Вперед!
        </button>
      </div>
    </div>
  );
}

export default PopupLayout;
