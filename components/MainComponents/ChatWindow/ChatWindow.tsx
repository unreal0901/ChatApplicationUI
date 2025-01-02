"use client";
import { Participant } from "@/types/types";
import { MessageSquareOff } from "lucide-react";
import { ChatEditor } from "./ChatEditor";
import { ChatWindowHeader } from "./ChatWindowHeader";
import { MessageBubble } from "./MessageBubbles/MessageBubble";
import { ProductMessage } from "./MessageBubbles/ProductMessage";
import { SmartResponse } from "./MessageBubbles/SmartResponse";

type ChatWindowProps = {
  participant: Participant | null;
};

const ChatWindow = ({ participant }: ChatWindowProps) => {
  return (
    <div
      className={`w-full max-h-screen  bg-background border rounded-lg overflow-hidden flex flex-col
        ${participant ? "max-w-[50%]" : "max-w-full"}`}
    >
      {participant ? (
        <>
          <ChatWindowHeader participant={participant} />
          <div
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/98/93/b6/9893b63fa8dcd0191c393e18a33531c3.jpg)",
              backgroundRepeat: "repeat",
            }}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            <MessageBubble
              profile={{
                name: participant.name,
                email: participant.email,
                icon: participant.avatar,
              }}
              type="system"
              content={`This is the very beginning of your direct message history with @${participant.name}`}
            />
            <div className="text-center text-sm text-muted-foreground">
              <span className="bg-white px-3 py-1 rounded-md"> Today</span>
            </div>
            {participant.messages.map((message, index) => {
              if (message.type === "standard") {
                return (
                  <MessageBubble
                    key={index}
                    type={message.direction}
                    content={message.message}
                    timestamp={message.time}
                  />
                );
              } else if (message.type === "smart") {
                return (
                  <SmartResponse
                    key={index}
                    platform={{
                      icon: participant.platform.icon,
                      name: participant.platform.name,
                    }}
                    message={message.message}
                    onCancel={() => {}}
                    onSelect={() => {}}
                  />
                );
              } else if (message.type === "product") {
                return (
                  <ProductMessage
                    key={index}
                    productName={message.message}
                    price={59}
                    username={message.username || "Ekrem Konter"}
                    timestamp={message.time}
                  />
                );
              }
            })}
            {/* <MessageBubble
              type="outgoing"
              content="I keep getting *error while creating a new pop up* for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart"
              timestamp="12:52 PM"
            />
            <SmartResponse
              platform={{
                icon: participant.platform.icon,
                name: participant.platform.name,
              }}
              message="Hey there! I noticed you're having trouble with the pop-up setup. Would you like me to help you troubleshoot this issue?"
              onCancel={() => {}}
              onSelect={() => {}}
            />
            <MessageBubble
              type="outgoing"
              content="Hey, #firsttime I saw you were curious about our products. My name is X from StoreName, feel free to save my number and send me a text if you have any questions or concerns. If you're ready."
              timestamp="12:54 PM"
            />
            <ProductMessage
              productName="SNOW® TEETH WHITENING KIT"
              price={59}
              username="Ekrem Konter"
              timestamp="2m ago"
            /> */}
          </div>
          <ChatEditor />
        </>
      ) : (
        <div
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/98/93/b6/9893b63fa8dcd0191c393e18a33531c3.jpg)",
            backgroundRepeat: "repeat",
          }}
          className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 bg-gray-50"
        >
          {/* <AiOutlineMessage size={48} className="text-muted-foreground" /> */}
          <MessageSquareOff className="text-muted-foreground" size={48} />
          <h2 className="text-lg font-medium text-muted-foreground">
            Start a New Chat
          </h2>
          <p className="text-sm text-gray-500">
            Select a Participant to start chat
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
