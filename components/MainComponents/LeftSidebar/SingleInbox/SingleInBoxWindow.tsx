import { Inbox, Participant } from "@/types/types";
import ContactBlock from "./ContactBlock";
import { ContactMetaStrip } from "./ContactMetaStrip";
import { InboxHeader } from "./Header";
import { TabNavigation } from "./TabNavigation";
type InboxProps = {
  inbox: Inbox;
  resetInbox: () => void;
  setParticipant: (participant: Participant) => void;
};

const SingleInboxWindow = ({
  inbox,
  resetInbox,
  setParticipant,
}: InboxProps) => {
  return (
    <div className="w-full mx-auto bg-background border rounded-lg overflow-hidden">
      <InboxHeader
        title={inbox.name}
        resetInbox={resetInbox}
        icon={inbox.icon}
      />
      <TabNavigation />
      <div className="divide-y">
        <ContactMetaStrip count={inbox.count} />
        {inbox.participants.map((participant: Participant) => (
          <ContactBlock
            key={participant.email}
            participant={participant}
            clickHandler={() => setParticipant(participant)}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleInboxWindow;
