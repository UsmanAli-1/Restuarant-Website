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

export default function CartDrawer({ open, onClose, inCart=[] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
          height: { xs: "91vh", sm: "100vh", md: "100vh" },
        },
      }}
    >
      {/* MOBILE CLOSE */}
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

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fafafa",
          position: "relative",
        }}
      >
        {/* HEADER */}
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

          <Typography
            sx={{
              fontSize: "14px",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Clear cart
          </Typography>
        </Box>

        {/* CART ITEMS */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: 2.5,
            py: 1,
          }}
        >
          {!inCart || inCart.length === 0 ? (
            <Typography sx={{ textAlign: "center", mt: 4 }}>
              Your cart is empty
            </Typography>
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
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#7a7a7a",
                        maxWidth: "240px",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 500,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      Rs. {item.price}
                    </Typography>

                    {/* COUNTER + DELETE */}
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
                          }}
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
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      {/* DELETE */}
                      <IconButton>
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

        {/* SUMMARY */}
        <Box
          sx={{
            px: 2.5,
            pt: 2,
            borderTop: "1px solid #e5e5e5",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography fontSize="14px">Subtotal</Typography>
            <Typography fontSize="14px">
              Rs.{" "}
              {inCart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
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
              Rs.{" "}
              {inCart.reduce((total, item) => total + item.price * item.quantity, 0) + 150}
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
          >
            Checkout
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}