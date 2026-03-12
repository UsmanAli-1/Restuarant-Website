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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          margin: 0,
          width: "100%",
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.45)",
        },
      }}
      PaperProps={{
        className: "overflow-hidden md:h-[650px] max-h-[95vh] w-full",
        sx: {
          borderRadius: { xs: "0px", md: "16px" },
          margin: 0,
        },
      }}
    >
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
            className="!absolute right-3 top-3 !bg-gray-200"
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
                  <Box className="flex justify-between items-center">
                    <Typography>Fries & Drink</Typography>

                    <Box className="flex items-center gap-2">
                      <Typography>+ Rs.299</Typography>

                      <Radio
                        checked={mealOption === "fries"}
                        onChange={() => setMealOption("fries")}
                      />
                    </Box>
                  </Box>

                  <Box className="flex justify-between items-center">
                    <Typography>Curly Fries & Drink</Typography>

                    <Box className="flex items-center gap-2">
                      <Typography>+ Rs.549</Typography>

                      <Radio
                        checked={mealOption === "curly"}
                        onChange={() => setMealOption("curly")}
                      />
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
                <Box className="flex justify-between items-center">
                  <Typography>Extra Cheese</Typography>

                  <Box className="flex items-center gap-2">
                    <Typography>+ Rs.120</Typography>

                    <Radio
                      checked={addonOption === "cheese"}
                      onChange={() => setAddonOption("cheese")}
                    />
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
              <div className="flex items-center justify-center md:justify-start gap-10 md:gap-2 lg:gap-1">
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
              <button className="bg-black text-white py-3 px-3 md:px-6 rounded-lg font-semibold flex justify-between md:justify-center md:gap-10 lg:gap-18 w-full md:w-auto">
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
