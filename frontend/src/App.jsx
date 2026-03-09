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

function App() {
  return (
    <>
      <WarningHeader />
      <UpperHeader />
      <Header />

      <section id="popular">
        <PopularSection />
      </section>

      <section id="burgers">
        <BurgersSection />
      </section>

      <section id="sandwich">
        <SandwichSection />
      </section>

      <section id="rolls">
        <RollsSection />
      </section>

      <section id="bbq">
        <BbqSection />
      </section>

      <section id="pizza">
        <PizzaSection />
      </section>

      <section id="pasta">
        <PastaSection />
      </section>

      <section id="alakart">
        <AlakartSection />
      </section>

      <section id="fries">
        <FriesSection />
      </section>

      <section id="beverages">
        <BeveragesSection />
      </section>
    </>
  );
}

export default App;
