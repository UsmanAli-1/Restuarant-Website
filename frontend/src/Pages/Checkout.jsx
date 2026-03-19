import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Footer from "../components/Footer";
import UpperHeader from "../components/Headers/UpperHeader";
import { getItemTotal } from "../utils/cart";

/* ─── shared input sx ─── */
const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontSize: "13px",
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#d1d5db" },
    "&:hover fieldset": { borderColor: "#9ca3af" },
    "&.Mui-focused fieldset": { borderColor: "#6b7280", borderWidth: "1px" },
  },
  "& .MuiInputBase-input": {
    fontSize: "13px",
    color: "#111",
    padding: "14px 14px",
    "&::placeholder": { color: "#9ca3af", opacity: 1 },
  },
};

export default function Checkout() {
  const { state } = useLocation();
  const inCart = state?.inCart || [];
  const subtotal = state?.subtotal || 0;
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("cod");

  const delivery = 150;
  const grandTotal = subtotal + delivery;

  return (
    <div className="bg-black min-h-screen">
      <UpperHeader showCart={false} />

      <div className="flex justify-center w-full">
        <Box className="bg-white w-full max-w-[1500px] md:px-5 py-8 mt-33 mb-5 rounded-lg mx-4 md:mx-6">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-1 mb-3 ml-3 md:ml-0">
            <span
              onClick={() => navigate("/")}
              className="text-[12px] text-gray-400 cursor-pointer hover:underline"
            >
              Home
            </span>
            <ChevronRightIcon sx={{ fontSize: 13, color: "#9ca3af" }} />
            <span className="text-[12px] text-black font-medium">Checkout</span>
          </div>

          {/* ── TWO-COLUMN LAYOUT ── */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-[1300px] mx-auto">

            {/* ════════════════ LEFT ════════════════ */}
            <div className="flex-1 min-w-0 flex flex-col gap-4 mx-3 md:mx-0">

              {/* ── USER INFO CARD ── */}
              <div className="bg-gray-100/60 rounded-xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">

                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[15px] text-gray-700 font-medium">
                      Full Name
                    </label>
                    <TextField
                      placeholder="Enter your name"
                      fullWidth
                      size="small"
                      sx={inputSx}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[15px] text-gray-700 font-medium">
                      Mobile Number
                    </label>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="3XX-XXXXXXX"
                      sx={inputSx}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <div className="flex items-center gap-1 pr-2 border-r border-gray-300">
                              <span className="text-base leading-none">🇵🇰</span>
                              <span className="text-[13px] text-gray-700">+92</span>
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[15px] text-gray-700 font-medium">
                      Email Address
                    </label>
                    <TextField
                      placeholder="Enter your email address"
                      fullWidth
                      size="small"
                      sx={inputSx}
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mt-5 mb-2">
                  <p className="text-[15px] text-gray-700 font-medium mb-2">
                    Your Address
                  </p>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "#111 !important",
                      color: "#fff !important",
                      borderRadius: "10px",
                      padding: "10px 18px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#333 !important" },
                    }}
                  >
                    Add / Change Address
                  </Button>
                </div>
              </div>

              {/* ── SPECIAL INSTRUCTIONS CARD ── */}
              <div className="bg-gray-100/60 rounded-xl p-4">
                <p className="text-[15px] text-gray-700 font-medium mb-2 mt-3">
                  Special Instructions ( Optional )
                </p>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  placeholder="Add any comment e.g about allergies, or delivery instructions here."
                  sx={inputSx}
                />
              </div>

              {/* ── PAYMENT METHOD CARD ── */}
              <div className="bg-gray-100/60 rounded-xl p-4">
                <p className="text-[15px] text-gray-700 font-medium mb-3 mt-3">
                  Select Payment Method
                </p>

                {/* COD pill */}
                <div
                  onClick={() => setSelectedPayment("cod")}
                  className={`inline-flex items-center gap-2 px-4 py-[7px] rounded-lg cursor-pointer select-none transition-all ${
                    selectedPayment === "cod"
                      ? "border-2 border-gray-800"
                      : "border border-gray-300 hover:border-gray-500"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M6 12h.01M18 12h.01" strokeLinecap="round" />
                  </svg>
                  <span className="text-[13px] font-medium text-gray-800">
                    Cash On Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* ════════════════ RIGHT – YOUR CART ════════════════ */}
            <div className="w-full lg:w-[400px] flex-shrink-0 " >
              <div className="bg-gray-100/60 rounded-2xl p-4 lg:sticky lg:top-5 mx-3 md:mx-0">

                {/* heading */}
                <p className="text-[15px] font-semibold text-gray-900 mb-4">
                  Your Cart
                </p>

                {/* ── CART ITEMS ── */}
                <div className="flex flex-col">
                  {inCart.map((item, index) => (
                    <Box key={index}>
                      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>

                        {/* IMAGE */}
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            flexShrink: 0,
                            borderRadius: "6px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </Box>

                        {/* RIGHT CONTENT */}
                        <Box sx={{ flex: 1 }}>
                          <Typography fontWeight="bold" color="black">
                            {item.title}
                          </Typography>

                          <Typography sx={{ fontSize: "13px", color: "#7a7a7a", maxWidth: "240px" }}>
                            {item.description}
                          </Typography>

                          {/* ADD-ONS */}
                          <Box sx={{ color: "#7a7a7a", mt: "5px" }}>
                            {item.addon && (
                              <>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "semibold" }}>
                                  Add On
                                </Typography>
                                <Typography sx={{ fontSize: "13px" }}>
                                  1x {item.addon.label}
                                </Typography>
                              </>
                            )}

                            {item.meal && (
                              <>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "semibold", mt: 0.5 }}>
                                  Make It A Meal
                                </Typography>
                                <Typography sx={{ fontSize: "13px" }}>
                                  1x {item.meal.label}
                                </Typography>
                              </>
                            )}

                            {item.drink && (
                              <>
                                <Typography sx={{ fontSize: "12px", color: "black", fontWeight: "semibold", mt: 0.5 }}>
                                  Drinks
                                </Typography>
                                <Typography sx={{ fontSize: "13px" }}>
                                  1x {item.drink.label}
                                </Typography>
                              </>
                            )}

                            {item.instructions && (
                              <Typography sx={{ fontSize: "13px", fontStyle: "italic", color: "#9e9e9e" }}>
                                "{item.instructions}"
                              </Typography>
                            )}
                          </Box>

                          {/* ITEM PRICE */}
                          <Typography sx={{ fontWeight: "bold", display: "flex", justifyContent: "flex-end", color: "black", mt: 1 }}>
                            Rs. {getItemTotal(item).toLocaleString()}
                          </Typography>

                          {/* QUANTITY */}
                          <div className="flex items-center mt-2">
                            <div className="border border-gray-300 rounded px-3 py-[3px] text-[13px] text-gray-800 min-w-[34px] text-center">
                              {item.quantity ?? 1}
                            </div>
                          </div>
                        </Box>
                      </Box>

                      <div className="border-t border-gray-200 my-3" />
                    </Box>
                  ))}
                </div>

                {/* ADD MORE */}
                <div className="flex justify-center mb-3">
                  <span
                    onClick={() => navigate("/")}
                    className="text-[15px] text-black cursor-pointer underline"
                  >
                    + Add more items
                  </span>
                </div>

                <div className="border-t border-gray-200 my-3" />

                {/* ORDER SUMMARY */}
                <div className="mt-4 flex flex-col gap-[10px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">Subtotal</span>
                    <span className="text-[13px] text-gray-700">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">Delivery Charges</span>
                    <span className="text-[13px] text-gray-700">
                      Rs. {delivery.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-bold text-gray-900">Grand total</span>
                    <span className="text-[14px] font-bold text-blue-600">
                      Rs. {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* PLACE ORDER BUTTON */}
                <Button
                  fullWidth
                  disableElevation
                  sx={{
                    backgroundColor: "#111 !important",
                    color: "#fff !important",
                    marginTop: "14px",
                    padding: "11px",
                    borderRadius: "7px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    letterSpacing: "0.01em",
                    "&:hover": { backgroundColor: "#2d2d2d !important" },
                  }}
                >
                  Place Order
                </Button>
              </div>
            </div>

          </div>
        </Box>
      </div>

      <Footer />
    </div>
  );
}