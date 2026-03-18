import { Box, Typography, TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import UpperHeader from "../components/Headers/UpperHeader";
import WarningHeader from "../components/Headers/WarningHeader";

export default function Checkout({ inCart = [], getItemTotal, subtotal }) {
  return (
    <>
      <WarningHeader />
      <UpperHeader />

      <Box className="bg-[#f5f5f5] min-h-screen px-4 md:px-10 py-6">
        {/* BREADCRUMB */}
        <Typography className="text-sm text-gray-500 mb-4">
          Home &gt; <span className="text-black font-medium">Checkout</span>
        </Typography>

        <Box className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE */}
          <Box className="flex-1 space-y-5">
            {/* INPUTS */}
            <Box className="bg-white p-5 rounded-xl shadow-sm">
              <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextField label="Full Name" fullWidth size="small" />
                <TextField label="Mobile Number" fullWidth size="small" />
                <TextField label="Email Address" fullWidth size="small" />
              </Box>

              <Box className="mt-5">
                <Typography className="text-sm mb-2">Your Address</Typography>
                <Button
                  variant="contained"
                  className="!bg-black !text-white !rounded-lg"
                >
                  Add / Change Address
                </Button>
              </Box>
            </Box>

            {/* DELIVERY TIME */}
            <Box className="bg-white p-5 rounded-xl shadow-sm">
              <Typography className="text-sm mb-2">
                Choose Delivery Time
              </Typography>
              <TextField
                placeholder="Click to select time"
                fullWidth
                size="small"
              />
            </Box>

            {/* INSTRUCTIONS */}
            <Box className="bg-white p-5 rounded-xl shadow-sm">
              <Typography className="text-sm mb-2">
                Special Instructions ( Optional )
              </Typography>
              <TextField
                multiline
                rows={4}
                placeholder="Add any comment e.g about allergies, or delivery instructions here"
                fullWidth
              />
            </Box>

            {/* PAYMENT */}
            <Box className="bg-white p-5 rounded-xl shadow-sm">
              <Typography className="text-sm mb-3">
                Select Payment Method
              </Typography>

              <Box className="border rounded-lg px-4 py-2 inline-block cursor-pointer">
                Cash On Delivery
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE (CART) */}
          <Box className="w-full lg:w-[350px]">
            <Box className="bg-white rounded-xl shadow-sm p-4">
              <Typography className="font-semibold mb-3">Your Cart</Typography>

              {/* CART ITEMS */}
              {inCart.map((item, i) => (
                <Box key={i} className="flex gap-3 mb-4">
                  <img
                    src={item.image}
                    className="w-14 h-14 rounded-md object-cover"
                  />

                  <Box className="flex-1">
                    <Typography className="font-medium text-sm">
                      {item.title}
                    </Typography>

                    <Typography className="text-xs text-gray-500">
                      {item.description}
                    </Typography>

                    <Box className="text-xs mt-1">
                      {item.addon && <div>1x {item.addon.label}</div>}
                      {item.meal && <div>1x {item.meal.label}</div>}
                      {item.drink && <div>1x {item.drink.label}</div>}
                      {item.instructions && (
                        <div className="italic text-gray-400">
                          "{item.instructions}"
                        </div>
                      )}
                    </Box>
                  </Box>

                  <Typography className="text-sm font-semibold">
                    Rs. {getItemTotal(item).toLocaleString()}
                  </Typography>
                </Box>
              ))}

              <Typography className="text-xs text-blue-500 cursor-pointer mb-2">
                + Add more items
              </Typography>

              <Box className="border-t my-3" />

              <Typography className="text-xs mb-2">
                * To apply Promo Code, please login
              </Typography>

              <TextField
                placeholder="Promo Code"
                size="small"
                fullWidth
                disabled
              />

              {/* SUMMARY */}
              <Box className="mt-4 space-y-2 text-sm">
                <Box className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </Box>

                <Box className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>Rs. 50</span>
                </Box>

                <Box className="flex justify-between font-semibold">
                  <span>Grand total</span>
                  <span>Rs. {(subtotal + 50).toLocaleString()}</span>
                </Box>
              </Box>

              {/* BUTTON */}
              <Button
                fullWidth
                className="!bg-black !text-white !mt-4 !py-2 !rounded-lg"
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
