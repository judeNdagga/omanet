export function formatPrice(price: number) {
  return (price).toLocaleString("en-GB", {
    style: "currency",
    currency: "UGX",
  });
}
