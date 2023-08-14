import "../PopupLayout/PopupLayout.scss";
import { useEffect, useRef } from "react";

function PopupAbout({ isOpenAboutMe, handleCloseAboutMe }) {
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
          Меня зовут Павел и я очень люблю активный образ жизни и путешествия. В
          свободное время я редко остаюсь дома, предпочитая заниматься
          различными интересными делами. Мне нравится исследовать новые места,
          познавать разные культуры и встречать новых людей. Путешествия для
          меня – это возможность расширить горизонты и открыть для себя что-то
          новое.
        </p>
        <p className="popup__description">
          Когда дело касается работы, я всегда вкладываю в нее всю свою энергию
          и стараюсь погрузиться в нее полностью. Я не боюсь задавать вопросы и
          всегда стараюсь сделать все, что в моих силах, чтобы достичь
          поставленных целей. На предыдущих местах работы мне часто приходилось
          сталкиваться с ситуациями, когда нужно было изучать новые вещи с нуля,
          и я всегда быстро вливался в новую сферу и становился специалистом в
          этой области. Более того, мне даже часто приходилось обучать других
          сотрудников и писать инструкции, чтобы делиться своими знаниями и
          опытом.
        </p>
        <p className="popup__description">
          Я также увлекаюсь изучением новых технологий и нахождением новых путей
          решения проблем. Для меня важно быть в курсе последних тенденций и
          развития в своей области, поэтому я постоянно обучаюсь и осваиваю
          новые навыки. Мне нравится стоять на переднем крае прогресса и
          применять новейшие технологии в своей работе. В целом, я энергичный и
          целеустремленный человек, который всегда готов принимать новые вызовы
          и учиться. Я легко адаптируюсь к новым условиям и быстро достигаю
          результатов. Мне нравится исследовать новые горизонты и найти
          инновационные решения для проблем, с которыми я сталкиваюсь. Я
          стремлюсь развиваться и расти как профессионал, и готов вкладывать все
          усилия, чтобы достичь поставленных передо мной целей.
        </p>
      </div>
    </div>
  );
}

export default PopupAbout;
