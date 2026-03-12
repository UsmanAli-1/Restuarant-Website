import MainCards from "../Cards.jsx/MainCards";

export default function BurgersSection() {
  return (
    <div className="  max-w-[1200px] mx-auto py-10">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 hover:underline">
        Burgers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MainCards
          image="/images/zinger.jpg"
          title="Zinger Burger / cheese"
          description="American Cheese Slice, Garlic Mayo Sauce, Grilled Vegetable"
          price="400"
        />

        <MainCards
          image="/images/bosszinger.jpg"
          title="Boss Zinger"
          description="American Cheese Slice, Salsa Sauce, Cheese Sauce  zinger sauce and jalapeno"
          price="799"
        />

        <MainCards
          image="/images/beef.jpg"
          title="Beef Burger"
          description="Signature Black Bun, American Cheese Slice and Secret Meg Sauce  "
          price="350"
        />

        <MainCards
          image="/images/zinger1.jpg"
          title="Zinger Burger"
          description="American Cheese Slice, Secret Meg Sauce and BBQ Sauce"
          price="350"
        />

        <MainCards
          image="/images/beef.jpg"
          title="Chicken Burger"
          description="American Cheese Slice, Shroom Sauce zinger sauce and mushroom"
          price="350"
        />
      </div>
    </div>
  );
}
