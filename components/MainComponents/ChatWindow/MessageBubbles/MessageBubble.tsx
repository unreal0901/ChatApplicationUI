import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";

interface MessageBubbleProps {
  content: string;
  type?: "incoming" | "outgoing" | "system";
  timestamp?: string;
  className?: string;
  profile?: {
    name: string;
    icon: string;
    email: string;
  };
}

export function MessageBubble({
  content,
  type = "incoming",
  timestamp,
  className,
  profile,
}: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex flex-col max-w-[80%]",
        type === "outgoing" && "ml-auto",
        type === "system" && "mx-auto max-w-none text-center",
        className
      )}
    >
      <div
        className={cn(
          "rounded-xl px-4 py-2",
          type === "incoming" &&  "bg-white",
          type === "outgoing" && "bg-blue-600 text-white",
          type === "system" && "bg-white text-muted-foreground text-sm"
        )}
      >
        {profile && (
          <div className="flex flex-row py-2 gap-2">
            <Avatar>
              <AvatarImage src={profile.icon} />
              <AvatarFallback>{profile.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-black font-bold text-left">{profile.name}</p>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
          </div>
        )}
        <p className="text-left">{content}</p>
      </div>
      {timestamp && (
        <span className="text-xs text-muted-foreground mt-1">{timestamp}</span>
      )}
    </div>
  );
}
