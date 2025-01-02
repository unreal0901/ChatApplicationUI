import { Bold, Italic, Link, Image as ImageIcon, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatEditor() {
  return (
    <div className="m-4 rounded-md outline outline-2 outline-gray-300 focus-within:outline-blue-500">
      <input
        placeholder="Type a message..."
        className="outline outline-transparent px-2 py-3 w-full"
        style={{
          outline: "none",
          border: "none",
        }}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Link className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1 justify-center px-2 pb-2">
          <Send className="h-4 w-4 mr-2 content-center" />
          <span>|</span>
          <ChevronDown className="h-4 w-4 content-center" />
        </div>
      </div>
    </div>
  );
}
