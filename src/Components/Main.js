import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import bread from "../assets/bread.svg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 600,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bread,
    title: "Garlic Bread",
    price: 560,
    description:
      "Our signature bread is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 400,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
