import { createContext, useContext, useState, useEffect } from "react";

// ✅ MUST be defined BEFORE using it
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    city: "",
    area: "",
    type: "delivery",
  });

  const [openModal, setOpenModal] = useState(true);

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("location");
    if (saved) {
      setLocation(JSON.parse(saved));
      setOpenModal(false);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, openModal, setOpenModal }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// ✅ custom hook
export const useUserLocation = () => useContext(LocationContext);