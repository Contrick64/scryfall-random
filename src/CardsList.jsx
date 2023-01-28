export default function CardsList({ cards }) {
  if (!cards.length) return <></>;
  const cardElements = cards.map((card) => (
    <a key={card.id} href={card.scryfall_uri}>
      <img className="h-100" src={card.image_uris?.small} />
    </a>
  ));
  return (
    <div className="d-flex flex-row" style={{ height: 100 }}>
      {cardElements}
    </div>
  );
}
