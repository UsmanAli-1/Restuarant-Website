import MainCards from "../Cards.jsx/MainCards";

export default function SandwichSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Sandwichs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/sandwich1.png"
          title="Crispy Chicken Sandwich"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="450"
        />

        <MainCards
          image="/images/sandwich2.png"
          title="Chicken Sandwich"
          description="American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno"
          price="300"
        />

        <MainCards
          image="/images/sandwich3.png"
          title="Tikka Sandwich"
          description="Signature Black Bun, American Cheese Slice and Secret Meg Sauce  "
          price="350"
        />

        <MainCards
          image="/images/sandwich4.png"
          title="Club Sandwich"
          description="American Cheese Slice, Secret Meg Sauce and BBQ Sauce"
          price="400"
        />
      </div>
    </div>
  );
}
