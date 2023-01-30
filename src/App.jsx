import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CardPreview from "./components/CardPreview";
import CardsList from "./components/CardsList";
import "./App.scss";

export default function App() {
  const [card, setCard] = useState();
  const [cards, setCards] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("is:commander f:edh");

  const fetchURL = new URL("https://api.scryfall.com/cards/random");

  function getCardFromQuery() {
    fetchURL.searchParams.append("q", currentQuery);
    fetch(fetchURL)
      .then((res) => res.json())
      .then((cardObj) => {
        setCards((prev) => [cardObj, ...prev.slice(0, 4)]);
      })
      .catch((err) => console.log(err));
    setCard(0);
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
        <Col
          md={10}
          lg={8}
          className=" d-flex flex-column maincol offset-md-1 offset-lg-2"
        >
          <h1 className="my-3">Scryfall Random Card Query</h1>
          <hr />
          <Form className="card-query-form mb-3">
            <div className="flex-grow-1">
              <label htmlFor="input-query" className="visually-hidden">
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
          <CardPreview card={cards[card]} className="my-3" />
          <CardsList setCard={setCard} cards={cards} card={card} />
        </Col>
      </Row>
    </Container>
  );
}
