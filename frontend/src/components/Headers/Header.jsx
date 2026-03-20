import { useEffect, useRef, useState } from "react";

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

  function handleSection(section) {
    setActiveSection(section.href.replace("#", ""));
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -70% 0px",
        threshold: 0,
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];

    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  const currentTime = new Date().getHours();
  const isClosed = currentTime < 19 && currentTime >= 1;
  
  return (
    <div
      className={`bg-white w-full h-11 fixed ${isClosed ? "top-27" : "top-20"} z-50 flex justify-center border-b`}
    >
      {/* CENTER CONTAINER */}
      <div className="relative w-full max-w-6xl flex items-center">
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
                ref={(el) => (itemRefs.current[id] = el)}
                onClick={(e) => {
                  e.preventDefault();

                  document.querySelector(section.href).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });

                  setActiveSection(id);
                }}
              >
                <div
                  className={`px-6 md:px-5 py-3.5 md:py-3 text-xs md:text-sm font-bold transition-all duration-300 ${
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
      </div>
    </div>
  );
}
