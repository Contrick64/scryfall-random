import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CardPreview from "./components/CardPreview";
import CardsList from "./components/CardsList";
import "./App.scss";

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
          <h1 className="my-3">Scryfall Random Card Query</h1>
          <hr />
          <Form className="card-query-form mb-3">
            <div className="flex-grow-1">
              <label for="input-query" className="visually-hidden">
                Scryfall query
              </label>
              <input
                id="input-query"
                className="form-control"
                type="text"
                value={currentQuery}
                placeholder="scryfall query"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button onClick={getCardFromQuery}>Fetch New Card</Button>
            </div>
          </Form>
          <CardPreview card={card} className="my-3" />
          <CardsList cards={cards} className="fixed-md-bottom" />
        </Col>
      </Row>
    </Container>
  );
}
