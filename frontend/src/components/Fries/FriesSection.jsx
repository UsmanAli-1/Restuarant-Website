import MainCards from "../Cards.jsx/MainCards";

export default function FriesSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Fries
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/pizzafries.jpg"
          title="Pizza Fries"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="650"
        />

        <MainCards
          image="/images/fries.png"
          title="Plan Fries"
          description="American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno"
          price="150"
        />
      </div>
    </div>
  );
}
