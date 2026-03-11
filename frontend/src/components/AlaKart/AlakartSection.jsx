import MainCards from "../MainCards";

export default function AlakartSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Ala Kart
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/pizzabite.jpg"
          title="Pizza Bites"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="799"
        />

        <MainCards
          image="/images/Lasagna.webp"
          title="Lasagna"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="799"
        />
      </div>
    </div>
  );
}
