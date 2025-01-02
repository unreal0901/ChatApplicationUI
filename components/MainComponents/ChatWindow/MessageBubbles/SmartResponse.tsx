import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface SmartResponseProps {
  message: string;
  onCancel: () => void;
  onSelect: () => void;
  platform: {
    icon: string;
    name: string;
  };
}

export function SmartResponse({
  message,
  onCancel,
  onSelect,
  platform,
}: SmartResponseProps) {
  return (
    <div className="flex flex-col gap-2 max-w-[80%] rounded-xl bg-white">
      <div className="flex flex-row-reverse gap-2 px-2 mt-2">
        <Avatar>
          <AvatarImage className="h-4 w-4" src={platform.icon}></AvatarImage>
          <AvatarFallback>{platform.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="rounded-2xl p-4">
        <p className="text-sm mb-3">{message}</p>
        <div className="flex gap-2 justify-between bg-blue-50 rounded-md py-2 px-2">
          <Avatar className="content-around">
            <AvatarImage className="h-6 w-6" src={platform.icon}></AvatarImage>
            <AvatarFallback>{platform.name}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold content-around">
            Smart Response Detected!
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onCancel}>
              Cancel
            </Button>
            <Button size="sm" className="bg-blue-600" onClick={onSelect}>
              Select
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
