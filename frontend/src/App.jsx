import WarningHeader from "./components/Headers/WarningHeader";
import UpperHeader from "./components/Headers/UpperHeader";
import Header from "./components/Headers/Header";
import PopularSection from "./components/Popular/PopularSection";
import BurgersSection from "./components/Burgers/BurgersSection";
import SandwichSection from "./components/Sandwich/SandwichSection";
import RollsSection from "./components/Rolls/RollsSection";
import BbqSection from "./components/Bbq/BbqSection";
import PizzaSection from "./components/Pizza/PizzaSection";
import PastaSection from "./components/Pasta/PastaSection";
import AlakartSection from "./components/AlaKart/AlakartSection";
import FriesSection from "./components/Fries/FriesSection";
import BeveragesSection from "./components/Beverages/BeveragesSection";
import DealsSection from "./components/Deals/DealsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <WarningHeader />
      <UpperHeader />
      <Header />
      <div className="mt-30 px-4 md:px-8 max-w-[1200px] mx-auto">
        <section id="popular" className="scroll-mt-32">
          <PopularSection />
        </section>
        {/* 
        <section id="deals" className="scroll-mt-32">
          <DealsSection />
        </section>

        <section id="burgers" className="scroll-mt-32">
          <BurgersSection />
        </section>

        <section id="sandwich" className="scroll-mt-32">
          <SandwichSection />
        </section>

        <section id="rolls" className="scroll-mt-32">
          <RollsSection />
        </section>

        <section id="bbq" className="scroll-mt-32">
          <BbqSection />
        </section>

        <section id="pizza" className="scroll-mt-32">
          <PizzaSection />
        </section>

        <section id="pasta" className="scroll-mt-32">
          <PastaSection />
        </section>

        <section id="alakart" className="scroll-mt-32">
          <AlakartSection />
        </section>

        <section id="fries" className="scroll-mt-32">
          <FriesSection />
        </section>

        <section id="beverages" className="scroll-mt-32">
          <BeveragesSection />
        </section> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
