import MainCards from "../Cards/MainCards";

export default function PizzaSection({ setInCart, setCartOpen }) {
  const showPizza = [
    {
      image: "/images/pizza1.jpg",
      title: "Chicken tikka",
      description:
        "American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza2.jpg",
      title: "Chicken fajita",
      description:
        "American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza3.jpg",
      title: "Chicken supreme",
      description:
        "Signature Black Bun, American Cheese Slice and Secret Meg Sauce  ",
      price: 829,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza4.jpg",
      title: "All Cheese",
      description: "American Cheese Slice, Secret Meg Sauce and BBQ Sauce",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza5.jpg",
      title: "Afghani tikka",
      description:
        "American Cheese Slice, Shroom Sauce zinger sauce and mushroom",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza6.jpg",
      title: "Malai Tikka",
      description:
        "American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza7.jpg",
      title: "Creamy tikka",
      description:
        "American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza8.jpg",
      title: "Ranch Chicken tikka",
      description:
        "Signature Black Bun, American Cheese Slice and Secret Meg Sauce  ",
      price: 829,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza9.jpg",
      title: "Smokehouse tikka",
      description: "American Cheese Slice, Secret Meg Sauce and BBQ Sauce",
      price: 799,
      showmeal: false,
      showaddon: false,
    },

    {
      image: "/images/pizza10.jpg",
      title: "Tarzen tikka",
      description:
        "American Cheese Slice, Shroom Sauce zinger sauce and mushroom",
      price: 799,
      showmeal: false,
      showaddon: false,
    },
  ];
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Our Pizza's
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showPizza.map((item) => (
          <MainCards
            key={item.title}
            {...item}
            setInCart={setInCart}
            setCartOpen={setCartOpen}
            showMeal={item.showmeal}
            showaddOn={item.showaddon}
          />
        ))}
      </div>
    </div>
  );
}
