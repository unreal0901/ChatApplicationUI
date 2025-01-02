import { ArrowLeft, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type InboxHeaderProps = {
  title: string;
  resetInbox: () => void;
  icon: string;
};

export function InboxHeader({
  title = "BlueChat",
  resetInbox,
  icon
}: InboxHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => resetInbox()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={icon} />
              <AvatarFallback>{title}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">{title}</h1>
              <p className="text-sm text-muted-foreground">Inbox</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
