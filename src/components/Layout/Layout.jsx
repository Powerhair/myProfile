import "./Layout.scss";
import Card from "../Card/Card";
import Skills from "../Skills/Skills";
import { cardData } from "../../data/data";

function Layout({ isShow, isTheme }) {
  return (
    <div className="layout">
      {isShow ? (
        cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            link={card.link}
            isTheme={isTheme}
          />
        ))
      ) : (
        <Skills isTheme={isTheme}></Skills>
      )}
    </div>
  );
}

export default Layout;
