import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function FloatingCart({ inCart = [], subtotal, setCartOpen }) {
  if (!inCart || inCart.length === 0) return null;

  const totalItems = inCart.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-2.5 md:hidden">
      <div
        onClick={() => setCartOpen(true)}
        className="w-full max-w-[420px] backdrop-blur-md bg-black/50  text-white px-4 py-3 rounded-xl flex justify-between items-center shadow-lg cursor-pointer"
      >
        <div>
          <p className="text-sm">{totalItems} item </p>
          <p className="font-bold">Rs. {subtotal}</p>
        </div>

        <div className="flex items-center gap-2 font-bold">
          View Cart <ArrowCircleRightIcon />
        </div>
      </div>
    </div>
  );
}
