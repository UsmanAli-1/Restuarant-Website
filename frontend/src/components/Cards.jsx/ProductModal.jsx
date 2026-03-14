import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Radio,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ProductModal({ open, onClose, item }) {
  const [count, setCount] = useState(1);
  const [mealOption, setMealOption] = useState("");
  const [addonOption, setAddonOption] = useState("");

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => (c > 1 ? c - 1 : 1));

  const handleAddtocart = (items) => {
    console.log(items);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: "1090px",
          margin: "auto",

          // MOBILE STYLE
          marginTop: { xs: "65px", md: "auto" },
          height: { xs: "calc(100% - 60px)" },

          // DESKTOP HEIGHT
          maxHeight: { md: "650px" },

          // ROUND ONLY TOP ON MOBILE
          borderTopLeftRadius: { xs: "20px", md: "8px" },
          borderTopRightRadius: { xs: "20px", md: "8px" },
          borderBottomLeftRadius: { xs: "0px", md: "8px" },
          borderBottomRightRadius: { xs: "0px", md: "8px" },
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.45)",
        },
      }}
      PaperProps={{
        className: "overflow-hidden max-h-[95vh]",
        sx: {
          borderRadius: { xs: "20px", md: "8px" },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "fixed",
          top: "20px",
          right: "16px",
          bgcolor: "#ffffffb9",
          width: 38,
          height: 38,
          zIndex: 2000,
          display: { xs: "flex", md: "none" },
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          "&:hover": { bgcolor: "#f5f5f5" },
          borderRadius: "8px",
        }}
      >
        <CloseIcon />
      </IconButton>

      <div className="flex flex-col md:flex-row h-full">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full h-[260px] md:h-full bg-black flex-shrink-0">
          <img src={item?.image} className="w-full h-full object-cover" />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col md:w-1/2 h-full bg-gray-100 relative">
          {/* CLOSE */}
          <IconButton
            onClick={onClose}
            className="hidden !absolute right-3 top-3 !bg-gray-200  md:flex"
            sx={{
              borderRadius: "8px",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* SCROLL AREA */}
          <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
            <div>
              <h2 className="text-xl font-bold">{item?.title}</h2>

              <p className="font-semibold mt-1">Rs. {item?.price}.00</p>

              <p className="text-gray-500 text-sm mt-1">{item?.description}</p>
            </div>

            {/* DROPDOWNS */}
            <Accordion
              sx={{
                mt: 2,
                borderRadius: "10px",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Make It A Meal</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box className="space-y-3">
                  <Box
                    onClick={() =>
                      setMealOption(mealOption === "fries" ? "" : "fries")
                    }
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <Typography>Fries & Drink</Typography>

                    <Box className="flex items-center gap-2">
                      <Typography>+ Rs.299</Typography>

                      <Radio checked={mealOption === "fries"} readOnly />
                    </Box>
                  </Box>

                  <Box
                    onClick={() =>
                      setMealOption(mealOption === "curly" ? "" : "curly")
                    }
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <Typography>Curly Fries & Drink</Typography>

                    <Box className="flex items-center gap-2">
                      <Typography>+ Rs.549</Typography>

                      <Radio checked={mealOption === "curly"} readOnly />
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                mt: 2,
                borderRadius: "10px",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">Add On</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box
                  onClick={() =>
                    setAddonOption(addonOption === "cheese" ? "" : "cheese")
                  }
                  className="flex justify-between items-center cursor-pointer"
                >
                  <Typography>Extra Cheese</Typography>

                  <Box className="flex items-center gap-2">
                    <Typography>+ Rs.120</Typography>

                    <Radio checked={addonOption === "cheese"} readOnly />
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* INSTRUCTIONS */}
            <div>
              <p className="font-semibold mb-2">Instructions</p>

              <textarea
                className="w-full border rounded-lg p-3"
                rows={3}
                placeholder="Any special requests?"
              />
            </div>
          </div>

          {/* FOOTER */}
          <div className="bg-white border-t border-gray-300 p-4 flex-shrink-0 sticky bottom-0 z-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              {/* COUNTER */}
              <div className="flex items-center justify-center md:justify-start gap-10 md:gap-2 lg:gap-2">
                <button
                  onClick={decrease}
                  className="w-8 h-12 bg-black text-white rounded-md flex items-center justify-center"
                >
                  <RemoveIcon />
                </button>

                <div className="border border-gray-300 rounded-lg px-21 md:px-4 lg:px-6 py-3 min-w-[80px] text-center">
                  {count}
                </div>

                <button
                  onClick={increase}
                  className="w-8 h-12 bg-black text-white rounded-md flex items-center justify-center"
                >
                  <AddIcon />
                </button>
              </div>

              {/* PRICE + CART */}
              <button
                onClick={() => handleAddtocart(item, onClose)}
                className="bg-black text-white py-3 px-3 md:px-6 rounded-lg font-semibold flex justify-between md:justify-center md:gap-10 lg:gap-18 w-full md:w-auto "
              >
                <span>Rs. {item?.price}.00</span>

                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
