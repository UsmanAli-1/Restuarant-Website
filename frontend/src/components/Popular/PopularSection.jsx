import PopularCards from "../PopularCards";

export default function PopularSection() {
  return (
    <>
      <div className="mt-30 max-w-[1200px] mx-auto py-8">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
          Popular
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <PopularCards
            image="/images/zinger.jpg"
            title="zinger Burger"
            price="350"
          />
          <PopularCards
            image="/images/pizzafries.jpg"
            title="Pizza Fries"
            price="650"
          />
          <PopularCards
            image="/images/pizza1.jpg"
            title="Tikka Flavor Pizza "
            price="799"
          />
          <PopularCards
            image="/images/bosszinger.jpg"
            title="Boss Zinger"
            price="650"
          />
          <PopularCards
            image="/images/malaiboti.png"
            title="Malai Boti"
            price="650"
          />
          <PopularCards
            image="/images/roll4.png"
            title="Chatni Roll"
            price="190"
          />
          <PopularCards
            image="/images/sandwich4.png"
            title="Club Sandwich"
            price="350"
          />
          <PopularCards
            image="/images/tikkachest.png"
            title="Chicken Tikka Chest"
            price="450"
          />
        </div>
      </div>
    </>
  );
}
