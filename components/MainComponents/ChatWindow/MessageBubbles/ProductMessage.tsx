import { ShoppingCart } from "lucide-react";

interface ProductMessageProps {
  productName: string;
  price: number;
  username: string;
  timestamp: string;
}

export function ProductMessage({
  productName,
  price,
  username,
  timestamp,
}: ProductMessageProps) {
  return (
    <div className="flex flex-col gap-1 max-w-[80%]">
      <div className="flex items-center gap-2 bg-white rounded-2xl p-3">
        <ShoppingCart color="blue" className="h-5 w-5" />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="text-blue-600">@{username}</span>
            <span className="text-sm">Product purchased!</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{productName}</span>
            <span className="text-sm font-medium">${price}</span>
          </div>
        </div>
      </div>
      <span className="text-xs text-muted-foreground">{timestamp}</span>
    </div>
  );
}
