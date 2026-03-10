export default function SmallCard({ image, title, price }) {
  return (
    <>
      <img src={image} className="w-20" />
      <h3>{title}</h3>
      <p>Rs. {price}.00</p>
    </>
  );
}
