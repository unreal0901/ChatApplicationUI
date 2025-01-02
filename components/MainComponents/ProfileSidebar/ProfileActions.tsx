import { Phone, Video, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ProfileActions() {
  return (
    <div className="flex justify-center gap-12 px-6 pb-6">
      <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
        <Phone fill="gray" className="h-6 w-6" />
        <span className="text-xs">Call</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
        <Video fill='gray' className="h-6 w-6" />
        <span className="text-xs">Video</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex flex-col items-center gap-1">
        <MoreHorizontal fill='gray' className="h-6 w-6" />
        <span className="text-xs">More</span>
      </Button>
    </div>
  )
}

