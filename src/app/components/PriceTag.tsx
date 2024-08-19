import { formatPrice } from "../lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`text-lime-500 ${className}`}>{formatPrice(price)}</span>;
}
