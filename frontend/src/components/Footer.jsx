import { Box, Typography, Grid, Link, Divider, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="bg-white w-full "
      sx={{ pt: { xs: 4, md: 6 }, pb: 2 }}
    >
      {/* ── Max-width container — matches your header's max-w-[1200px] mx-auto ── */}
      <Box className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={7}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ sm: "flex-start" }}
            >
              {/* Restaurant Logo — swap src with your logo path */}
              <Box
                component="img"
                src="/logo.jpg"
                alt="Mujahid Foods Logo"
                sx={{
                  width: 155,
                  height: 155,
                  objectFit: "cover",
                  borderRadius: 1.5,
                  flexShrink: 0,
                  border: "1px solid #eee",
                  backgroundColor: "#1a1a1a",
                }}
              />

              {/* Contact Info */}
              <Box sx={{ textAlign: { sm: "left" } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1.2,
                    fontFamily: "'Arial Black', sans-serif",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    color: "#111",
                  }}
                >
                  Mujahid Foods
                </Typography>

                {[
                  { label: "Phone:", value: "+92 300 1234567" },
                  { label: "Email:", value: "support@mujahidfoods.com" },
                  {
                    label: "Address:",
                    value:
                      "Main Dalmia opposite Majeed S.R.E Stadium Road , Karachi",
                  },
                ].map(({ label, value }) => (
                  <Typography
                    key={label}
                    variant="body2"
                    sx={{ mb: 0.7, color: "#464646b6", fontSize: "0.875rem" }}
                  >
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#111" }}
                    >
                      {label}{" "}
                    </Box>
                    {value}
                  </Typography>
                ))}

                {/* Reserved space where app store badges would go */}
                <Box sx={{ mt: 2.5, height: 40 }} />
              </Box>
            </Stack>
          </Grid>

          {/* ────────────────────────────────────
            RIGHT COLUMN: Timings + Links
        ──────────────────────────────────── */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 1.5,
                fontFamily: "'Arial Black', sans-serif",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                color: "#111",
              }}
            >
              Our Timings
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={1}
              sx={{ mb: 3 }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#111" }}
              >
                Monday – Sunday
              </Typography>
              <Typography variant="body2" sx={{ color: "#464646b6" }}>
                07:00 PM – 02:00 AM
              </Typography>
            </Stack>

            {/* Footer navigation links */}
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 0.8 }}>
              {["Terms and conditions", "Privacy Policy"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="always"
                  variant="body2"
                  sx={{
                    color: "#464646b6",
                    fontSize: "0.82rem",
                    textUnderlineOffset: "3px",
                    "&:hover": { color: "#000" },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Stack>

            <Link
              href="#"
              underline="always"
              variant="body2"
              sx={{
                color: "#464646b6",
                fontSize: "0.82rem",
                textUnderlineOffset: "3px",
                "&:hover": { color: "#000" },
              }}
            >
              Sitemap
            </Link>
          </Grid>
        </Grid>

        {/* ── Divider ── */}
        <Divider sx={{ my: 3, borderColor: "#e0e0e0" }} />

        {/* ────────────────────────────────────
          Bottom Copyright Bar
      ──────────────────────────────────── */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={0.5}
          spacing={1}
        >
          <Typography
            variant="body2"
            sx={{ color: "#777", fontSize: "0.8rem" }}
          >
            © {new Date().getFullYear()} Powered by
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.8}>
            {/* Company name link */}
            <Link
              href="https://techmorphinnovation.web.app/" target="_blank"
              underline="hover"
              sx={{
                color: "#ff6b35",
                fontWeight: 700,
                fontSize: "0.82rem",
                fontFamily: "Arial, sans-serif",
                letterSpacing: 0.3,
              }}
            >
              <img
                src="/logo2-removebg-preview.png"
                alt="TechMorph Logo"
                style={{
                  height: "28px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>
          </Stack>
        </Stack>
      </Box>{" "}
      {/* end max-width container */}
    </Box>
  );
}
