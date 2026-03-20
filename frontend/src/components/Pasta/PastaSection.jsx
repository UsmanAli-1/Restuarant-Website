import MainCards from "../Cards/MainCards";

export default function PastaSection({ setInCart, setCartOpen }) {
  const showPaste = [
    {
      image: "/images/pasta.png",
      title: "Cheesy Pasta",
      description:
        "American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable",
      price: 799,
      showmeal: false,
      showaddon: false,
    },
  ];
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Pasta
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {showPaste.map((item) => (
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
