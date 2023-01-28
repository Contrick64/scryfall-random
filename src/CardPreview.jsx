import { Row } from "react-bootstrap";

export default function CardPreview({ card }) {
  if (card && Object.keys(card).length) {
    return (
      <Row>
        <h1>
          {card.name} {card.mana_cost}
        </h1>
        <a href={card.scryfall_uri}>
          <img className="img-fluid" src={card.image_uris.large} />
        </a>
        {/* <pre>{JSON.stringify(card, null, 2)}</pre> */}
      </Row>
    );
  } else return <></>;
}
