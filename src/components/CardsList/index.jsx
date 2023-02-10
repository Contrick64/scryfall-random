import "./index.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef } from "react";

export default function CardsList({ card, cards, setCard, ...attrs }) {
  const cardRef = cards.map((cardObj) => {
    return { ...cardObj, nodeRef: createRef(null) };
  });
  const cardElements = cardRef.map((cardObj, i) => {
    const imgSrc = (cardObj.card_faces ? cardObj.card_faces[0] : cardObj)
      .image_uris.small;
    return (
      <CSSTransition
        key={cardObj.id}
        classNames="transition-card"
        timeout={600}
      >
        <button
          className={`cardslist-card unbutton ${i == card ? "selected" : ""}`}
          onClick={() => setCard(i)}
        >
          <img src={imgSrc} />
        </button>
      </CSSTransition>
    );
  });
  return (
    <TransitionGroup
      {...attrs}
      className={`card-row mt-auto footer ${attrs.className}`}
      component="footer"
    >
      {cardElements ? cardElements : "No card history to show"}
    </TransitionGroup>
  );
}
