import PopularCards from "../Cards/PopularCards";

export default function PopularSection({ setInCart, setCartOpen }) {
  const showPopular = [
    {
      image: "/images/zinger.jpg",
      title: "zinger Burger",
      price: 350,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/pizzafries.jpg",
      title: "Pizza Fries",
      price: 650,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/pizza1.jpg",
      title: "Tikka Flavor Pizza ",
      price: 799,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/bosszinger.jpg",
      title: "Boss Zinger",
      price: 650,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/malaiboti.png",
      title: "Malai Boti",
      price: 650,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/roll4.png",
      title: "Chatni Roll",
      price: 190,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/sandwich4.png",
      title: "Club Sandwich",
      price: 350,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
    {
      image: "/images/tikkachest.png",
      title: "Chicken Tikka Chest",
      price: 450,
      description:
        "A crispy fried chicken fillet topped with lettuce, tomato, and a special sauce, all sandwiched between a soft bun.",
    },
  ];
  return (
    <>
      <div className="pt-10 max-w-[1200px] mx-auto ">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
          Popular
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {showPopular.map((item) => (
            <PopularCards
              key={item.title}
              {...item}
              setInCart={setInCart}
              setCartOpen={setCartOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
}
