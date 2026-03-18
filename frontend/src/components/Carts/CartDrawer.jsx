import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { getItemTotal } from "../../utils/cart";
import Checkout from "../../Pages/Checkout";
// import { useNavigate } from "react-router-dom";
// import {  } from "../../Pages/Checkout";

export default function CartDrawer({
  open,
  onClose,
  inCart = [],
  setInCart,
  subtotal,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const navigate = useNavigate();

  function handleDelete(index) {
    setInCart((prev) => prev.filter((_, i) => i !== index));
  }

  function handleClearCart() {
    setInCart([]);
  }

  function increase(index) {
    setInCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function decrease(index) {
    setInCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      ),
    );
  }

  const delivery = 150;

  const grandTotal = subtotal + delivery;

  return (
    // ---------------------------------------
    // Main Div
    // ---------------------------------------
    <>
      <Drawer
        anchor={isMobile ? "bottom" : "right"}
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: { xs: "100vw", sm: 400 },
            borderTopLeftRadius: { xs: "30px", sm: "12px" },
            borderTopRightRadius: { xs: "30px", sm: "0" },
            borderBottomLeftRadius: { sm: "12px" },
            overflow: "hidden",
            marginTop: { xs: "78px", sm: "0px", md: "0px" },
            height: { xs: "80vh", sm: "100vh", md: "100vh" },
          },
        }}
      >
        {/* Mobile Close icon */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "fixed",
            top: "30px",
            right: "15px",
            bgcolor: "#ffffffb9",
            color: "black",
            width: 35,
            height: 35,
            zIndex: 2000,
            display: { xs: "flex", sm: "none" },
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#f5f5f5" },
            borderRadius: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* ---------------------------------------------------------------------------------
    Inner Cart Div 
    --------------------------------------------------------------------------------- */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#fafafa",
            position: "relative",
          }}
        >
          {/* ---------------------------------------------------------------------------------
    Header Div 
    --------------------------------------------------------------------------------- */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2.5,
              py: 1.5,
              bgcolor: "#f5f5f5",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <Typography fontWeight="bold">Your Cart</Typography>

            {!inCart || inCart.length === 0 ? null : (
              <Typography
                sx={{
                  fontSize: "14px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                onClick={handleClearCart}
              >
                Clear cart
              </Typography>
            )}
          </Box>

          {/* ---------------------------------------------------------------------------------
        Cart item Div 
        --------------------------------------------------------------------------------- */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 2.5,
              py: 1,
            }}
          >
            {!inCart || inCart.length === 0 ? (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#bdbdbd",
                  gap: 1,
                }}
              >
                <RestaurantMenuIcon sx={{ fontSize: 60, opacity: 0.7 }} />

                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Your cart is empty
                </Typography>
              </Box>
            ) : (
              inCart.map((item, index) => (
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
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* RIGHT CONTENT */}
                    <Box sx={{ flex: 1 }}>
                      <Typography fontWeight="bold">{item.title}</Typography>

                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: "#7a7a7a",
                          maxWidth: "240px",
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* ---------------------------------------------------------------------------------
                     Other Details Div 
                    --------------------------------------------------------------------------------- */}

                      <Box sx={{ color: "#7a7a7a", mt: "5px" }}>
                        {/* MAKE IT A MEAL */}
                        {item.meal && (
                          <>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "black",
                                fontWeight: "semibold",
                              }}
                            >
                              Make It A Meal
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                              1x {item.meal.label}
                            </Typography>
                          </>
                        )}

                        {/* ADD ON */}
                        {item.addon && (
                          <>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "black",
                                fontWeight: "semibold",
                                mt: 0.5,
                              }}
                            >
                              Add On
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                              1x {item.addon.label}
                            </Typography>
                          </>
                        )}

                        {/* DRINK */}
                        {item.drink && (
                          <>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "black",
                                fontWeight: "semibold",
                                mt: 0.5,
                              }}
                            >
                              Drinks
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                              1x {item.drink.label}
                            </Typography>
                          </>
                        )}

                        {/* INSTRUCTIONS */}
                        {item.instructions && (
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontStyle: "italic",
                              color: "#9e9e9e",
                            }}
                          >
                            "{item.instructions}"
                          </Typography>
                        )}
                      </Box>

                      {/* ---------------------------------------------------------------------------------
                     Price Div 
                    --------------------------------------------------------------------------------- */}

                      <Typography
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        Rs. {getItemTotal(item).toLocaleString()}
                      </Typography>

                      {/* ---------------------------------------------------------------------------------
                     Counter + Delete Div 
                    --------------------------------------------------------------------------------- */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* COUNTER */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <IconButton
                            sx={{
                              bgcolor: "black",
                              color: "white",
                              width: 25,
                              height: 25,
                              borderRadius: "8px",
                              "&:hover": {
                                bgcolor: "black",
                              },
                            }}
                            onClick={() => decrease(index)}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>

                          <Box
                            sx={{
                              border: "1px solid #dcdcdc",
                              px: 1.5,
                              py: 0.3,
                              borderRadius: "5px",
                              fontSize: "14px",
                            }}
                          >
                            {item.quantity || 1}
                          </Box>

                          <IconButton
                            sx={{
                              bgcolor: "black",
                              color: "white",
                              width: 25,
                              height: 25,
                              borderRadius: "8px",
                              "&:hover": {
                                bgcolor: "black",
                              },
                            }}
                            onClick={() => increase(index)}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>

                        {/* DELETE */}
                        <IconButton onClick={() => handleDelete(index)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ borderBottom: "1px solid #e5e5e5", mb: 3 }} />
                </Box>
              ))
            )}
          </Box>

          {/* ---------------------------------------------------------------------------------
        Summary + Checkout Div 
        --------------------------------------------------------------------------------- */}

          {!inCart || inCart.length === 0 ? null : (
            <Box
              sx={{
                px: 2.5,
                pt: 2,
                borderTop: "1px solid #e5e5e5",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography fontSize="14px">Subtotal</Typography>
                <Typography fontSize="14px">
                  Rs. {subtotal.toLocaleString()}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography fontSize="14px">Delivery Charges</Typography>
                <Typography fontSize="14px">Rs. 150.00</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                <Typography fontWeight="bold">Grand total</Typography>
                <Typography fontWeight="bold">
                  Rs. {grandTotal.toLocaleString()}
                </Typography>
              </Box>

              {/* CHECKOUT */}
              <Box
                sx={{
                  bgcolor: "black",
                  color: "white",
                  textAlign: "center",
                  py: 1.6,
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  mb: 2,
                }}
                // onClick={navigate("../../Pages/Checkout")}
              >
                Checkout
              </Box>
            </Box>
          )}
        </Box>
      </Drawer>
      <Checkout 
      inCart={inCart}
      getItemTotal={getItemTotal}
      subtotal={subtotal}
      />
    </>
  );
}
