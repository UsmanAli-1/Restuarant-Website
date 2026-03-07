import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function UpperHeader() {
  return (
    <>
      <div className="h-20 flex items-center justify-center sticky top-0 z-50">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid size="grow" className="flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="Restaurant Logo"
                className="rounded-md w-12 md:w-[65px]"
              />
            </Grid>
            <Grid size={6} className="flex items-center ">
              <div className="flex">
                <div className="flex items-center justify-center mr-2">
                  <LocationPinIcon sx={{ fontSize: { xs: 25, md: 32 } }} />
                </div>
                <div className="block">
                  <div className="font-bold text-sm md:text-base flex items-center">
                    Deliver to <ArrowDropDownIcon />
                  </div>
                  <div className="text-xs md:text-sm truncate max-w-[180px] md:max-w-none">
                    <a href="#">H no R-50 street 2 sindhi society</a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size="grow" className="flex pl-4 items-center justify-center">
              <div className="relative">
                <ShoppingBagIcon sx={{ fontSize: { xs: 25, md: 28 } }} />
                <span className="border absolute -top-2 -right-2 bg-black text-white text-[10px] md:text-xs w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-md">
                  0
                </span>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
