import { Col, Row } from "react-bootstrap";
import reactStringReplace from "react-string-replace";
import "mana-font/css/mana.min.css";
import "./index.scss";

function replaceManaSymbols(string) {
  const output = reactStringReplace(string, /({.*?})/g, (symbol, i) => {
    const mana_name = symbol
      .replace(/t/gi, "tap")
      .replace(/[^wubrg0-9xtap]/gi, "")
      .toLowerCase();
    return <i key={i} className={`ms ms-cost ms-${mana_name}`} />;
  });
  return output;
}

export default function CardPreview({ card, ...attrs }) {
  if (card && Object.keys(card).length) {
    return (
      <Row {...attrs} className={`mtg-card ${attrs.className}`}>
        <Col md={5} className="d-flex flex-center mb-3">
          <a href={card.scryfall_uri}>
            <img className="img-fluid mtg-card-img" src={card.image_uris.png} />
          </a>
        </Col>
        <Col>
          <p className="card-title">
            {card.name}
            <span className="mx-2 card-cost">
              {replaceManaSymbols(card.mana_cost)}
            </span>
          </p>
          <p className="card-type">{card.type_line}</p>
          {!card.textless && (
            <p className="card-desc">{replaceManaSymbols(card.oracle_text)}</p>
          )}
          {card.power && (
            <p className="card-pt">{card.power + "/" + card.toughness}</p>
          )}
          {card.flavor_text && (
            <p className="card-flavor">
              <i>{card.flavor_text}</i>
            </p>
          )}
        </Col>
        {/* <pre>{JSON.stringify(card, null, 2)}</pre> */}
      </Row>
    );
  } else return <></>;
}
