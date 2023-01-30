import "./index.scss";

export default function CardsList({ card, cards, setCard, ...attrs }) {
  const cardElements = cards.map((cardObj, i) => (
    <button
      className={`cardslist-card unbutton ${i == card ? "selected" : ""}`}
      key={card.id}
      onClick={() => setCard(i)}
    >
      <img src={cardObj.image_uris?.png} />
    </button>
  ));
  return (
    <footer {...attrs} className={`card-row mt-auto footer ${attrs.className}`}>
      {cardElements ? cardElements : "No card history to show"}
    </footer>
  );
}
