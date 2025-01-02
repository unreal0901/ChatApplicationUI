"use client";
import { Participant } from "@/types/types";
import ChatWindow from "./ChatWindow/ChatWindow";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import ProfileSideBar from "./ProfileSidebar/ProfileSideBar";
import { useState } from "react";

const FullInboxView = () => {
  const [selectedParticipant, setSelectedParticipant] =
    useState<Participant | null>(null);
  return (
    <div className="flex">
      <LeftSidebar
        setParticipant={(participant: Participant) =>
          setSelectedParticipant(participant)
        }
      />
      <ChatWindow participant={selectedParticipant} />

      {selectedParticipant && (
        <ProfileSideBar participant={selectedParticipant} />
      )}
    </div>
  );
};

export default FullInboxView;
