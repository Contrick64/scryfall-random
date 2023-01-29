import "./index.scss";

export default function CardsList({ cards, ...attrs }) {
  const cardElements = cards.map((card) => (
    <a key={card.id} href={card.scryfall_uri}>
      <img className="h-100" src={card.image_uris?.png} />
    </a>
  ));
  return (
    <div {...attrs} className={`card-row ${attrs.className}`}>
      {cardElements ? cardElements : "No card history to show"}
    </div>
  );
}
