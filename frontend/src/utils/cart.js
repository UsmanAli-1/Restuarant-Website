export const getItemTotal = (item) => {
  const base = Number(item.price) || 0;
  const meal = Number(item.meal?.price) || 0;
  const addon = Number(item.addon?.price) || 0;

  return (base + meal + addon) * (item.quantity || 1);
};