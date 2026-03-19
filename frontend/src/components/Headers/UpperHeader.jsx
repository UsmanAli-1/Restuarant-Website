import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function UpperHeader({ cartOpen, setCartOpen, inCart }) {
  const currentTime = new Date().getHours();
  const isClosed = currentTime < 19 && currentTime >= 1;
  return (
    <>
      {isClosed && (
        <div className="fixed top-0 left-0 w-full h-8  bg-[#DC3545] font-semibold text-xs md:text-sm flex items-center justify-center ">
          <p>Sorry, we are closed right now and will re-open at 7:00 PM.</p>
        </div>
      )}
      <div className="h-19 bg-black fixed top-8 left-0 w-full z-50 flex justify-center">
        {/* CENTER CONTAINER */}
        <div className="w-full max-w-6xl px-4 flex items-center">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center">
              {/* LOGO */}
              <Grid size="grow" className="flex items-center ">
                <img
                  src="/logo.jpg"
                  alt="Restaurant Logo"
                  className="rounded-md w-12 md:w-[65px]"
                />
              </Grid>

              {/* LOCATION */}
              <Grid size={6} className="flex justify-center">
                <div className="flex items-center ">
                  <LocationPinIcon sx={{ fontSize: { xs: 24, md: 30 } }} />

                  <div className="ml-2">
                    <div className="font-bold text-sm md:text-base flex items-center">
                      Deliver to <ArrowDropDownIcon />
                    </div>

                    <div className="text-xs md:text-sm truncate max-w-[180px] md:max-w-[350px]">
                      <a href="#">
                        H no R-50 street 2 sindhi society gulshan-e-iqbal block
                        19
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* CART */}
              <Grid size="grow" className="flex items-center justify-end gap-3">
                {/* CALL BUTTON */}
                <a href="tel:+923001234567">
                  <div className="border border-gray-400/30 border-2 text-white flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white hover:text-black transition">
                    <PhoneInTalkIcon sx={{ fontSize: 20 }} />

                    {/* HIDDEN ON MOBILE */}
                    <span className="hidden md:block text-sm font-semibold">
                      +92 300 1234567
                    </span>
                  </div>
                </a>
                {/* CART */}
                <div
                  className="relative hidden md:block cursor-pointer"
                  onClick={() => setCartOpen(true)}
                >
                  <ShoppingBagIcon sx={{ fontSize: { xs: 25, md: 28 } }} />

                  <span className="absolute -top-2 -right-2 bg-black border text-white text-[10px] md:text-xs w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-md">
                    {inCart?.length || 0}
                  </span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}
