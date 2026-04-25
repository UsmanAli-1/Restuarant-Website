import {
  Dialog,
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useUserLocation } from "../context/LocationContext";

export default function LocationModal() {
  const { openModal, setOpenModal, setLocation } = useUserLocation();

  const [type, setType] = useState("delivery");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);

  // 📍 GPS handler
  const handleUseLocation = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      const data = await res.json();

      const address = data.address;

      setCity(address.city || address.town || "");
      setArea(address.suburb || address.neighbourhood || "");

      setLoading(false);
    });
  };

  const handleConfirm = () => {
    setLocation({ city, area, type });
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal} onClose={() => setOpenModal(false)} fullWidth maxWidth="xs">
      <Box className="p-6 text-center">
        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-14 mx-auto mb-3"
        />

        <Typography fontWeight="bold" mb={2}>
          Select your order type
        </Typography>

        {/* DELIVERY / PICKUP */}
        <ToggleButtonGroup
          value={type}
          exclusive
          onChange={(e, val) => val && setType(val)}
          fullWidth
        >
          <ToggleButton value="delivery">Delivery</ToggleButton>
          <ToggleButton value="pickup">Pick-Up</ToggleButton>
        </ToggleButtonGroup>

        <Typography mt={3} mb={1}>
          Please select your location
        </Typography>

        {/* USE LOCATION */}
        <Button
          fullWidth
          onClick={handleUseLocation}
          sx={{ mb: 2 }}
        >
          {loading ? "Detecting..." : "📍 Use Current Location"}
        </Button>

        {/* INPUTS */}
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full border p-2 rounded mb-2"
        />

        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Area"
          className="w-full border p-2 rounded"
        />

        {/* SELECT BUTTON */}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleConfirm}
          disabled={!city || !area}
        >
          Select
        </Button>
      </Box>
    </Dialog>
  );
}