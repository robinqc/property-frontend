import { Home } from "lucide-react"
import Link from "next/link"
export default function Logo() {
    return (
        <Link href="/properties" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 cursor-pointer">
              <Home className="h-5 w-5 text-primary-background" />
            <span className="text-xl font-bold text-foreground font-[Cinzel]">PROPERTY</span>
          </div>   
        </Link>
    )
}