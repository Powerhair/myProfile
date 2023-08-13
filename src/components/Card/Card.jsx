import "./Card.scss";

function Card({ title, content, link, isTheme }) {
  return (
    <div className={`card ${isTheme ? "" : "card-dark"}`}>
      <h2 className="card__title">{title}</h2>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="card__img" src={content}></img>
      </a>
    </div>
  );
}

export default Card;
