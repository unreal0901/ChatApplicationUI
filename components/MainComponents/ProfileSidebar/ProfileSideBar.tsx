import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileActions } from "./ProfileActions";
import { Analytics } from "./Analytics";
import { InfoComponent } from "./InfoComponent";
import { TagsComponent } from "./TagsComponent";
import { Participant } from "@/types/types";
import { Archive, Clock3, User } from "lucide-react";
import { SearchInput } from "@/components/ui/search_input";

type ProfileSideBarProps = {
  participant: Participant;
};
const ProfileSidebar = ({ participant }: ProfileSideBarProps) => {
  return (
    <div className="w-full max-h-screen  max-w-[30%] border-l overflow-y-scroll">
      <ProfileInfo participant={participant} />
      <ProfileActions />
      <Analytics
        totalPrice={participant.analytics.orders.price}
        orders={participant.analytics.orders.count}
        linkClicks={participant.analytics.clicks.linkClicks}
        linkCount={participant.analytics.clicks.totalClicks}
      />
      <Tabs defaultValue="info" className="mx-6">
        <TabsList className="w-full justify-evenly px-6">
          <TabsTrigger value="info" className="w-1/3">
            <User fill="current" />
          </TabsTrigger>
          <TabsTrigger value="activity" disabled className="w-1/3">
            <Archive fill="current" />
          </TabsTrigger>
          <TabsTrigger value="orders" disabled className="w-1/3">
            <Clock3 fill="current" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="border-t">
          <div className="pb-4 mt-2">
            <SearchInput
              placeholder="Search in general..."
              className="bg-muted/50"
            />
          </div>
          <InfoComponent participant={participant} />
          <TagsComponent tags={participant.tags} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSidebar;
