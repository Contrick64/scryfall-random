import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export default function CardPreview() {
  const [card, setCard] = useState({
    object: "card",
    id: "395e7882-0429-46aa-8e38-be707067c588",
    oracle_id: "35e2730e-b3aa-4080-aae8-7b3ad1e59848",
    multiverse_ids: [4581],
    mtgo_id: 9251,
    mtgo_foil_id: 9252,
    tcgplayer_id: 6053,
    cardmarket_id: 8703,
    name: "Kithkin Armor",
    lang: "en",
    released_at: "1997-06-09",
    uri: "https://api.scryfall.com/cards/395e7882-0429-46aa-8e38-be707067c588",
    scryfall_uri:
      "https://scryfall.com/card/wth/19/kithkin-armor?utm_source=api",
    layout: "normal",
    highres_image: true,
    image_status: "highres_scan",
    image_uris: {
      small:
        "https://cards.scryfall.io/small/front/3/9/395e7882-0429-46aa-8e38-be707067c588.jpg?1562800256",
      normal:
        "https://cards.scryfall.io/normal/front/3/9/395e7882-0429-46aa-8e38-be707067c588.jpg?1562800256",
      large:
        "https://cards.scryfall.io/large/front/3/9/395e7882-0429-46aa-8e38-be707067c588.jpg?1562800256",
      png: "https://cards.scryfall.io/png/front/3/9/395e7882-0429-46aa-8e38-be707067c588.png?1562800256",
      art_crop:
        "https://cards.scryfall.io/art_crop/front/3/9/395e7882-0429-46aa-8e38-be707067c588.jpg?1562800256",
      border_crop:
        "https://cards.scryfall.io/border_crop/front/3/9/395e7882-0429-46aa-8e38-be707067c588.jpg?1562800256",
    },
    mana_cost: "{W}",
    cmc: 1,
    type_line: "Enchantment — Aura",
    oracle_text:
      "Enchant creature\nEnchanted creature can't be blocked by creatures with power 3 or greater.\nSacrifice Kithkin Armor: The next time a source of your choice would deal damage to enchanted creature this turn, prevent that damage.",
    colors: ["W"],
    color_identity: ["W"],
    keywords: ["Enchant"],
    legalities: {
      standard: "not_legal",
      future: "not_legal",
      historic: "not_legal",
      gladiator: "not_legal",
      pioneer: "not_legal",
      explorer: "not_legal",
      modern: "not_legal",
      legacy: "legal",
      pauper: "legal",
      vintage: "legal",
      penny: "not_legal",
      commander: "legal",
      brawl: "not_legal",
      historicbrawl: "not_legal",
      alchemy: "not_legal",
      paupercommander: "legal",
      duel: "legal",
      oldschool: "not_legal",
      premodern: "legal",
    },
    games: ["paper", "mtgo"],
    reserved: false,
    foil: false,
    nonfoil: true,
    finishes: ["nonfoil"],
    oversized: false,
    promo: false,
    reprint: false,
    variation: false,
    set_id: "700997ac-add2-4ce2-992e-5efa0fdfc0e9",
    set: "wth",
    set_name: "Weatherlight",
    set_type: "expansion",
    set_uri:
      "https://api.scryfall.com/sets/700997ac-add2-4ce2-992e-5efa0fdfc0e9",
    set_search_uri:
      "https://api.scryfall.com/cards/search?order=set&q=e%3Awth&unique=prints",
    scryfall_set_uri: "https://scryfall.com/sets/wth?utm_source=api",
    rulings_uri:
      "https://api.scryfall.com/cards/395e7882-0429-46aa-8e38-be707067c588/rulings",
    prints_search_uri:
      "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A35e2730e-b3aa-4080-aae8-7b3ad1e59848&unique=prints",
    collector_number: "19",
    digital: false,
    rarity: "common",
    card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    artist: "Charles Gillespie",
    artist_ids: ["ec2c14ea-79eb-4c55-963f-c46f7cef1c22"],
    illustration_id: "d6cb4ca0-740d-4235-b7b6-94deea22cf48",
    border_color: "black",
    frame: "1997",
    full_art: false,
    textless: false,
    booster: true,
    story_spotlight: false,
    edhrec_rank: 13851,
    penny_rank: 4172,
    prices: {
      usd: "0.19",
      usd_foil: null,
      usd_etched: null,
      eur: "0.05",
      eur_foil: null,
      tix: "0.03",
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=4581",
      tcgplayer_infinite_articles:
        "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Kithkin+Armor&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      tcgplayer_infinite_decks:
        "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Kithkin+Armor&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      edhrec: "https://edhrec.com/route/?cc=Kithkin+Armor",
    },
    purchase_uris: {
      tcgplayer:
        "https://www.tcgplayer.com/product/6053?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      cardmarket:
        "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Kithkin+Armor&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      cardhoarder:
        "https://www.cardhoarder.com/cards/9251?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
    },
  });
  const fetchURL = new URL("https://api.scryfall.com/cards/random");

  fetchURL.searchParams.append("q", "c=white cmc=0");
  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <Row>
      <h1>
        {card.name} {card.mana_cost}
      </h1>
      <img src={card.image_uris.png} />
    </Row>
  );
}
