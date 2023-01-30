import { Button, Col, Row } from "react-bootstrap";
import reactStringReplace from "react-string-replace";
import "mana-font/css/mana.min.css";
import "./index.scss";
import { useEffect, useState } from "react";

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
  const [face, setFace] = useState();
  useEffect(() => {
    setFace(0);
  }, [card]);
  if (card && Object.keys(card).length) {
    const myCard = card.card_faces ? card.card_faces[face] : card;
    const scryfall_link = card.scryfall_uri;
    return (
      <Row {...attrs} className={`mtg-card ${attrs.className}`}>
        <Col md={5} className="mtg-image-box d-flex flex-center mb-3">
          <a href={scryfall_link}>
            <img
              className="img-fluid mtg-card-img"
              src={myCard.image_uris.png}
            />
          </a>
          {card.card_faces != undefined && (
            <Button
              className="flip-card"
              onClick={() => setFace((prev) => (prev + 1) % 2)}
            >
              Flip
            </Button>
          )}
        </Col>
        <Col>
          <p className="card-title">
            {myCard.name}
            <span className="mx-2 card-cost">
              {replaceManaSymbols(myCard.mana_cost)}
            </span>
          </p>
          <p className="card-type">{myCard.type_line}</p>
          {!myCard.textless && (
            <p className="card-desc">
              {replaceManaSymbols(myCard.oracle_text)}
            </p>
          )}
          {myCard.power && (
            <p className="card-pt">{myCard.power + "/" + myCard.toughness}</p>
          )}
          {myCard.flavor_text && (
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
