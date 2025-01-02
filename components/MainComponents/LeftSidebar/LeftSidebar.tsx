import { useState } from "react";

import Data from "@/dumm_date.json";
import { Card } from "@/components/ui/card"; // Assuming you're using ShadCN or a similar library
import SingleInboxWindow from "./SingleInbox/SingleInBoxWindow";
import { Inbox, Participant } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellDot, Inbox as InboxIcon } from "lucide-react";
type LeftSideBarProps = {
  setParticipant: (participant: Participant) => void;
};

const LeftSidebar = ({ setParticipant }: LeftSideBarProps) => {
  const alldata = Data;
  const inboxes = alldata.inboxes;
  const [selectedInbox, setSelectedInbox] = useState<Inbox | null>(null);

  const handleInboxSelect = (inbox: Inbox | null) => {
    setSelectedInbox(inbox);
  };

  return (
    <div className="left-sidebar min-h-screen max-w-[350px] border-r min-w-[350px]">
      {selectedInbox ? (
        <SingleInboxWindow
          inbox={selectedInbox}
          resetInbox={() => handleInboxSelect(null)}
          setParticipant={setParticipant}
        />
      ) : (
        <div className="space-y-4 p-4">
          <div className="flex justify-between items-center">
            <h2 className="flex items-center gap-2">
              <InboxIcon className="h-6 w-6 text-muted-foreground" />
              <span className="font-semibold">Inboxes</span>
            </h2>
            <BellDot className="h-6 w-6 text-blue-600" />
          </div>
          {inboxes.map((inbox) => (
            <Card
              key={inbox.name}
              className="cursor-pointer p-4 hover:bg-gray-100"
              onClick={() => handleInboxSelect(inbox)}
            >
              <div className="flex justify-between items-center">
                <Avatar>
                  <AvatarImage src={inbox.icon} />
                  <AvatarFallback>{inbox.name}</AvatarFallback>
                </Avatar>
                <p>{inbox.name}</p>
                <span className="text-sm text-gray-500">
                  {inbox.participants.length}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
