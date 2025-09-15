import { Home } from "lucide-react"
export default function Logo() {
    return (
        <div className="flex items-center space-x-2 cursor-pointer">
              <Home className="h-5 w-5 text-primary-background" />
            <span className="text-xl font-bold text-foreground font-[Cinzel]">MILLION</span>
          </div>   
    )
}