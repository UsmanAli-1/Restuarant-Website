import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CartDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100vw", sm: 400 },
          height: "100%",
          bgcolor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            padding: "7px",
            fontWeight: "bold",
            bgcolor: "#f5f5f5",
            paddingLeft: "20px",
            boxShadow: "0 3px 4px rgba(88, 88, 88, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "medium" }}
          >
            Your Cart
          </Typography>
        </Box>

        {/* Empty Cart UI */}
        <Box
          sx={{
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#8a8a8a",
          }}
        >
          <Typography variant="h3">🍽️</Typography>
          <Typography sx={{ marginTop: "10px" }}>Your cart is empty</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
