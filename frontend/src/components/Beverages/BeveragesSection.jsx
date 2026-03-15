import MainCards from "../Cards/MainCards";

export default function BeveragesSection({ setInCart ,setCartOpen }) {
  const showBeverages = [
    {
      image: "/images/fanta.jpg",
      title: "Fanta 500",
      description: " ",
      price: "110",
    },
    {
      image: "/images/sprite.jpg",
      title: "Sprite 500ml",
      description: " ",
      price: "110",
    },
    {
      image: "/images/cock.jpg",
      title: "Cock 500ml",
      description: " ",
      price: "110",
    },
    {
      image: "/images/water.jpg",
      title: "Water",
      description: " ",
      price: "70",
    },
    {
      image: "/images/paratha.jpg",
      title: "Paratha",
      description: " ",
      price: "70",
    },
    {
      image: "/images/cheese.jpg",
      title: "Cheese Slice",
      description:
        "American Cheese Slice, Shroom Sauce zinger sauce and mushroom",
      price: "70",
    },
  ];
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Beverages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showBeverages.map((item) => (
          <MainCards
            key={item.title}
            {...item}
            setInCart={setInCart}
            setCartOpen={setCartOpen}
          />
        ))}
      </div>
    </div>
  );
}
