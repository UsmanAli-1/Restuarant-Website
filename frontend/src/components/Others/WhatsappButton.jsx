import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
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
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      className="fixed bottom-37 md:bottom-20 right-4 backdrop-blur-lg bg-black/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
    >
      <WhatsAppIcon />
    </a>
  );
}