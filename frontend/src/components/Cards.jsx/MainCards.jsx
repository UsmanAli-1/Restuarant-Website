import Card from "@mui/material/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MainCards({ image, title, description, price }) {
  return (
    <Card
      elevation={0}
      sx={{ borderRadius: "10px" }}
      className="flex gap-4 p-3 rounded-2xl bg-white/90 items-start h-[130px] md:h-[150px] lg:h-[155px]"
    >
      {/* Image */}
      <div className="w-[100px] h-[105px] md:w-[120px] md:h-[125px] lg:w-[135px] lg:h-[130px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 h-full justify-between">

        {/* Top section */}
        <div>
          <h3 className="font-bold text-sm md:text-[15px] lg:text-base text-black">
            {title}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 min-h-[34px]">
            {description}
          </p>

        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <button className=" font-bold mt-1 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg">
            Rs. {price}.00
          </button>
          <button className="text-sm font-bold text-black border border-gray-300 rounded-lg px-2 py-1 hover:bg-gray-100 transition">
            Add To Cart
          </button>

        </div>

      </div>
    </Card>
  );
}