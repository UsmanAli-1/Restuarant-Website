import UpperHeader from "../components/Headers/UpperHeader";
import Header from "../components/Headers/Header";
import PopularSection from "../components/Popular/PopularSection";
import BurgersSection from "../components/Burgers/BurgersSection";
import SandwichSection from "../components/Sandwich/SandwichSection";
import RollsSection from "../components/Rolls/RollsSection";
import BbqSection from "../components/Bbq/BbqSection";
import PizzaSection from "../components/Pizza/PizzaSection";
import PastaSection from "../components/Pasta/PastaSection";
import AlakartSection from "../components/AlaKart/AlakartSection";
import FriesSection from "../components/Fries/FriesSection";
import BeveragesSection from "../components/Beverages/BeveragesSection";
import DealsSection from "../components/Deals/DealsSection";
import Footer from "../components/Footer";
import CartDrawer from "../components/Carts/CartDrawer";
import { useState } from "react";
import FloatingCart from "../components/Carts/FloatingCart";
import ScrollTop from "../components/Others/ScrollTop";
import WhatsAppButton from "../components/Others/WhatsappButton";
import { getItemTotal } from "../utils/cart";

function Home() {
  const [inCart, setInCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const subtotal = inCart.reduce((acc, item) => acc + getItemTotal(item), 0);

  return (
    <>
      <UpperHeader setCartOpen={setCartOpen} inCart={inCart} />
      <Header />
      <div className="mt-35 px-4 md:px-8 max-w-[1200px] mx-auto">
        <section id="popular" className="scroll-mt-32">
          <PopularSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="deals" className="scroll-mt-32">
          <DealsSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="burgers" className="scroll-mt-32">
          <BurgersSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="sandwich" className="scroll-mt-32">
          <SandwichSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="rolls" className="scroll-mt-32">
          <RollsSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="bbq" className="scroll-mt-32">
          <BbqSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="pizza" className="scroll-mt-32">
          <PizzaSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="pasta" className="scroll-mt-32">
          <PastaSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="alakart" className="scroll-mt-32">
          <AlakartSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="fries" className="scroll-mt-32">
          <FriesSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>

        <section id="beverages" className="scroll-mt-32">
          <BeveragesSection setInCart={setInCart} setCartOpen={setCartOpen} />
        </section>
      </div>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        inCart={inCart}
        setInCart={setInCart}
        subtotal={subtotal}
      />

      <WhatsAppButton />
      <ScrollTop />
      <FloatingCart
        inCart={inCart}
        subtotal={subtotal}
        setCartOpen={setCartOpen}
      />
    </>
  );
}

export default Home;
