import { DollarSign, Eye } from "lucide-react";
type AnalyticsProps = {
  totalPrice: number;
  orders: number;
  linkCount: number;
  linkClicks: number;
};
export function Analytics({
  totalPrice,
  orders,
  linkCount,
  linkClicks,
}: AnalyticsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 pb-6">
      <div className="flex flex-col items-start gap-2 p-3 bg-muted/50 rounded-lg">
        <div className="w-full flex gap-1 items-center">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span>Revenue</span>
        </div>
        <div>
          <p className="font-semibold">${totalPrice}</p>
          <p className="text-xs text-muted-foreground">{orders} Orders</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 p-3 bg-muted/50 rounded-lg">
        <div className="w-full flex gap-1 items-center">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span>Web Visits</span>
        </div>
        <div>
          <p className="font-semibold">{linkCount}</p>
          <p className="text-xs text-muted-foreground">{linkClicks} link clicks</p>
        </div>
      </div>
    </div>
  );
}
