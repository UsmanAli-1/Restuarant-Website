import MainCards from "../Cards.jsx/MainCards";

export default function PastaSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Pasta
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/pasta.png"
          title="Cheesy Pasta"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="799"
        />
      </div>
    </div>
  );
}
