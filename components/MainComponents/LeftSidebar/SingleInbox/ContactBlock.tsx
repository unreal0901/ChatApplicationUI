"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Participant } from "@/types/types";
import { Check } from "lucide-react";

interface ContactCardProps {
  participant: Participant;
  clickHandler: () => void;
}

const ContactBlock = ({ participant, clickHandler }: ContactCardProps) => {
  const {
    lastActive: time,
    isRead,
    avatar,
    platform,
    name,
    message,
  } = participant;
  return (
    <div
      className="flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer"
      onClick={clickHandler}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{participant.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="font-medium">{name}</span>
            {platform && (
              <Avatar className="h-4 w-4">
                <AvatarImage src={platform.icon} />
                <AvatarFallback>{platform.name}</AvatarFallback>
              </Avatar>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p
          className={`text-sm truncate ${
            isRead ? "text-muted-foreground" : "font-medium"
          }`}
        >
          {message}
        </p>
      </div>
      {isRead && <Check className="h-4 w-4 text-blue-600 shrink-0 self-end" />}
    </div>
  );
};

export default ContactBlock;
