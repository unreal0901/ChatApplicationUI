import { Users, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ContactMetaStripProps = {
  count: number;
};

export function ContactMetaStrip({ count = 232 }: ContactMetaStripProps) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <Button variant="ghost" size="sm" className="text-sm flex items-center">
        <Users fill="gray" className="h-4 w-4 mr-2" />
        <span className="font-semibold">All</span>
        <Badge variant="secondary" className="bg-blue-200 text-blue-600">
          {count}
        </Badge>
      </Button>
      <Button variant="ghost" size="sm" className="text-sm flex items-center">
        <Filter className="h-4 w-4 text-gray" fill="gray" />
        <span className="font-semibold">Oldest</span>
        <ChevronDown className="text-gray" />
      </Button>
    </div>
  );
}
