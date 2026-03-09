import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
export default function Header() {
  const sections = [
    { href: "#popular", label: "POPULAR" },
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

  return (
    <>
      <div className="bg-white w-full h-12 flex items-center fixed top-19 z-50 justify-center ">
        {/* <KeyboardArrowLeftIcon className="text-black" /> */}
        <div className="w-[85%] md:w-3/4 h-full gap-3 text-black  font-bold text-xs md:text-base flex items-center overflow-x-auto hide-scrollbar ">
          {sections.map((section, index) => {
            const id = section.href.replace("#", "");

            return (
              <a
                href={section.href}
                key={section.href}
                onClick={() => {
                  handleSection(section);
                }}
              >
                <div
                  className={`py-3.5 md:py-2.5 px-3 whitespace-nowrap ${
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
        {/* <KeyboardArrowRightIcon className="text-black" /> */}
      </div>
    </>
  );
}
