import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardPreview from "./components/CardPreview";
import CardsList from "./components/CardsList";

export default function App() {
  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("is:commander f:edh");

  const fetchURL = new URL("https://api.scryfall.com/cards/random");

  function getCardFromQuery() {
    if (card && Object.keys(card).length) {
      setCards((prev) => {
        if (prev.length == 5) {
          return [card, ...prev.slice(0, 4)];
        } else {
          return [card, ...prev];
        }
      });
    }
    cards ?? setCard(cards[0]);
    fetchURL.searchParams.append("q", currentQuery);
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCardFromQuery();
  }, []);

  function handleChange(e) {
    setCurrentQuery(e.target.value);
  }

  return (
    <Container>
      <Row>
        <Col md={10} lg={8} className="offset-md-1 offset-lg-2">
          <div className="card-query-form">
            <input
              value={currentQuery}
              placeholder="scryfall query"
              onChange={handleChange}
            />
            <Button onClick={getCardFromQuery}>Fetch New Card</Button>
          </div>
          <CardsList cards={cards} className="my-2" />
          <CardPreview card={card} />
        </Col>
      </Row>
    </Container>
  );
}
