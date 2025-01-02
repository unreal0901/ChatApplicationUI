import { Phone, Video, MoreVertical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Participant } from "@/types/types";

type ChatWindowHeaderProps = {
  participant: Participant;
};
export function ChatWindowHeader({ participant }: ChatWindowHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={participant.avatar} alt="User" />
          <AvatarFallback>{participant.name}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{participant.name}</span>
            <div className="h-4 w-4 rounded-full bg-blue-600 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{participant.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-blue-100 rounded-full px-3 py-1">
          <Avatar className="h-4 w-4">
            <AvatarImage src={participant.platform.icon}></AvatarImage>
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{participant.platform.name}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
