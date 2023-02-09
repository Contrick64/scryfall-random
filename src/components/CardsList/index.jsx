import "./index.scss";

export default function CardsList({ card, cards, setCard, ...attrs }) {
  const cardElements = cards.map((cardObj, i) => {
    const imgSrc = (cardObj.card_faces ? cardObj.card_faces[0] : cardObj)
      .image_uris.png;
    return (
      <button
        key={cardObj.id}
        className={`cardslist-card unbutton ${i == card ? "selected" : ""}`}
        onClick={() => setCard(i)}
      >
        <img src={imgSrc} />
      </button>
    );
  });
  return (
    <footer {...attrs} className={`card-row mt-auto footer ${attrs.className}`}>
      <TransitionGroup>
        {cardElements ? cardElements : "No card history to show"}
      </TransitionGroup>
    </footer>
  );
}
