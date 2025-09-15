import { User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RightButtons() {
    return (
        <div className="flex items-center space-x-4">

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
    )
}