import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CardPreview from "./CardPreview";
import CardsList from "./CardsList";

export default function App() {
  const [card, setCard] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);

  const query = "is:commander";
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
    fetchURL.searchParams.append("q", query);
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      })
      .then(() => setIsLoaded(true))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCardFromQuery();
  }, []);

  return (
    <Container>
      <div className="d-flex">
        <Button onClick={getCardFromQuery}>Fetch New Card</Button>
        <CardsList cards={cards} />
      </div>
      <CardPreview card={card} />
    </Container>
  );
}
