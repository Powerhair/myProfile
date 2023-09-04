import "./Layout.scss";
import Card from "../Card/Card";
import Skills from "../Skills/Skills";
import { cardData } from "../../data/data";

function Layout({ isShow, isTheme, isLanguage }) {
  return (
    <div className="layout">
      {isShow ? (
        cardData.map((card, index) => (
          <Card
            key={index}
            isLanguage={isLanguage}
            titleRu={card.titleRu}
            titleEn={card.titleEn}
            content={card.content}
            link={card.link}
            isTheme={isTheme}
          />
        ))
      ) : (
        <Skills isTheme={isTheme} isLanguage={isLanguage}></Skills>
      )}
    </div>
  );
}

export default Layout;
