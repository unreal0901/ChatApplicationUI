import {
  ShoppingCart,
  Phone,
  ChevronDown,
  Plus,
  Users,
  AtSign,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Participant } from "@/types/types";

type InfoComponentProps = {
  participant: Participant;
};
export function InfoComponent({ participant }: InfoComponentProps) {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row items-center">
          <ChevronDown />
          <h3 className="text-md font-semibold">Information</h3>
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-600">
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Users fill="gray" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Segment</span>
          </div>
          <p className="font-semibold">
            <ShoppingCart className="inline h-4 w-4" /> {participant.segment}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <AtSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Email</span>
          </div>
          <p className="font-semibold">{participant.email}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Phone fill="gray" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Phone</span>
          </div>
          <p className="font-semibold">{participant.phone}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Clock3 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Last Visited</span>
          </div>
          <p className="font-semibold">{participant.lastVisited}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full mt-4 text-left justify-start font-semibold"
      >
        <ChevronDown className="h-4 w-4 mr-2" />
        Show more
      </Button>
    </div>
  );
}
