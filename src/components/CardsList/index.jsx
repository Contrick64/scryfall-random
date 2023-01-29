export default function CardsList({ cards, ...attrs }) {
  if (!cards.length) return <></>;
  const cardElements = cards.map((card) => (
    <a key={card.id} href={card.scryfall_uri}>
      <img className="h-100" src={card.image_uris?.small} />
    </a>
  ));
  return (
    <div
      {...attrs}
      className={`d-flex flex-row gap-1 ${attrs.className}`}
      style={{ height: 100 }}
    >
      {cardElements}
    </div>
  );
}
