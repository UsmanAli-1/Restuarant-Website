import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRef, useState } from "react";

export default function Header() {
  const sections = [
    { href: "#popular", label: "POPULAR" },
    { href: "#deals", label: "DEALS" },
    { href: "#burgers", label: "BURGERS" },
    { href: "#sandwich", label: "SANDWICH" },
    { href: "#rolls", label: "ROLLS" },
    { href: "#bbq", label: "BBQ" },
    { href: "#pizza", label: "PIZZA" },
    { href: "#pasta", label: "PASTA" },
    { href: "#alakart", label: "ALA KART" },
    { href: "#fries", label: "FRIES" },
    { href: "#beverages", label: "BEVERAGES" },
  ];

  const [activeSection, setActiveSection] = useState("popular");

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  function handleSection(section) {
    setActiveSection(section.href.replace("#", ""));
  }

  return (
    <div className="bg-white w-full h-11 fixed top-19 z-50 flex justify-center border-b">

      {/* CENTER CONTAINER */}
      <div className="relative w-full max-w-6xl flex items-center">

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white h-full px-1 flex items-center"
        >
          <KeyboardArrowLeftIcon />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex text-black overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar w-full px-8"
        >
          {sections.map((section) => {
            const id = section.href.replace("#", "");

            return (
              <a
                key={section.href}
                href={section.href}
                onClick={() => handleSection(section)}
                className="flex-shrink-0"
              >
                <div
                  className={`px-4 md:px-5 py-3.5 md:py-3 text-xs md:text-sm font-bold ${
                    activeSection === id
                      ? "border-b-[3px] border-black"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  {section.label}
                </div>
              </a>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white h-full px-1 flex items-center"
        >
          <KeyboardArrowRightIcon />
        </button>

      </div>
    </div>
  );
}