import "../PopupLayout/PopupLayout.scss";
import { useEffect, useRef } from "react";

function PopupAbout({ isOpenAboutMe, handleCloseAboutMe, handleShowAboutMe }) {
  const overlayRef = useRef();

  // handleShowAboutMe();

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
    <div
      ref={overlayRef}
      className={`popup ${isOpenAboutMe ? "popup-opened" : ""}`}
    >
      <div className="popup__window popup__about">
        <button
          onClick={handleCloseAboutMe}
          type="button"
          className="popup__button-close"
        ></button>
        <h4 className="popup__title">Обо мне!</h4>
        <p className="popup__description">
          Меня зовут Павел и я очень люблю{" "}
          <p className="popup__description-color">
            активный образ жизни и путешествия
          </p>
          . Мне нравится исследовать новые места, познавать разные культуры и
          встречать новых людей. Путешествия для меня – это возможность
          расширить горизонты и открыть для себя что-то новое.
        </p>
        <p className="popup__description">
          Когда дело касается работы, я всегда вкладываю в нее всю свою энергию
          и полностью погружаюсь в процесс. Я{" "}
          <p className="popup__description-color">не боюсь задавать вопросы</p>{" "}
          и всегда стараюсь сделать все, что в моих силах, чтобы достичь
          поставленных целей. На предыдущих местах работы мне часто приходилось
          сталкиваться с ситуациями, когда нужно было изучать новые вещи с нуля,
          и я{" "}
          <p className="popup__description-color">
            всегда быстро вливался в новую сферу
          </p>
          . Более того, мне даже приходилось обучать других сотрудников и писать
          инструкции, чтобы делиться своими знаниями и опытом.
        </p>
        <p className="popup__description">
          Для меня важно быть в курсе{" "}
          <p className="popup__description-color">последних тенденций</p>,
          поэтому я постоянно обучаюсь и осваиваю новейшие технологии в своей
          работе.
        </p>
        <p className="popup__description">
          В целом, я{" "}
          <p className="popup__description-color">
            энергичный и целеустремленный человек
          </p>
          , который всегда готов принимать новые вызовы и учиться. Я легко
          адаптируюсь к новым условиям и быстро достигаю результатов.
        </p>
      </div>
    </div>
  );
}

export default PopupAbout;
