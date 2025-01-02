import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Participant } from "@/types/types";
import { MapPin, MessageCircle } from "lucide-react";

type ProfileInfoProps = {
  participant: Participant;
};
export function ProfileInfo({ participant }: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="relative">
        <Avatar className="h-20 w-20">
          <AvatarImage src={participant.avatar} alt="Profile" />
          <AvatarFallback>{participant.name}</AvatarFallback>
        </Avatar>
        <div className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
          <MessageCircle className="h-3 w-3 text-white" />
        </div>
      </div>
      <h2 className="mt-4 font-semibold text-lg">{participant.name}</h2>
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        {participant.lastActive},
        <MapPin className="h-3 w-3" />
        <span>in {participant.location}</span>
      </div>
    </div>
  );
}
