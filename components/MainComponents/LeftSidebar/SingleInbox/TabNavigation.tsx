import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabNavigation() {
  return (
    <Tabs defaultValue="messages" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="messages" className="flex-1">
          Messages
        </TabsTrigger>
        <TabsTrigger value="segments" className="flex-1" disabled>
          Segments
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
