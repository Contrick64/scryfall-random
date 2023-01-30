import "./index.scss";

export default function CardsList({ card, cards, setCard, ...attrs }) {
  const cardElements = cards.map((card) => (
    <button className="cardslist-card unbutton" key={card.id}>
      <img src={card.image_uris?.png} />
    </button>
  ));
  return (
    <footer {...attrs} className={`card-row mt-auto footer ${attrs.className}`}>
      {cardElements ? cardElements : "No card history to show"}
    </footer>
  );
}
