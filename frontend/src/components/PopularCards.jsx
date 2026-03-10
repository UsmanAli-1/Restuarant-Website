import Card from "@mui/material/Card";

export default function PopularCards({ image, title, price }) {
  return (
    <Card
      elevation={0}
      sx={{ borderRadius: "8px" }}
      className="relative w-full h-[150px] md:h-[200px] lg:h-[270px]  overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-3 left-3 text-white">
        <h3 className="font-semibold text-sm md:text-base leading-tight">
          {title}
        </h3>

        <p className="text-xs md:text-sm opacity-90">
          Rs. {price}.00
        </p>
      </div>
    </Card>
  );
}