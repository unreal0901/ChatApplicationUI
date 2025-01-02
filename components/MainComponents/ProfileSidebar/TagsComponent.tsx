import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/types/types";

type TagsComponentProps = {
  tags: Tag[];
};
export function TagsComponent({ tags }: TagsComponentProps) {
  return (
    <div className="pt-4 pb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row items-center">
          <ChevronDown />
          <h3 className="text-md font-semibold">Tags</h3>
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-600">
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <Badge
            key={tag.id}
            variant="secondary"
            className="bg-slate-200 rounded-md py-2"
          >
            {tag.name} ×
          </Badge>
        ))}
      </div>
    </div>
  );
}
