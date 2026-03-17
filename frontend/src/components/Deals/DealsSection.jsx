import MainCards from "../Cards/MainCards";

export default function DealsSection({ setInCart, setCartOpen }) {
  const showDeals = [
    {
      image: "/images/deal1.jpg",
      title: "Philly Cheesesteak",
      description:
        "American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable",
      price: 799,
    },
    {
      image: "/images/deal2.jpg",
      title: "Salsa Jalapeno",
      description:
        "American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno",
      price: 799,
    },
    {
      image: "/images/deal3.jpg",
      title: "Meg Classic",
      description:
        "Signature Black Bun, American Cheese Slice and Secret Meg Sauce  ",
      price: 829,
    },
    {
      image: "/images/deal4.jpg",
      title: "Smokehouse",
      description: "American Cheese Slice, Secret Meg Sauce and BBQ Sauce",
      price: 799,
    },
    {
      image: "/images/deal5.jpg",
      title: "Shroom Melt",
      description:
        "American Cheese Slice, Shroom Sauce zinger sauce and mushroom",
      price: 799,
    },
  ];
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Deals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showDeals.map((item) => (
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
