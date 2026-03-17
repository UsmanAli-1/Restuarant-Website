import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-23 md:bottom-5 right-4 backdrop-blur-lg bg-black/80  text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer"
    >
      <KeyboardArrowUpIcon fontSize="medium" />
    </button>
  );
}