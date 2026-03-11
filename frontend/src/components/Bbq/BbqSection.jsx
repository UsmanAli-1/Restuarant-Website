import MainCards from "../MainCards";

export default function BbqSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Bar B Q
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/tikkaleg.jpg"
          title="Tikka Leg"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="400"
        />

        <MainCards
          image="/images/tikkachest.png"
          title="Tikka Chest"
          description="American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno"
          price="450"
        />

        <MainCards
          image="/images/malaitikka.png"
          title="Malai Tikka"
          description="Signature Black Bun, American Cheese Slice and Secret Meg Sauce  "
          price="450"
        />

        <MainCards
          image="/images/reshmi.png"
          title="Reshmi Kabab"
          description="American Cheese Slice, Secret Meg Sauce and BBQ Sauce"
          price="599"
        />

        <MainCards
          image="/images/kabab2.png"
          title="Seekh Kabab"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="599"
        />

        <MainCards
          image="/images/malaiboti.png"
          title="Malai Boti"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="799"
        />

        <MainCards
          image="/images/boti1.jpg"
          title="Tikka Boti"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="799"
        />
      </div>
    </div>
  );
}
