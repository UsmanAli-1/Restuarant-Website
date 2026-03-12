import MainCards from "../Cards.jsx/MainCards";

export default function RollsSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Rolls
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/roll1.png"
          title="Crispy Roll"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="799"
        />

        <MainCards
          image="/images/roll2.png"
          title="Chatni Roll"
          description="American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno"
          price="799"
        />

        <MainCards
          image="/images/roll3.png"
          title="Mayo Garlic Roll"
          description="Signature Black Bun, American Cheese Slice and Secret Meg Sauce  "
          price="829"
        />

        <MainCards
          image="/images/roll4.png"
          title="Malai Boti Roll"
          description="American Cheese Slice, Secret Meg Sauce and BBQ Sauce"
          price="799"
        />

        <MainCards
          image="/images/roll5.png"
          title="Reshmi Kabab Roll"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="799"
        />

        <MainCards
          image="/images/roll6.png"
          title="Seekh Kabab Roll"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="799"
        />
      </div>
    </div>
  );
}
